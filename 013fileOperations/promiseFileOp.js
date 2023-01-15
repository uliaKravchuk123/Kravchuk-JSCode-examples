const fsPromises = require('fs').promises; //импортируем fs модуль

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile('./start.txt', 'utf8');
        console.log(data);
        await fsPromises.writeFile('./promiseCreate.txt', data);
        await fsPromises.appendFile('./promiseCreate.txt', '\n\nNice to meet you Promise');
        await fsPromises.rename('./promiseCreate.txt', './promiseRename.txt');
        const newData = await fsPromises.readFile('./promiseRename.txt', 'utf8');
        console.log(newData);
        //await fsPromises.unlink('./promiseRename.txt')
    } catch (err) {
        console.error(err);
    }

}

fileOps();