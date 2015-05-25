/* global getWinner */
window.addEventListener('load', function load() {
  'use strict';
  var cell = document.querySelectorAll('.cell'); // у массіві всі наші класси целл
  var nextClass;// хранить класс правильний по кліку фраєра змінюєця поточний клас сім матерів бабі в цицьку
  var winnerEl = document.querySelector('.winner-message');
  var i;
  var startNewGame = document.querySelector('.startNewGame');// нова гра
  startNewGame.addEventListener('click', function clickNewGame(e) {// start to new game click
    e.preventDefault();
    for (i = 0; i < cell.length; i++) {
      cell[i].classList.remove('o');
      cell[i].classList.remove('x');
      nextClass = '';
      winnerEl.innerHTML = '';
    }
  });
  for (i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function clickEvent(event) {
      event.preventDefault();
      if (event.target.classList.contains('x') || event.target.classList.contains('o')) {
        return;
      }
      if (nextClass === 'x') {
        nextClass = 'o';
      } else {
        // міняєм класс на "о"
        nextClass = 'x'; // міша зливай воду  міняїм на "х"
      }
      event.target.classList.add(nextClass);// курва класс помінявся на "х"
      var winner = getWinner();
      if (winner === 'x') {
        winnerEl.innerHTML = 'Крестик победил';
      } else if (winner === 'o') {
        winnerEl.innerHTML = 'Нолик победил';
      }
    });
  }
});
