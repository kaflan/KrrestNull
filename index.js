window.addEventListener('load',  function(){
    console.log('load complete');
    var cell = document.querySelectorAll('.cell'), // у массіві всі наші класси целл
        curClass,// хранить класс правильний по кліку змінюєця
        startNewGame = document.querySelector('.startNewGame'),// нова гра
        winnerMessage = document.querySelector('.winner-message');// повідомлення про перемогу
        startNewGame.addEventListener('click', function(e){// start to new game click
        e.preventDefault();
            for(var i = 0;i < cell.length; i++){
            cell[i].classList.remove('o'); //delete class 'o' and 'x'
            cell[i].classList.remove('x');
                console.log('finish');
            }
    });
    for(var i = 0; i < cell.length; i++){ //шурує масів
        cell[i].addEventListener('click', function(){ //клікаємо мо якомусь елементу в массиві

                     //e.preventDefault();
                    if(curClass === 'x' ){ // курва(праильно чи ні кур = curent
                       curClass = 'o'; // міняєм класс на "о"
                        console.log('ok');
                        event.target.classList.add(curClass); //курва клас поміняний на о
                    //    перевіряємо
                        console.log(curClass);
                    } else {
                        curClass = 'x'; // міша зливай воду  міняїм на "х"
                        event.target.classList.add(curClass);// курва класс помінявся на "х"
                        //перевірка курва классу                  }
                        console.log(curClass);
                    }

            });

    }
    /*

     var curClass = 'x';


     ..где-то в слушателе... (предполагаем что el  - это ячейка в которую надо добавить)
     el.classList.add(curClass);
     if (curClass === 'x') { curClass = 'o' } else { curClass='x' }
     addEventListener('click', function () {
     var el = event.target;

     if (curClass === 'x') {
     curClass = 'o'
     } else {
     curClass='x' }
     el.classList.add(curClass);
     });
     var curClass = 'x';
    */
});
