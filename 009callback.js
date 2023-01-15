//callback functions

// пример 1
// есть асинхронный код. 
// нужно подождать 2 сек, поздороваться и попрощаться. 
// То есть дождаться пока выполнится одна ф-я и выполнить вторую.
// без колбэка во время ожидания первой функции выполнится сначала вторая и только потом первая

console.log('Пример без колбэка');
function hello(name) {
    console.log('Hello ' + name);
}

function bye(name) {
    console.log('Bye ' + name);
}

setTimeout(hello, 1000, 'Alex'); //выполнится вторым
bye('Alex'); //выполнится первым


// используем колбэк и все ок
setTimeout(() => console.log('\nПример с колбэком'), 2000);

function helloBye(name, myFunction) {
    console.log('Hello ' + name);
    // callback function executed only after the helloBye() is executed
    myFunction(name);
}

// callback function
function sayBye(name) {
    console.log('Bye ' + name);
}

// calling the function after 2 seconds
setTimeout(helloBye, 4000, 'Alex', sayBye);


