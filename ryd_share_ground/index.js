require('dotenv').config();

const   smartcar        = require('smartcar'),
        express         = require('express'),
        bodyParser      = require('body-parser'),
        mongoose        = require('mongoose'),
        passport        = require('passport'),
        LocalStrategy   = require("passport-local"),
        passportMon     = require('passport-local-mongoose'),
    //Smart car
        clientId        = process.env.CLIENTID,
        clientSecret    = process.env.CLIENTSECRET,
        redirectUri     = process.env.REDIRECTURI,
    //MongoDB
        dbUser          = process.env.DB_USER,
        dbPasswd        = process.env.DB_PASSWD,
        dbPath          = process.env.DB_PATH,
        port            = 8000;

let     app             = express();
mongoose.connect(`mongodb://${dbUser}:${dbPasswd}@${dbPath}`, {useNewUrlParser: true});
/**
 * User Schema
 * username: an email
 * accessToken: Whatever we get from Smart Car API
 */
const UserSchema = new mongoose.Schema({
   fullName: String,
    username: String,
    password: String,
    accessToken: String,
});

UserSchema.plugin(passportMon);
// Schema Model
const User = mongoose.model("User", UserSchema);



/**
 * Middleware
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: process.env.Secret,
    resave: false,
    saveUninitialized: false
}));

// Setting up Passport
app.use(passport.initialize());
app.use(passport.session());


//Serialize user
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Client setup
const Client = new smartcar.AuthClient({
    clientId,
    clientSecret,
    redirectUri,
    scope: ['read_vehicle_info'],
    testMode: true,
});

app.get('/', (req, res) =>{

    const link = Client.getAuthUrl({state: 'passive'});
    res.redirect(link);

});


app.get('/callback', (req, res, next) => {

    let access;
    if(req.query.error){
        // the user denied your requested permissions
        return next(new Error(req.query.error));
    }

    return Client.exchangeCode(req.query.code)
        .then(_access => {
            // in a production app you'll want to store this in some kind of persistent storage
            access = _access;

            //todo: remove this, testing purposes only
            console.log(_access);
            // get the user's vehicles
            return smartcar.getVehicleIds(access.accessToken);
        })
        .then(res => {
            // instantiate first vehicle in vehicle list
            const vehicle = new smartcar.Vehicle(res.vehicles[0], access.accessToken);
            // get identifying information about a vehicle
            return vehicle.info();
        })
        .then(data => {
            console.log(data);
            // {
            //   "id": "36ab27d0-fd9d-4455-823a-ce30af709ffc",
            //   "make": "TESLA",
            //   "model": "Model S",
            //   "year": 2014
            // }

            // json response will be sent to the user
            res.json(data);
        });


});


app.get('/vehicles/:token', (req, res) => {

    let accessToken  = req.params.token;
    smartcar.getVehicleIds(accessToken)
        .then(function(response) {
            res.json(response);
        });

});


app.post('/register', (req, res) =>{

    let username = req.body.username;
    let fullName = req.body.fullName;
    let password = req.body.password;
    console.log(req.body);

    User.register(new User({username, fullName}), password, (err, response) => {
        if(err){
            res.json({register: "failed"});
        }
        passport.authenticate("local")(req, res, () =>{
            res.json({register: "success"});
        });
    });

});


/**
 * Authenticate Here
 */
app.post('/auth', passport.authenticate('local'), (req, res) => {

    res.json({login: "valid"});

});


app.listen(port, ()=>{
    console.log(`App running on localhost:${port}`);
});