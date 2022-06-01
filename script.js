
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
const resReceive = await res.json();
  
DisplayResult (resReceive)
  
  getBackgroundImage(resReceive)

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
   
    let icon= document.querySelector(".icon")
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${resReceive.weather[0]['icon']}@2x.png">`
    
}

function getBackgroundImage(resReceive) {
  let conditions = resReceive.weather[0].main;
    
  if (conditions === "Clear") {
  body.style.backgroundImage =
  "url('https://i.pinimg.com/originals/d8/a2/ee/d8a2eee27b91f50078645085e4057f3c.gif')";
  }
     
    if (conditions === "Clouds") {
    body.style.backgroundImage =
    "url('https://i.gifer.com/origin/dd/ddedd3a2f4a3995d8cd1a8ab2033c9ce.gif')";
  }
   
  if (conditions === "Mist" || conditions === "Smoke" || conditions === "Haze" || conditions === "Dust" || conditions === "Fog" || conditions === "Sand" || conditions === "Ash" || conditions === "Squall" || conditions === "Tornado") {
   body.style.backgroundImage =
    "url('https://i.gifer.com/61P.gif')";
  }
      
  if (conditions === "Snow") {
      body.style.backgroundImage =
      "url('https://i.pinimg.com/originals/48/53/13/4853139a4a4f2fd18938c04e37eac07e.gif')";
  }
  
  if (conditions === "Rain") {
      body.style.backgroundImage =
      "url('https://i.gifer.com/Vi8C.gif')";
  }
  
  if (conditions === "Drizzle") {
      body.style.backgroundImage =
      "url('https://i.gifer.com/7sd0.gif')";
  }
  
  if (conditions === "Thunderstorm") {
      body.style.backgroundImage =
      "url('https://i.pinimg.com/originals/2d/64/a0/2d64a0589474de3d89388bff22b52c54.gif')";
  }
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