//comparison in JS (== vs ===)

//== 
console.log('01' == 1); //true - строка приводится к числу
console.log(true == 1); //true - булин приводится к числу
console.log(false == 0); //true 
console.log(false == ''); //true
console.log(null == undefined); //true - равны друг другу 
console.log(null == 0); //false
console.log(undefined == 0); //false
console.log(null == null); //true
console.log(undefined == undefined); //true

//=== - не приводит типы
console.log('0' === 0); //false
console.log(null === undefined); //fakse
console.log(0 === false ); // false
console.log(1 === 1); //true
console.log('str' === 'str'); //true
console.log(undefined === undefined); //true
console.log(null === null); //true
