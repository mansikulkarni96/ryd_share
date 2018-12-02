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

/**
 * Token Schema
 */

const TokenSchema = new mongoose.Schema({
    access: String,
    refresh: String
});


UserSchema.plugin(passportMon);
// Models
const User = mongoose.model("User", UserSchema);
const Token = mongoose.model("Token", TokenSchema);

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
    scope: ['read_vehicle_info', 'read_location', 'read_odometer', 'control_security'],
    testMode: false,
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
            Token.create({ access: _access.accessToken, refresh: _access.refreshToken}, (err, token) =>{
                if(err){
                    throw err;
                }
            });


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


/**
 * Gets all the vehicles' info for a certain access token
 */
app.get('/vehicles/info/:token', (req, res) => {

    let accessToken  = req.params.token;
    smartcar.getVehicleIds(accessToken)
        .then(response => {
            return response.vehicles;

        })
        .map(vid =>  new smartcar.Vehicle(vid, accessToken).info())
        .then( vehicle => {
            res.json(vehicle);
            console.log(vehicle);
        });

});


/**
 * Get odometer readings of vehicles by id
 */
app.get('/vehicle/odometer/:vid/:token', (req, res) => {

    let accessToken = req.params.token;
    smartcar.getVehicleIds(accessToken)
        .then(response => {
            return response.vehicles;
        })
        .then(vid => new smartcar.Vehicle(req.params.vid, accessToken).odometer())
        .then(vehicle => {
            res.json(vehicle);
            console.log(vehicle);
        })

});

/**
 * Get location of vehicle by id
 */
app.get('/vehicle/location/:vid/:token', (req, res) => {

    let accessToken = req.params.token;
    smartcar.getVehicleIds(accessToken)
        .then(response => {
            return response.vehicles;
        })
        .then(vid => new smartcar.Vehicle(req.params.vid, accessToken).location())
        .then(vehicle => {
            res.json(vehicle);
            console.log(vehicle);
        })

});



app.get('/vehicle/lock/:vid/:token', (req, res) => {

    let accessToken = req.params.token;
    smartcar.getVehicleIds(accessToken)
        .then(response => {
            return response.vehicles;
        })
        .then(vid => {
            const vehicle = new smartcar.Vehicle(req.params.vid, accessToken);
            return vehicle.lock();
        })
        .then(vehicle => {
            res.json(vehicle);
            console.log(vehicle);
        })

});

/**
 * Register a user
 */
app.post('/register', (req, res) =>{

    let username = req.body.username;
    let fullName = req.body.fullName;
    let password = req.body.password;
    // let accessToken = req.body.accessToken;
    console.log(req.body);

    User.register(new User({username, fullName, accessToken: ""}), password, (err, response) => {
        if(err){
            res.json({register: "failed"});
        }
        passport.authenticate("local")(req, res, () =>{
            res.json({register: "success"});
        });
    });

});


/**
 * Authenticate a user
 */
app.post('/auth', passport.authenticate('local'), (req, res) => {

    res.json({login: "valid"});

});


/**
 * Get a list of users
 */
app.get("/users", (req, res) =>{

    User.find({}, (error, response) =>{
        if(error){
            res.json({error: true});
        }else {
            res.json(response);
        }
    });


});



app.listen(port, ()=>{
    console.log(`App running on localhost:${port}`);
});