//async/await

//Kлючевое слово async перед функцией гарантирует, что эта функция в любом случае вернёт промис
//Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.

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

async function demoPromise() {

    //try {
        let message = await myFirstPromise;
        console.log(message);

        message = await helloPromise();
        console.log(message);

        return 1;

    // } catch (error) {
    //     console.log(error);
    // }
}

demoPromise()
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

console.log("Процесс пошел");






//     myFirstPromise
//     .then((result) => {
//         console.log("Success:" + result);
//         return helloPromise();
//     })
//     .then((successMsg) => {
//         console.log("Success:" + successMsg);
//         return 1;
//     })
//     .then((value) => {
//         console.log(value * 10);
//     })
//     .finally(() => {
//         console.log("Бросаем ошибку для catch в finally");
//         throw new Error ("Ошибка!!!");
//     })
//     .catch((errorMsg) => { 
//         console.log("ATTENTION!!! " + errorMsg);
//     })
// }
  
// demoPromise();