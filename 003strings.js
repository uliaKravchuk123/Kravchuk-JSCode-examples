//working with strings: substring, find, chars replacing
let str = 'hello world hello world';
console.log( str.at(0) );
console.log( str.charAt(0) );
console.log( str.charAt(-1) )
console.log( str.at(-1) );
//find substring
console.log(str.search('world')); //6
console.log(str.indexOf('world', 8)); //18
console.log(str.lastIndexOf('world', 22)); //18
console.log(str.indexOf('error')); //-1
console.log(str.includes('world', 2)); //true
console.log(str.includes('world', 19)); //false
console.log(str.startsWith('world')); //false
console.log(str.endsWith('world')); //true

//get substring
console.log(str.slice(6, 17)); //world hello
console.log(str.slice(6)); //world hello world
console.log(str.slice(-5)); //world
console.log(str.substring(17, 6)); //world hello то же самое но начало мб больше конца

//chars replacing
console.log(str.replace('world', 'Peter')); //hello Peter hello world
console.log(str.replace(/world/g, 'Mary')); //hello Mary hello Mary