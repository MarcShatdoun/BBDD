
import confetti from 'canvas-confetti';

let animated = document.querySelector('.animatedd');
let button2 = document.querySelector('button');
let musica2 = document.querySelector('#audio');
let mangoface = document.querySelector('.mangoface');
let msg = document.querySelector('.msg');

button2.addEventListener('click', (e) => {
    e.preventDefault
    musica2.play();
    animated.classList.remove('hidden');
    animated.classList.add('block');
    button2.classList.add('hidden');
    confetti();
    console.log("click"); 

    setTimeout(() => {
        mangoface.classList.remove('hidden');
        mangoface.classList.add('block');
    }, 3500);

setTimeout(() => {
    msg.classList.remove('hidden');
    msg.classList.add('block');
}, 8000);
    
})