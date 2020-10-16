export class clockLib {
    hourHand = document.querySelector('.hand-hour');
    minuteHand = document.querySelector('.hand-minute');
    secondHand = document.querySelector('.hand-seconds');

    constructor(delayHours = 0, delayMinutes = 0, delaySeconds = 0, speed = 0) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;

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

    start() {
        setInterval(this.getTime, 1000);
    }

}