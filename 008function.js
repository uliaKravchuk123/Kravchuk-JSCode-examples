//functions and their declaration

//function declaration
function showMessage(number) {
    console.log(( 'Function declaration!' ));
    return number * 10;
}

console.log(showMessage(3));


//function expression
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
