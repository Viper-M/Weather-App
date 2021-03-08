const request = require('request')

const geocode = (address , callback) => {
    const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmlwZXJtMjAwMCIsImEiOiJja2cyOTBiazIwZmZ5MnJwYXpqZnFzZmRvIn0.1YFxcPZAACboburrNUPP7g'
    request({ url: geocodeurl, json: true }, (error, response) => {

        if(error){
            callback('Unable to connect to location services',undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find Location. Try another search',undefined)
        }
        else{
            callback(undefined, {
                'longitude' : response.body.features[0].center[1],
                'latitude': response.body.features[0].center[0],
                'location': response.body.features[0].place_name
            })
        }
    })
}

// geocode('k2324l' , (error , data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//     console.log(data)}
// })

module.exports = geocode