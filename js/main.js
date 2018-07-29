'use strict';

console.log(input);
var input = document.querySelectorAll('.radio');

var button = document.querySelector('.first');
var body = document.querySelector ('body');
var main = document.querySelector('main');


var numberOfCards;
console.log(numberOfCards);
for (var i =0; i<input.length; i++){
  input[i].addEventListener('click', start);
}

function start(event){
  numberOfCards = event.currentTarget.value;
}
