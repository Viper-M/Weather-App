var search = document.getElementById('search')
var submit = document.getElementById('submit')
var message1 = document.getElementById('message1')
var message2 = document.getElementById('message2')


console.log('client type javascript')
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
            message1.textContent = data.location
            message2.textContent = data.forecastdata
        })
    })
})

