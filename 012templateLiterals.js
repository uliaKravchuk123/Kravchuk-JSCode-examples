//string format substitution

console.log(`Hello "user"`); //Hello "user"
console.log(`\`` === "`"); //true
console.log(`\${1}` === "${1}"); //true
console.log(`1 + 1 = ${1 + 1}`); //1 + 1 = 2
let user = 'Max';
console.log(`Hi ${user}! How are you?`) //Hi Max! How are you?
console.log(`string text line 1
string text line 2`); // text is in 2 strings

//tagged templates
function multiplier(strings, param1, param2) {
    const str0 = strings[0]; // "Expression: "
    const str1 = strings[1]; // " multiply by "
    const str2 = strings[2]; // " equals"
    const result = param1 * param2;

  return `${str0}${param1}${str1}${param2}${str2}${result}!`;
}

const a = 5;
const b = 10;
const output = multiplier`Expression: ${a} multiply by ${b} equals `;

console.log(output); // "Expression: 5 multiply by 10 equals 50!"



