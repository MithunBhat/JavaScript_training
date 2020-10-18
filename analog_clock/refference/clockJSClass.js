export class clockLib {
    hourHand = document.querySelector('.hand-hour');
    minuteHand = document.querySelector('.hand-minute');
    secondHand = document.querySelector('.hand-seconds');

    constructor(className, delayHours = 0, delayMinutes = 0, delaySeconds = 0, speed = 0) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;

        this.className = className;
        this.delayHours = delayHours;
        this.delayMinutes = delayMinutes;
        this.delaySeconds = delaySeconds;
        this.speed = speed;
    }

    compareTime(varOne, varTwo) {
        if (varOne == varTwo) return false;
        else {
            return true;
        }
    }

    getTime = () => {
        const now = new Date();

        if (this.compareTime(this.seconds,(now.getSeconds()+this.delaySeconds))) {
            this.seconds = now.getSeconds()+this.delaySeconds;
            const secondsDegree = (this.seconds / 60) * 360;
            this.secondHand.style.transform = `rotate(${secondsDegree}deg)`
            console.log('seconds hand moved');
        }

        if (this.compareTime(this.minutes, (now.getMinutes()+this.delayMinutes))) {
            this.minutes = now.getMinutes()+this.delayMinutes;
            const minutesDegree = (this.minutes / 60) * 360;
            this.minuteHand.style.transform = `rotate(${minutesDegree}deg)`
            console.log('minute hand moved');
        }

        if (this.compareTime(this.hours, ((now.getHours()%12)+this.delayHours))) {
            this.hours = (now.getHours() % 12)+this.delayHours;
            const hoursDegree = ((this.hours * 5) / 60) * 360;
            this.hourHand.style.transform = `rotate(${hoursDegree}deg)`;
            console.log('hour hand moved')
        }
    }

    start = () => {
        var div = document.createElement('div');
        div.setAttribute('class', 'clock-face');
        div.innerHTML = `
            <div class="clock-face number1">1</div>
            <div class="clock-face number2">2</div>
            <div class="clock-face number3">3</div>
            <div class="clock-face number4">4</div>
            <div class="clock-face number5">5</div>
            <div class="clock-face number6">6</div>
            <div class="clock-face number7">7</div>
            <div class="clock-face number8">8</div>
            <div class="clock-face number9">9</div>
            <div class="clock-face number10">10</div>
            <div class="clock-face number11">11</div>
            <div class="clock-face number12">12</div>

            <div class="hand hand-hour"></div>
            <div class="hand hand-minute"></div>
            <div class="hand hand-seconds"></div>
        `;
        document.querySelector(`.${this.className}`).appendChild(div);

        setInterval(this.getTime, 1000);
    }

    stop = () => {
        clearInterval();
    }

}