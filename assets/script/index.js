'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

const clock = select('clock');
const time = select('.time');
const alarmTime = select('.alarm-time');
const btn = select('.btn');
const alarmSet = select('.alarmSet');

const today = new Date();
let hh = today.getHours();
let mm = today.getMinutes();
let ss = today.getSeconds();


console.log(clock);
// clock.innerText =  hh + ":" + mm + ":" + ss;


// onEvent('click', btn, function() {
    
// });
