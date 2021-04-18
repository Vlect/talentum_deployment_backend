const express = require('express');
const weatherController = require('../controllers/weatherController.js');
const data = require('./../data/weather.json');
const router = express.Router();
/**
 * @user    Vlect/juanferdaza23@gmail.com
 * @date    April 17 2021 
 * @description In this module we create all the routes with their own configuration.
 * @example router.get('/some-name', (request, response) => console.log(Hello from this end-point!))
 * @returns This module returns all the router configuration with all the routes that are currently configured.
 */
module.exports = () => {
    //ROUTES
    router.get('/', weatherController.weatherHome);
    return router;
}