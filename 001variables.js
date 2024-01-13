//declaring variables; difference between var, let, const
//https://learn.javascript.ru/javascript-specials


// let - для объявления переменных
let user = 'John', age = 25, message = 'Hello';


// const - для объявления констант
const adminName = 'Piotr';
const COLOR_RED = "#F00"; //жестко закодированные значения


//var - устаревший способ объявления переменных имеющий особенности в поведении
//1.Не существует блочной видимости
if (true) {
    var test = 'test';
}
console.log(test); //сработает - в консоли 'test'

if(true) {
    let test2 = 'test2';
}
//console.log(test2); //не сработает - в консоли будет ошибка

for(var i = 0; i < 10; i++) {
    //
}
console.log(i); //сработает - в консоли 10

//2.Допускает повторное объявление
var user2;
var user2 = 'Piotr'; // нет ошибки, значение присвоено

//3.Обрабатывается в начале запуска функции (присваевается позже)
function hello() {
    console.log(message);
    var message = "Hello";
}
hello(); //в консоли нет ошибки но значение еще undefined

