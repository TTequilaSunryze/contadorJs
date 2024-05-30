const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "november",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
//console.log(items);

let futureDate = new Date (2024, 8, 10,20,0o0,0); // 2024, septiembre, martes 10 | 20:00:00
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();


let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();


let weekday = weekdays [futureDate.getDay()];



// future time in ms 

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    //console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate values 

    let days = t / oneDay;
    days = Math.floor(days);
    //console.log (days);

    let hours = Math.floor ((t % oneDay) / oneHour);
    //console.log(hours)

    let minutes = Math.floor((t % oneHour) / oneMinute);
    //console.log(minutes);

    let seconds = Math.floor((t % oneMinute) / 1000);
    //console.log(minutes);

    // set values array; 
    const values = [days, hours, minutes, seconds,];
    
    function format (item) {
        if (item < 10){
            return (item = `0${item}`);
        } 
        return item;
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if (t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class = "expired"> sorry, este contador ya ha finalizado </h4>`;
    }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();