'use strict';

const average = document.querySelector('.average-score');
const great = document.querySelector('.great');
const scores = document.querySelectorAll('.random');
const play = document.querySelector('.btn');
const info = document.querySelector('.info');
const url = 'data.json';

play.addEventListener('click', reqData)
function reqData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (const i in data) {
        scores[i].textContent = data[i].score;
      }
    });
}


