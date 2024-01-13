//functions and their declaration

//Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
// Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
// Если функция была создана как часть выражения, то это “Function Expression”.
// Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
// Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.

//function declaration Function Declaration может быть вызвана раньше, чем она объявлена.
//Function Declaration видимо только внутри блока кода, в котором располагается.
console.log(showMessage(3));

function showMessage(number) {
    console.log(( 'Function declaration!' ));
    return number * 10;
}


//function expression Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
let sayHi = function() {
    console.log( 'Function expression!' );
};

sayHi();


//arrow function

let arrFunc = (a, b) => {
    console.log(a + " and " + b);
    return a * b;
};
console.log(arrFunc(2, 4));

//контекст функции
//Контекст выполнения содержит и область видимости, и аргументы функции, и переменную this.
// Значение переменной this — это ссылка на объект, который «вызывает» код в данный момент.

// Основные вещи, которые необходимо помнить и понимать о контексте выполнения:
// Однопоточность — JavaScript работает в однопоточном режиме, т.е. только одна операция может быть выполнена в определенный момент времени.
// Синхронное выполнение кода — код выполняется синхронно, т.е. следующая операция не выполняется до завершения предыдущей.
// Один глобальный контекст выполнения.
// Бесконечное количество контекстов выполнения функции.
// Каждый вызов функции создает новый контекст выполнения, даже если функция рекурсивно вызывает сама себя.

let user = { name: "Piotr" };

function sayHello() {
  console.log( this.name );
}

let sayBye = function () {
    console.log( "Bye " + this.name );
}

user.f = sayHello;
user.f(); //Piotr
sayHello();  //udefined 
user.f2 = sayBye;
user.f2(); //Bye Piotr
sayBye(); //Bye undefined

// Привязка контекста к функции:
// 1. Сделать функцию обертку
console.log("Функция оберка:")
function wrapperSayBye() {
  user.f2();
};
wrapperSayBye();

// 2. Привязка через bind
console.log("Привязка через байнд:")
let sayGoodBye = sayBye.bind(user); // привязали контекст к функции
sayGoodBye(); //Bye Piotr

setTimeout(user.f2, 1000); //Bye undefined - контекст не привязан к функции

setTimeout(sayGoodBye, 2000); //Bye Piotr - контекст привязан к функции

// у стрелочной функции нет this
  let user2 = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => console.log("This берется из внешней не стрелочной функции " + this.firstName);
      arrow();
    }
  };
  
  user2.sayHi(); // Ilya

  let user3 = {
    firstName: "Ilya",
    sayHi() {
      function arrow3() { console.log("this свой и не берется из внешней функции " + this.firstName) };
      arrow3();
    }
  };

  user3.sayHi();


