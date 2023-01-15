//operations with folders

const fs = require('fs');   //импортируем fs модуль

if(!fs.existsSync('./new')) {
    fs.mkdirSync('./new')
    console.log('Directory created');
}

if(fs.existsSync('./new')) {
    setTimeout(() => fs.rmdirSync('./new'), 2000);
    console.log('Directory removed');
}
