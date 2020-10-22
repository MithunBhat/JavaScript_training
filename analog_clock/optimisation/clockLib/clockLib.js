export function clockLib(id) {
    var clock = this;
    var timeout;
    var time;
    var currentTime = new Date();

    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    this.ID = id;
    this.displayClock = displayClock;
    this.stop = stop;
    this.start = start;
    this.element = document.getElementById(this.ID);


    function displayClock(color = 'white') {
        loadCSS();
        var div = document.createElement('div');
        div.setAttribute('class', 'clock');
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
        this.element.appendChild(div);
        clock.borderColor = this.element.querySelector("div.clock");
        clock.borderColor.style.borderColor = color;

        clock.secondHand = this.element.querySelector('.hand-seconds');
        clock.minuteHand = this.element.querySelector('.hand-minute');
        clock.hourHand = this.element.querySelector('.hand-hour');
    }


    function loadCSS() {
        var cssID = 'clockLibCSS';
        if (!document.getElementById('clockLibCSS')) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.id = cssID;
            link.rel = 'stylesheet';
            link.type = 'text/CSS';
            link.href = './clockLib/clockLib.css';
            head.appendChild(link);
        }
    }


    function stop() { 
        clearTimeout(timeout);
    }


    function start(second = currentTime.getSeconds(), 
        minute = currentTime.getMinutes(), hour = currentTime.getHours(), speed = 1) {
        timeout = setTimeout(tick, 0);
        time = Date.now();
        clock.seconds = second;
        clock.minutes = minute;
        clock.hours = hour;
        clock.speed = speed;
    }


    function tick() {
        debugger;
        time += 1000;
        timeout = setTimeout(tick, time - Date.now());
        display();
        update();
    }


    function display() {

        var newHours = clock.hours;
        var newMinutes = clock.minutes;
        var newSeconds = clock.seconds;

        if (compareTime(newSeconds, seconds)) {
            seconds = newSeconds;
            const secondsDegree = (seconds / 60) * 360;
            clock.secondHand.style.transform = `rotate(${secondsDegree}deg)`
            console.log('seconds hand moved');
        }
        
        if (compareTime(newMinutes ,minutes)) {
            minutes = newMinutes;
            const minutesDegree = (minutes / 60) * 360;
            clock.minuteHand.style.transform = `rotate(${minutesDegree}deg)`
            console.log('minute hand moved');
        }

        if (compareTime(newHours, hours)) {
            hours =  newHours;
            const hoursDegree = ((hours * 5) / 60) * 360;
            clock.hourHand.style.transform = `rotate(${hoursDegree}deg)`;
            console.log('hour hand moved')
        }
 
    }

    function compareTime(varOne, varTwo) {
        if (varOne == varTwo) return false;
        else return true;
    }
    

    function update() {
        var seconds = clock.seconds += clock.speed;

        if (seconds === 60) {
            clock.seconds = 0;
            var minutes = ++clock.minutes;

            if (minutes === 60) {
                clock.minutes = 0;
                var hours = ++clock.hours;

                if (hours === 12) clock.hours = 0;
            }
        }
    }
}