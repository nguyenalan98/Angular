const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var mongoose = require('mongoose'), Schema = mongoose.Schema;
mongoose.set('useUnifiedTopology',true);
var db = mongoose.connect('mongodb://127.0.0.1:27017/db',{useNewUrlParser:true});
var model = new Schema({ title: { type: String }, description: { type: String }, assignee: { type: String },date:{type:Date}});
var user = mongoose.model('bugs',model);
var bodyParser = require('body-parser').json();

app.post('/addBugs', bodyParser, (req, res) => {
    user.create(req.body,function(err,data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.get('/getBugs', (req, res) => {
    user.find(function(err,data){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(data);
        }
    })
})

/*
app.put('/updateUser',(req,res)=>{
    db.collection('user').findOneAndUpdate({'name':req.body.name},{$set:{name:req.body.name,city:req.body.city,job:req.body.job}},{upsert:true},(err,result)=>
    {
        if(err) return res.send(err);
        res.send(result);
    })
})

app.delete('/deleteUser',(req,res)=>{
    db.collection('user').findOneAndDelete({"name":req.body.name},(err,result)=>{
        if(err) return res.send(500,err);
        res.send({message:'success'});
    })
})*/

app.get('/',function (req, res) {
    res.send('API working');
})


app.listen(port, () => {
    console.log('API is running on port ' + port);
})


