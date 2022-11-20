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

// Selectors for all HTML elements
const clock = select('.clock');
const time = select('.time');
const alarmTime = select('.alarmTime');
const btn = select('.btn');
const alarmSet = select('.alarmSet');
const msg = select('.msg');

// Creates function for current time
function currentTime () {
    const today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    mm = checkZero(mm);
    ss = checkZero(ss);

    clock.innerText =  hh + ':' + mm + ':' + ss;
    let t = setTimeout(function(){ currentTime() }, 1000);
}

// This function will add a zero to any number that is a single digit.
function checkZero(i) {
    if (i < 10) {
        i = '0' + i
    }
    return i;
}

// Calls the current time function continously
currentTime();

function setAlarm() {
    let alarm = alarmSet.value.trim();

    let hoursInput = alarm.toString().substring(0, 2);
    let minsInput = alarm.toString().substring(3, 5);

    let hours = parseInt(hoursInput);
    let mins = parseInt(minsInput);

    let alarmQueue = new Date();

    alarmQueue.setHours(alarmQueue.getHours() + hours);
    alarmQueue.setMinutes(alarmQueue.getMinutes() + mins);

    alarmTime.innerText = alarmQueue.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    return alarmTime;
}

onEvent('click', btn, function() {
    setAlarm();
});

let ring = false;
function alarmRing() {

    let alarmValue = setAlarm();

    function ringAlarm() {
        let currentTime = Number(localTime());
        if (currentTime >= alarmValue) {
            console.log('Alarm has rung.');
            ring = true;
            clearInterval(interval);
        }
    }

    let interval = setInterval(ringAlarm, 1000);
}

const alarmSound = new Audio('./assets/audio/alarm.wav');
alarmSound.type = 'audio/wav';
alarmSound.preload = 'auto';

function sound() {
    if(ring) {
        alarmSound.play();
    }
    let soundInterval = setInterval(sound, 500);
}