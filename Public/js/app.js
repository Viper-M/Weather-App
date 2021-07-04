var search = document.getElementById('search')
var submit = document.getElementById('submit')
var h2 = document.getElementsByClassName('h2')
var data_view_location = document.getElementById('location')
var data_view_temp = document.getElementById('temp')
var data_view_wind = document.getElementById('wind')



submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const location =  search.value
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecastdata)
            }

            h2[0].textContent = data.location
            h2[1].textContent = 'Today\'s Temperature is ' + data.forecastdata.body.current.temperature + ' but it feels like ' + data.forecastdata.body.current.feelslike
            data_view_location.textContent = location
            data_view_temp.textContent = data.forecastdata.body.current.temperature
            data_view_wind.textContent = data.forecastdata.body.current.wind_speed + " km/hr"

        })
    })
})

console.log('Client Side Javascript Active')