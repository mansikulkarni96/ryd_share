import Smartcar from '@smartcar/auth'

const smartcarClient = new Smartcar({
    clientId: '754ca30a-655a-4b86-a9a1-ef2916cf1fe5',
    redirectUri: 'https://javascript-sdk.smartcar.com/redirect-2.0.0?app_origin=http://localhost:3000',
    scope: ['read_vehicle_info', 'read_odometer'],
    onComplete: (err, cb) => {
        if (err) {
            console.log(err)
        }

        console.log(cb)
        
    }
})


export default smartcarClient