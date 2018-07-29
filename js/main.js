'use strict';

console.log(input);
var input = document.querySelectorAll('.radio');

var button = document.querySelector('.first');
var body = document.querySelector ('body');
var main = document.querySelector('main');


function getCard() {

  var url='https://raw.githubusercontent.com/Adalab/cards-data/master/';
  var urlBack ='https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';

  fetch (url+numberOfCards+'.json')
    .then(function(response){
      return response.json();

    })
    .then (function(json){
      console.log(json);
      main.innerHTML='';

      var list = document.createElement('ul');
      list.classList.add('grid');
      main.appendChild(list);
      for ( var j = 0; j<json.length; j++){
        var card = document.createElement('li');
        card.classList.add('cardFront');
        list.appendChild(card);

        var image = document.createElement('img');
        card.appendChild(image);
        image.src= urlBack;
      }

    });
}


var numberOfCards;
console.log(numberOfCards);
for (var i =0; i<input.length; i++){
  input[i].addEventListener('click', start);
}

function start(event){
  numberOfCards = event.currentTarget.value;
}


button.addEventListener('click', getCard);
