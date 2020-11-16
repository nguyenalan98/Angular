const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var mongoose = require('mongoose'), Schema = mongoose.Schema;
mongoose.set('useUnifiedTopology', true);
var db = mongoose.connect('mongodb://127.0.0.1:27017/db', { useNewUrlParser: true });
var model = new Schema({ name: { type: String }, address: { type: String }, email: { type: String }, item: { type: String }, date: { type: Date } });
var user = mongoose.model('users', model);
var bodyParser = require('body-parser').json();

app.post('/postUser', bodyParser, (req, res) => {
    if (req.body == {}) {
        res.status(400).send(err);
    } else {
        user.create(req.body, function (err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        })
    }
})

app.get('/getUser', (req, res) => {
    user.find(function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(data);
        }
    })
})

app.put('/updateUser', bodyParser, (req, res) => {
    if (req.body == {}) {
        res.status(400).send(err);
    } else {
        let filter = { name: req.body.name };
        user.findOneAndUpdate(filter, req.body, { new: true, upsert: true }, (err, result) => {
            if (err) return res.send(err);
            res.send(result);
        })
    }
})

app.delete('/deleteUser', bodyParser, (req, res) => {
    if (req.body == {}) {
        res.status(400).send(err);
    } else {
        let filter = { name: req.body.name };
        user.findOneAndDelete(filter, (err, result) => {
            if (err) return res.send(500, err);
            res.send({ message: 'success' });
        })
    }
})

app.get('/', function (req, res) {
    res.send('API working');
})


app.listen(port, () => {
    console.log('API is running on port ' + port);
})


