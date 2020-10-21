var flag = false;
var counter = 0;
var titleArr = [];
var title = '';
var color = '';
var hours = 0;
var minutes = 0;
var seconds = 0;
var speed = 0;

function createNew() {
    assignValue();
    var clockExibition = document.querySelector('clockExibition');
    var div = document.createElement('div');
    div.setAttribute('id', title);
    clockExibition.appendChild(div);
}

function assignValue() {
    title = document.getElementById('title').value;
    titleArr[counter] = title;
    counter++;
    color = document.getElementById('border-color').value;
    hours = parseInt(document.getElementById('hours').value); 
    minutes = parseInt(document.getElementById('minutes').value);
    seconds = parseInt(document.getElementById('seconds').value);
    speed = parseInt(document.getElementById('speed').value);
    flag = true;

    document.getElementById('title').value = '';
    document.getElementById('border-color').value = '';
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('speed').value = '';            
}