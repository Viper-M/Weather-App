const express = require('express')
const geocode = require('../Utils/geocode')
const weatherstack = require('../Utils/weatherstack')

const path = require('path')
const app = express()
const port = process.env.PORT || 3000


const publicdirectorypath = path.join(__dirname, '../Public')
const viewspath = path.join(__dirname, '../templates/veiws')
app.set('view engine', 'hbs')

app.set('views', viewspath)
app.use(express.static(publicdirectorypath))




app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({'error' : 'You must provide an address'})
    }
    else{
    geocode( req.query.address , (error, { longitude, latitude, location } ={}) => {
        if (error) {
            return res.send({ 'error': error })
        }
        else {
            weatherstack(longitude, latitude, (error, forecastdata) => {
                if (error) {
                    return res.send({ 'error': error })
                }
                else{
                    res.send({ location, forecastdata})
                }
            })
        }
    })
}
})


app.get('', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('server is up on port'+port)
})