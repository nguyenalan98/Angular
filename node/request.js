const request = require('request');
const url = "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees";
const express = require('express');
const app = express();
const port = 3000;

request(url,{json:true},(err,res,body) =>{
    app.set('json spaces', 2);
    app.get("/employeesList", (req, res) => {
        res.json(body);
    })
    app.listen(port, (err) => {
        console.log('server running on port ' + port);
    })
})