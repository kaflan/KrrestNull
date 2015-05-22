window.addEventListener('load',  function(){
    console.log('load complete');
    var cell = document.querySelectorAll('.cell'), // у массіві всі наші класси целл
        nextClass,// хранить класс правильний по кліку фраєра змінюєця поточний клас сім матерів бабі в цицьку
        startNewGame = document.querySelector('.startNewGame'),// нова гра
        winnerMessage = document.querySelector('.winner-message');// повідомлення про перемогу
        startNewGame.addEventListener('click', function(e){// start to new game click
        e.preventDefault();
            for(var i = 0;i < cell.length; i++){
            cell[i].classList.remove('o'); //delete class 'o' and 'x'
            cell[i].classList.remove('x');
                console.log('finish');
            nextClass = '';
            }
    });
    for(var i = 0; i < cell.length; i++){ //шурує масів
        cell[i].addEventListener('click', function(e){ //клікаємо мо якомусь елементу в массиві
                         e.preventDefault();
                        if(nextClass === 'x'){ // курва(праильно чи ні кур = curent
                            console.log(cell[0].classList.contains(nextClass).toString() === 'cell x');
                            if(cell[i].classList.contains(nextClass).toString() === 'cell x' && cell[i].classList.contains(nextClass).toString() ==='cell o'){
                                console.log('no add');
                            } else{
                               nextClass = 'o'; // міняєм класс на "о"
                                console.log('ok');
                                event.target.classList.add(nextClass); //курва клас поміняний на о
                            //    перевіряємо
                                console.log(nextClass);
                            }
                        } else {
                            nextClass = 'x'; // міша зливай воду  міняїм на "х"
                            event.target.classList.add(nextClass);// курва класс помінявся на "х"
                            //перевірка курва классу                  }
                            console.log(nextClass);
                        }

            });

    }
    /*

     var nextClass = 'x';


     ..где-то в слушателе... (предполагаем что el  - это ячейка в которую надо добавить)
     el.classList.add(nextClass);
     if (nextClass === 'x') { nextClass = 'o' } else { nextClass='x' }
     addEventListener('click', function () {
     var el = event.target;

     if (nextClass === 'x') {
     nextClass = 'o'
     } else {
     nextClass='x' }
     el.classList.add(nextClass);
     });
     var nextClass = 'x';
    */
});
