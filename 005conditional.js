//conditional operators
let today = new Date();
let massege;

//if

if (today.getDate() === 1) {
    message = "Сегодня первый день месяца!";
} else if (today.getDate() % 2 === 0) {
    message = "Сегодня четный день!";
} else {
    message = "Сегодня НЕ четный день!";
};

console.log(message);


//?
let message2 = 
    today.getDate() === 1 ? "Сегодня первый день месяца!" : 
    today.getDate() % 2 === 0 ? "Сегодня четный день!" :
    "Сегодня НЕ четный день!";

console.log(message2);