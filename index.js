const express = require('express');
const cors = require('cors');
const routes = require('./routes/index')
require('dotenv').config({path:'variables.env'});

const app = express();

// Define domains that are allowed to access this server.
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: (origin, callback) => {
        console.log("origin",origin);
        //Make sure if the request comes from a server that is within the "white list".
        const exist = whiteList.some(dominio => dominio === origin);
        if(exist){
            callback(null,true);
        }else{
            callback(new Error('Not allowed becouse of CORS.'))
        }
    }
}
// Configuring CORS on our Server
app.use(cors(corsOptions))


// Configuring all the routes
app.use('/', routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 7000;

// Start APP
app.listen(port, host, () => {
    console.log('El servidor esta funcionando.')
});

// app.listen(7000)