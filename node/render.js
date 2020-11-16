const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.set('json spaces', 2);
app.get('/db',(req,res) => {
    fs.readFile('./db.json',(err,result) =>{
        if(err){
            throw err;
        }else{
            res.send(JSON.parse(result));
        }
    })
})

app.listen(port,(err) =>{
    console.log('server running on port ' + port);
})