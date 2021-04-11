'use strict';

let isNumber = function (n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function quessAnswer(){
    let question = prompt('Угадай число от 1 до 100');
    let answer = 30;
    if(question === null){
        alert('Игра закончена');
    }
    else if (question == answer){
        alert('Поздравляю, Вы угадали!!!')
    }
    else if(!isNumber(question)){
        alert('Введи число!');
        quessAnswer();
    }
     else if(question > answer){
        alert('Загаданное число меньше');
        quessAnswer();
    }
     else if(question < answer){
        alert('Загаданное число больше');
        quessAnswer();
     }
    }

quessAnswer();

