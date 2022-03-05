let loc = document.getElementById('location')
let tempIcon = document.getElementById('temp-icon')
let tempValue = document.getElementById('temp-value')
let cilmate = document.getElementById('cilmate')
const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
let iconfile;


searchBtn.addEventListener('click' , function(e){
e.preventDefault()
getWeather(searchInput.value)
searchInput.value  = ''
})

const getWeather = async function(city){
    try {
        let key  = `02941255176c5de9147cad9377f07ddf`
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)

            const weatherdata = await res.json()
            console.log(weatherdata);
            const {name} = weatherdata
                    const {feels_like} = weatherdata.main;
                    const {id,main} = weatherdata.weather[0];
                    loc.innerText = name
                    tempValue.textContent = Math.round(feels_like )
                    cilmate.innerText = main
                    if (id<=300 && id >= 200) {
                        tempIcon.src = `./animated/thunder.svg`
                    }else if (id<=400 && id >= 300) {
                        tempIcon.src = `./animated/cloudy.svg`
                    }  else if (id<=600 && id >= 500) {
                        tempIcon.src = `./animated/rainy-1.svg`
                    } else if (id<=800 && id >= 700) {
                        tempIcon.src = `./animated/snowy-1.svg`
                    } else if (id >= 800) {
                        tempIcon.src = `./animated/snowy-3.svg`
                    }
    } catch (error) {
        alert('it city not found')
    }
}



















window.addEventListener('load', () => {
    let long
    let lat


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
             long  =  position.coords.longitude
             lat  =  position.coords.latitude
        
        
            let key  = `02941255176c5de9147cad9377f07ddf`
        
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`

                fetch(api)
                .then(res => res.json())
                .then(data => {
                    const {name} = data
                    const {feels_like} = data.main;
                    const {id,main} = data.weather[0];

                    loc.innerText = name
                    tempValue.textContent = Math.round(feels_like )
                    cilmate.innerText = main
                        if (id<300 && id > 200) {
                            tempIcon.src = `./static/thunder.svg`
                        }else if (id<400 && id > 300) {
                            tempIcon.src = `./static/cloudy.svg`
                        }  else if (id<600 && id > 500) {
                            tempIcon.src = `./static/rainy-1.svg`
                        } else if (id<800 && id > 700) {
                            tempIcon.src = `./static/snowy-1.svg`
                        } else if (id == 800) {
                            tempIcon.src = `./static/day.svg`
                        }
                        
console.log(data);
console.log(id);
                      

                       
                       


                        
                })

            })





    }

})
