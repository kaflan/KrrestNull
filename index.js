window.addEventListener('load', function () {
    console.log('load complete');
    var cell = document.querySelectorAll('.cell'), // у массіві всі наші класси целл
        nextClass,// хранить класс правильний по кліку фраєра змінюєця поточний клас сім матерів бабі в цицьку
        winnerEl = document.querySelector('.winner-message'),
        startNewGame = document.querySelector('.startNewGame');// нова гра
    startNewGame.addEventListener('click', function (e) {// start to new game click
        e.preventDefault();
        for (var i = 0; i < cell.length; i++) {
            cell[i].classList.remove('o'); //delete class 'o' and 'x'
            cell[i].classList.remove('x');
            console.log('finish');
            nextClass = '';
            winnerEl.innerHTML = '';
        }
    });
    for (var i = 0; i < cell.length; i++) { //шурує масів
        cell[i].addEventListener('click', function (event) { //клікаємо мо якомусь елементу в массиві
            event.preventDefault();
            if (event.target.classList.contains('x') || event.target.classList.contains('o')) {
                return;
            }
                if (nextClass === 'x' ) {
                    nextClass = 'o';
                    console.log('ok');
                    console.log(event.target.classList.contains(nextClass));
                } else {
                    // міняєм класс на "о"
                    console.log(nextClass);
                    nextClass = 'x'; // міша зливай воду  міняїм на "х"
                    //перевірка курва классу                  }
                }
                    event.target.classList.add(nextClass);// курва класс помінявся на "х"
            var winner = getWinner();
            if (winner === 'x') {
                winnerEl.innerHTML = 'Крестик победил';
            } else if (winner === 'o') {
                winnerEl.innerHTML = "Нолик победил";
            } else {  winnerEl.innerHTML= 'Ничья';
            }
        });
    }
});
