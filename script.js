'use strict';

const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
const display = document.querySelector('.display');


btn.addEventListener('click', function(e) {
    e.preventDefault();

    const textTyped = message.value;

    if(!textTyped) return
    const html = `
    <p class="spacing"> <span class="display">${textTyped} </span></p>
    `
    document.querySelector('.container-1').insertAdjacentHTML('beforebegin', html);
    message.value =''
})