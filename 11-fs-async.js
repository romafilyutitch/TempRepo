const fs = require('fs');

fs.readFile('./content/first.txt', 'utf-8',(err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        fs.writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("The result has been written");
        });
    })
})