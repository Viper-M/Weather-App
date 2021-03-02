const request = require('request')
const geocode = require('../Utils/geocode')


const weatherstack = (longitude, latitude, callback) => {
    const weatherstackurl = 'http://api.weatherstack.com/current?access_key=59f9a38c6cd968dfe0c7397b9b031b97&query=' + longitude + ',' + latitude + '&units = m'
    request({ url: weatherstackurl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        }
        else if (response.body.error) {
            callback('Unable to find Location', undefined)
        }
        else {
            callback(undefined, 'Today\'s Temperature is ' + response.body.current.temperature + ' but it feels like ' + response.body.current.feelslike)
        }
    })
}

// geocode('kaithal', (error, {longitude , latitude , location}) => {
//     if (error) {
//         console.log(error)
//     }
//     else{
//         weatherstack(longitude , latitude , (error , forecastdata)=>{
//             if(error){
//                 console.log(error)
//             }
//             else{
//                 console.log(location)
//                 console.log(forecastdata)
//             }
//         })
//         }
//     }
// )



module.exports = weatherstack