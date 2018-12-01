
const smartcar = require('smartcar');

const accessToken = '7a374360-2f27-4023-896d-0ea9dc50c629';

smartcar.getVehicleIds(accessToken)
    .then(function(response) {
        console.log(response);
    });