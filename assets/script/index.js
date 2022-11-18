/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Object Oriented JavaScript
    Mako Starykovs'ky

    The audio object

    The Audio() constructor creates and returns a new HTMLAudioElement which can
    be either attached to a document for the user to interact with and/or listen
    to, or can be used offscreen to manage and play audio

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

const start = new Audio('./assets/audio/underground.mp3');
start.type = 'audio/mp3';

const jump = new Audio('./assets/audio/jump.mp3');
start.type = 'audio/wav';

const btnOne = document.querySelector('.start');
const btnTwo = document.querySelector('.jump');
const mario = document.querySelector('.mario');

btnOne.addEventListener('click', function() {
    start.play();
    mario.style.visibility = 'visible';
});

btnTwo.addEventListener('click', function() {
    mario.classList.add('anim');
    setTimeout(() => { mario.classList.remove('anim')}, 800);
    jump.play();
});