// const hourHand = document.querySelector('.hand-hour');
// const minuteHand = document.querySelector('.hand-minute');
// const secondHand = document.querySelector('.hand-seconds');

// function getTime() {
//     const now = new Date();

//     const seconds = now.getSeconds();
//     const secondsDegree = (seconds / 60) * 360;
//     secondHand.style.transform = `rotate(${secondsDegree}deg)`

//     const minutes = now.getMinutes();
//     const minutesDegree = (minutes / 60) * 360;
//     minuteHand.style.transform = `rotate(${minutesDegree}deg)`

//     const hours = now.getHours() % 12;
//     const hoursDegree = ((hours * 5) / 60) * 360;
//     hourHand.style.transform = `rotate(${hoursDegree}deg)`;
// }

// setInterval(getTime, 1000);

const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-seconds');

var hours = 0;
var minutes = 0;
var seconds = 0;

function compareTime(varOne, varTwo) {
    if (varOne == varTwo) return false;
    else {
        return true;
    }
}

function getTime() {
    const now = new Date();

    if (compareTime(seconds,now.getSeconds())) {
        seconds = now.getSeconds();
        const secondsDegree = (seconds / 60) * 360;
        secondHand.style.transform = `rotate(${secondsDegree}deg)`
        console.log('seconds hand moving');
    }

    if (compareTime(minutes, now.getMinutes())) {
        minutes = now.getMinutes();
        const minutesDegree = (minutes / 60) * 360;
        minuteHand.style.transform = `rotate(${minutesDegree}deg)`
        console.log('minute hand moving');
    }

    if (compareTime(hours, now.getHours()%12)) {
        hours = now.getHours() % 12;
        const hoursDegree = ((hours * 5) / 60) * 360;
        hourHand.style.transform = `rotate(${hoursDegree}deg)`;
        console.log('hour hand moving')
    }

}

setInterval(getTime, 1000);