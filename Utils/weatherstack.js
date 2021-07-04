const request = require('request')

const weatherstack = (longitude, latitude, callback) => {
    const weatherstackurl = 'http://api.weatherstack.com/current?access_key=59f9a38c6cd968dfe0c7397b9b031b97&query=' + longitude + ',' + latitude + '&units = m'
    request({ url: weatherstackurl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services', undefined )
        }
        else if (response.body.error) {
            callback('Unable to find Location', undefined)
        }
        else {
            callback(undefined, response)
        }
    })
}

module.exports = weatherstack