const key = `288eadc52a54b2adcb8558d9e63cde7f`;
const loadTemprature =(city)=>{
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&&units=metric`
fetch(url)
.then(res =>res.json())
.then(data => displayTemp(data))

}
const displayTemp=(data)=>{
    setText('temp',data.main.temp)
    setText('condition',data.weather[0].main)
}

document.getElementById('search-btn').addEventListener('click',function(){

const searhField = document.getElementById('search-field')
const city = searhField.value
loadTemprature(city)
// set city
document.getElementById('city').innerText = city;

})
const setText=(id,text)=>{
    const tempratures =document.getElementById(id)
    tempratures.innerText=text

}
loadTemprature('dhaka')

