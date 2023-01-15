//заранить с параметрами - npm run start --length=2 --width=10

const length = process.env.npm_config_length;
const width = process.env.npm_config_width;
const area = length * width;
console.log("The area is => ", area);