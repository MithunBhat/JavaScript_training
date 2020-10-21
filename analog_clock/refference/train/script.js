import Clock from 'clock';

function createClock() {
  // get the options from the form and pass it to the clock class
  const newClock = new Clock(speed, TimeZone);
  const parentElm = document.getElementById('container');
  parentElm.appendChild(
    newClock.getElement()
    // this should give the html element for the clock
    // this can be a function or can be a property
  );
}
