const data = require('./../data/weather.json')
/**
 * @user Vlect/juanferdaza23@gmail.com
 * @date April 17 2021 
 * @param {*} request 
 * @param {*} response 
 * @returns Returns to the client the weather.json data if and only if, the client used the correct API_KEY
 */
exports.weatherHome = (request, response) => {
    // API_KEY required to give acces to the user
    if(request.query.api_key === "XE6pZUooSW0S9ZB29QjZonI6bsbJ1kG6"){
        response.json(data);
    }else{
        response.json([
            {
                error:"No tienes acceso a este servio!",
            }
        ]);
    }
    }