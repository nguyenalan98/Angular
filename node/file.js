const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var names = [];
fileMaker();

function fileMaker() {
    fs.stat('names.txt',function(err,stats){
        if(stats != undefined){
            fs.readFile('names.txt',function(err,data){
                names = (data.toString().split("\n"));
            })
        }
    })
    let fileName = '';
    let check = false;
    readline.question('Please enter a file name: ', name => {
        fileName = name;
        if (names.length == 0 && fileName != '') {
            fs.writeFile(String(fileName), 'You are awesome!', function (err) {
                if (err) {
                    return console.error(err);
                } else {
                    names.push(fileName);
                    fs.appendFile('names.txt',String(names[names.length-1]),function(err){
                        return '';
                    })
                    console.log('New file named ' + fileName + ' created');
                }
            });
        }
        else if(fileName != ''){
            names.forEach(element => {
                if (fileName == element) {
                    check = true;
                    console.log('NO DUPLICATE FILE NAMES ALLOWED, PLEASE ENTER A NEW FILE NAME');
                }
            })
            if (check == false) {
                names.push(fileName);
                fs.writeFile(String(fileName), 'You are awesome!', function (err) {
                    if (err) {
                        return console.error(err);
                    } else {
                        names.push(fileName);
                        fs.appendFile('names.txt','\n' + String(names[names.length-1]),function(err){
                            return '';
                        })
                        console.log('New file named ' + fileName + ' created');
                    }
                });
            }
        }
        readline.close();
    });


}