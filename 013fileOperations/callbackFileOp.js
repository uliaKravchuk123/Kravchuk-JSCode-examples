//file operations (create/find/delete file, save information into the file)

const fs = require('fs');   //импортируем fs модуль


//читаем start.txt
fs.readFile('./start.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//coздаем create.txt
fs.writeFile('./callbackCreate.txt', 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log("Write complite");

    // создание/изменение файла
    fs.appendFile('./callbackCreate.txt', '\n\nAppended message', (err) => {
        if (err) throw err;
        console.log("Append complite");

        //переименование файла 
        fs.rename('./callbackCreate.txt', './callbackRename.txt', (err) => {
            if (err) throw err;
            console.log("Rename complite"); 
        })
    })
})

//ловим ошибки
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
}) 