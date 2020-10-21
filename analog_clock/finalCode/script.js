import {ClockLib} from './clockLib.js';

document.getElementById('submit').addEventListener('click', createClock);

function createClock() {
    debugger;
    var speed = parseInt(document.getElementById('speed').value); 
    var timeZone = document.getElementById('timezone').value;

    const newClock = new ClockLib(speed, timeZone);
    const parentElm = document.getElementById('container');
    parentElm.appendChild(newClock.getElement());
}
