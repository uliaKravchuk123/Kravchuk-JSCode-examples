//promises
//Promise – это специальный объект в JavaScript, который связывает «создающий» и «потребляющий» коды вместе. 
//«Создающий» код может выполняться сколько потребуется, чтобы получить результат, а промис делает результат доступным для кода, 
//который подписан на него, когда результат готов.

//let promise = new Promise(function(resolve, reject) {
    //// функция-исполнитель (executor)
    //// "певец"
//  });

//Функция, переданная в конструкцию new Promise, называется исполнитель (executor). Когда Promise создаётся, она запускается автоматически. 
//Она должна содержать «создающий» код, который когда-нибудь создаст результат. 
//Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript. Наш код – только внутри исполнителя.

//Когда он получает результат, он должен вызвать один из этих колбэков:
//resolve(value) — если работа завершилась успешно, с результатом value.
//reject(error) — если произошла ошибка, error – объект ошибки.
//Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.

//У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:

//state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
//result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).

//создаем промис
const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(() => {
             resolve("Promise is resolved!"); // fulfilled
        }, 2000);
    } else {    
        reject('Promise is rejected!');  
    }
});

const helloPromise  = function() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hi, How are you!`);// fulfilled
       }, 2000);
    });
  }

const demoPromise = function() {

    myFirstPromise
    .then((result) => {
        console.log("Success:" + result);
        return helloPromise();
    })
    .then((successMsg) => {
        console.log("Success:" + successMsg);
        return 1;
    })
    .then((value) => {
        console.log(value * 10);
    })
    .finally(() => {
        console.log("Бросаем ошибку для catch в finally");
        throw new Error ("Ошибка!!!");
    })
    .catch((errorMsg) => { 
        console.log("ATTENTION!!! " + errorMsg);
    })
}
  
demoPromise();

console.log("Процесс пошел");