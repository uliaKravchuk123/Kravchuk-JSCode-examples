//arrays, sorting, removing and adding elements, other array methods
let arr = [];
let arr2 = new Array(1, 3, 4);
let arr3 = new Array(5); // создался пустой массив с длинной 5
console.log(typeof(arr)); //object
console.log(Array.isArray(arr)); //true


//sorting
let arrStr1 = ['hi',15, 111, 14, 'hello'];
arrStr1.sort(); //like strings
console.log(arrStr1); //[ 111, 14, 15, 'hello', 'hi' ]

let arrStr2 = ['hi',  'aba', 'bab', '14', 'hello'];
arrStr2.sort( (a, b) => a > b ? 1 : -1 ); //like strings
console.log(arrStr2);//[ '14', 'aba', 'bab', 'hello', 'hi' ]

let arrNum = [23, 16, 9, 66];
arrNum.sort( (a, b) => a - b ); //like numbers
console.log(arrNum); //[ 9, 16, 23, 66 ]


//removing and adding elements
let arrRem1 = [1, 2, 3, 4, 5, 6];
arrRem1.shift(); //удалить в начале
console.log(arrRem1); //[ 2, 3, 4, 5, 6 ]

arrRem1.pop(); // удалить в конце
console.log(arrRem1); //[ 2, 3, 4, 5 ]

let arrRem2 = arrRem1.slice(1, -1);// удалили 1й и последний элементы 
console.log(arrRem2); //[ 3, 4 ]

arrRem1.splice(1 , 1, 'удалили 1й элемент', 'и добавили эти строки');
console.log(arrRem1); //[ 2, 'удалили 1й элемент', 'и добавили эти строки', 4, 5 ]

let arrAdd1 = [1, 2, 3, 4];
arrAdd1.unshift(0); //добавить в начало
console.log(arrAdd1); //[ 0, 1, 2, 3, 4 ]

arrAdd1.push(5); //добавить в конец
console.log(arrAdd1); //[ 0, 1, 2, 3, 4, 5 ]

let arrAdd2 = arrAdd1.concat([6, 7]);// скопировать массив и добавить 6, 7
console.log(arrAdd2); //[0, 1, 2, 3, 4, 5, 6, 7]


//other array methods
let arrMeth = [0, 6, 1, 13];

console.log(arrMeth.at(-1)); //возвращает -1й элемент -> 13

//перебор
for (let i = 0; i < arrMeth.length; i++) {
    console.log(arrMeth[i]);
};

for (let ar of arrMeth) {
    console.log(ar);
};

arrMeth.forEach((item, index, arr) => {
    console.log(`${item} is on position ${index} in ${arr}`);
});

//поиск
console.log(arrMeth.indexOf(13, 1)); //3
console.log(arrMeth.lastIndexOf(13, -1)); //3
console.log(arrMeth.includes(6, 1)); //true
console.log(arrMeth.find(item => item > 10)); //13
console.log(arrMeth.findIndex(item => item > 10)); //3
console.log(arrMeth.filter(item => item > 5)); //[ 6, 13 ]

//преобразование
console.log(arrMeth.map(item => item * 2)); //[ 0, 12, 2, 26 ]
console.log(arrMeth.reverse()); //[ 13, 1, 6, 0 ]
console.log(arrMeth.join('+')); //13+1+6+0
console.log(arrMeth.reduce((sum, item) => sum + item, 0)); //20
