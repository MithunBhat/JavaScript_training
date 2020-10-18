export function clockLib(id) {
    var clock = this;
    var timeout;
    var time;
    var currentTime = new Date();

    this.displayClock = displayClock;
    this.stop = stop;
    this.start = start;


    function displayClock() {
        loadCSS();
        var element = document.getElementById(id);
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
        element.appendChild(div);

        clock.secondHand = document.querySelector('.hand-seconds');
        clock.minuteHand = document.querySelector('.hand-minute');
        clock.hourHand = document.querySelector('.hand-hour');
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
        time += 1000;
        timeout = setTimeout(tick, time - Date.now());
        display();
        update();
    }


    function display() {
        var hours = clock.hours;
        var minutes = clock.minutes;
        var seconds = clock.seconds;

        const secondsDegree = (seconds / 60) * 360;
        clock.secondHand.style.transform = `rotate(${secondsDegree}deg)`
        console.log('seconds hand moved');

        const minutesDegree = (minutes / 60) * 360;
        clock.minuteHand.style.transform = `rotate(${minutesDegree}deg)`
        console.log('minute hand moved');

        const hoursDegree = ((hours * 5) / 60) * 360;
        clock.hourHand.style.transform = `rotate(${hoursDegree}deg)`;
        console.log('hour hand moved')
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