//loops: for, for of, for in, forEach

//for
let sum = 0;
for (let i = 1; i <100; i++) {
    if (i % 2 == 0) continue;
    if (sum > 8) break; 
    sum += i;
    console.log('Сумма: ' + sum);
}

//for of - to iterate over iterable (can't use for objects)

let str = 'Hi!';
for (let l of str) {
    console.log(l);
}


//for in - to iterate through the keys of an object, can use for str/arr (don't use for iterables). Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.
 
let obj = {
    id: 1 , 
    name : "Mary",
    role: "Admin"
}

for (let key in obj) {
    console.log(`${key} => ${obj[key]}`);
}

for (let j in str) {
    console.log(str[j]);
}


//forEach - calls a function and iterates over the elements of an array (Map, Set)

let names = ['Max', 'Dan', 'Sad'];
names.forEach(item => console.log('Hi ' + item));