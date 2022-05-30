
gsap.from(".block", {opacity:0, y:300, duration: 3, ease:"bounce"})
const api = {
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key: "9df1e1cb0bdf2d387ec43c65073ded45"
  }
  

const input= document.querySelector("#input")
input.addEventListener("keydown", enter)

function enter (e) {
    if (e.keyCode === 13) {
        getInfo (input.value);
    }
  
}

async function getInfo(data) {
const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);

DisplayResult (resReceive)

}

function DisplayResult (resReceive) {
    console.log(resReceive)
    let city=document.querySelector("#city");
    city.textContent=`${resReceive.name},${resReceive.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML=`${Math.round(resReceive.main.temp) } <span>°</span>`;

    let feelsLike=document.querySelector("#feelsLike");
    feelsLike.innerHTML=`<span> Feels like:</span> ${Math.round(resReceive.main.feels_like)} <span>°</span>`;

    let condisiones=document.querySelector("#condisiones")
    condisiones.textContent=`${resReceive.weather[0].main}`;

    let variable=document.querySelector("#variable");
    variable.innerHTML= "Min:"+ `${Math.round(resReceive.main.temp_min)}<span>°</span>` +" " + "Max:"+  `${Math.round(resReceive.main.temp_max)}<span>°</span>`
    
}

function getOurDate (){

    const date=document.querySelector("#date")
    const myDate= new Date;
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day =  days[myDate.getDay()]; 
    let toDay= myDate.getDate();

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();

    date.innerHTML=`${day}`+" "+`${toDay}`+ " "+ `${month}`+ " "+ `${year}`
    
    console.log (day, toDay, month, year)
}