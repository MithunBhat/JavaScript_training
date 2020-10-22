export class ClockLib {
    
    element;

    secondHand;
    minuteHand;
    hourHand;

    timeout;
    time;
    currentTime = new Date();

    hours = 0;
    minutes = 0;
    seconds = 0;
    speed = 0;

    interval;
    degree;

    timezoneObj = {
        'IND': [(this.currentTime.getHours()%12),this.currentTime.getMinutes(),this.currentTime.getSeconds()],
        'USA': [(this.currentTime.getHours()%12)-9, this.currentTime.getMinutes()-30, this.currentTime.getSeconds()],
        'AUS': [(this.currentTime.getHours()%12)+5,this.currentTime.getMinutes()+30,this.currentTime.getSeconds()]
    };

    constructor(speed, timezone) {
      this.speed = speed;
      this.timezone = timezone;
      this.create();
      this.start();
    }

    create = () => {
        this.element = document.createElement('div');
        this.element.setAttribute('id', this.timezone);
        this.element.setAttribute('class', 'clock');
        this.element.innerHTML = `
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
        this.secondHand = this.element.querySelector('.hand-seconds');
        this.minuteHand = this.element.querySelector('.hand-minute');
        this.hourHand = this.element.querySelector('.hand-hour');
    };

    start = () => {
        [this.hours, this.minutes, this.seconds] = this.getObjValue(this.timezoneObj, this.timezone);
        setInterval(() => {
            const secondsRatio = this.seconds++ / 60;
            const minutesRatio = (secondsRatio + this.minutes) / 60;
            const hoursRatio = (minutesRatio + this.hours) / 12;
            this.setRotation(this.secondHand, secondsRatio);
            this.setRotation(this.minuteHand, minutesRatio);
            this.setRotation(this.hourHand, hoursRatio);
            }, this.speed);
    };

    getObjValue = (obj, value) => {
        for (const key in obj) {
            if (key == value) {
                return obj[key];
            }
        }
    };

    setRotation = (hand, rotationRatio) => {
        this.degree = rotationRatio*360;
        hand.style.transform = `rotate(${this.degree}deg)`;
    };


    // start = () => {
    //     this.timeout = setTimeout(this.tick(), 0);
    //     this.time = Date.now();
    //     [this.hours, this.minutes, this.seconds] = this.getZones();
    // };

    // tick = () => {
    //     this.time += 1000;
    //     this.timeout = setTimeout(this.tick(), this.time - Date.now());
    //     this.display();
    //     this.update();
    // };

    // getZones = () => {
    //     for (const key in this.timezones) {
    //         if (key == this.timezone) {
    //             return this.timezones[key];
    //         }
    //     }
    // };

    // display = () => {
    //     var newHours = this.hours;
    //     var newMinutes = this.minutes;
    //     var newSeconds = this.seconds;

    //     if (this.compareTime(newSeconds, this.seconds)) {
    //         this.seconds = newSeconds;
    //         const secondsDegree = (this.seconds / 60) * 360;
    //         this.secondHand.style.transform = `rotate(${secondsDegree}deg)`
    //         console.log('seconds hand moved');
    //     }
        
    //     if (this.compareTime(newMinutes ,this.minutes)) {
    //         this.minutes = newMinutes;
    //         const minutesDegree = (this.minutes / 60) * 360;
    //         this.minuteHand.style.transform = `rotate(${minutesDegree}deg)`
    //         console.log('minute hand moved');
    //     }

    //     if (this.compareTime(newHours, this.hours)) {
    //         this.hours =  newHours;
    //         const hoursDegree = ((this.hours * 5) / 60) * 360;
    //         this.hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    //         console.log('hour hand moved')
    //     }
    // };

    // compareTime(varOne, varTwo) {
    //     if (varOne == varTwo) return false;
    //     else return true;
    // }

    // update = () => {
    //     this.seconds += (this.speed-1);

    //     if (this.seconds === 60) {
    //         this.seconds = 0;
    //         this.minutes += 1;

    //         if (this.minutes === 60) {
    //             this.minutes = 0;
    //             this.hours += 1;

    //             if (this.hours === 12) this.hours = 0;
    //         }
    //     }
    // };

    getElement() {
      return this.element; // the html element of the clock
    }
  }