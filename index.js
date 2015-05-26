/* global getWinner */
window.addEventListener('load', function load() {
  'use strict';
  var cellAll = document.querySelectorAll('.cell'); // у массіві всі наші класси целл
  var cell = document.querySelector('.field');
  var nextClass;// хранить класс правильний по кліку фраєра змінюєця поточний клас сім матерів бабі в цицьку
  var winnerEl = document.querySelector('.winner-message');
  var i;
  var winner;
  var startNewGame = document.querySelector('.startNewGame');

  function clickEvent(event) {
    event.preventDefault();
    if ((event.target.classList.contains('x') || event.target.classList.contains('o')) || !event.target.classList.contains('cell') && event.target.classList.contains('field')) {
      return;
    }
    if (nextClass === 'x') {
      nextClass = 'o';
    } else {
      // міняєм класс на "о"
      nextClass = 'x'; // міша зливай воду  міняїм на "х"
    }
    event.target.classList.add(nextClass);
    winner = getWinner();
    if (winner === 'x') {
      winnerEl.innerHTML = 'Крестик победил';
      cell.removeEventListener('click', clickEvent);
    } else if (winner === 'o') {
      winnerEl.innerHTML = 'Нолик победил';
      cell.removeEventListener('click', clickEvent);
    }
  }
  function clickNewGame(e) {// start to new game click
    e.preventDefault();
    for (i = 0; i < cellAll.length; i++) {
      cellAll[i].classList.remove('o');
      cellAll[i].classList.remove('x');
      nextClass = '';
      winnerEl.innerHTML = '';
      cell.addEventListener('click', clickEvent);
    }
  }
  startNewGame.addEventListener('click', clickNewGame);
});
