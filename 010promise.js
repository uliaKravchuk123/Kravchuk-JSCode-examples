//promises

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