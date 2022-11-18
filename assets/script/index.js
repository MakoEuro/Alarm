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

const alarm = new Audio('./assets/audio/alarm.[ADD FORMAT]');
start.type = 'audio/wav';

const clock = select('.clock');
const btn = select('.btn');
const alarmSet = select('.alarm-set');

onEvent('click', btn, function() {
    
});
