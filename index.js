window.addEventListener('load', function () {
    console.log('load complete');
    var cell = document.querySelectorAll('.cell'), // у массіві всі наші класси целл
        nextClass,// хранить класс правильний по кліку фраєра змінюєця поточний клас сім матерів бабі в цицьку
        startNewGame = document.querySelector('.startNewGame');// нова гра
    startNewGame.addEventListener('click', function (e) {// start to new game click
        e.preventDefault();
        for (var i = 0; i < cell.length; i++) {
            cell[i].classList.remove('o'); //delete class 'o' and 'x'
            cell[i].classList.remove('x');
            console.log('finish');
            nextClass = '';
        }
    });
    for (var i = 0; i < cell.length; i++) { //шурує масів
        cell[i].addEventListener('click', function (event) { //клікаємо мо якомусь елементу в массиві
            event.preventDefault();
                if (nextClass === 'x' && event.target.classList.contains(nextClass) === false ) {
                    nextClass = 'o';
                    console.log('ok');
                    event.target.classList.add(nextClass);
                    console.log(event.target.classList.contains(nextClass));
                } else {
                    // міняєм класс на "о"
                    nextClass = 'x'; // міша зливай воду  міняїм на "х"
                    event.target.classList.add(nextClass);// курва класс помінявся на "х"
                    //перевірка курва классу                  }
                    console.log(nextClass);
                }
        });
    }
});
