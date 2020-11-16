let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing API', () => {
    it('should be return status 200 for /', function (done) {
        chai.request('http://localhost:3000').get('/').then(function (res) {
            expect(res).to.have.status(200);
            done();
        })
            .catch(function (err) {
                throw (err);
            })
    })
})

describe('Testing get API', () => {
    it('should be return status 200 for /getUser', function (done) {
        chai.request('http://localhost:3000').get('/getUser').then(function (res) {
            expect(res).to.have.status(200);
            done();
        })
            .catch(function (err) {
                throw (err);
            })
    })
})

describe('Testing create user', () => {
    it('should be return status 200 for /postUser', function (done) {
        chai.request('http://localhost:3000').post('/postUser').send({
            "name": "Juan Hernandez",
            "address": "Maple Lane",
            "email": "juanhernandez@gmail.com",
            "item": "keyboard and headphones"
        }).then(function (res) {
            expect(res).to.have.status(200);
            done();
        })
            .catch(function (err) {
                throw (err);
            })
    })
})

describe('Testing create user 2', () => {
    it('should be return status 200 for /postUser', function (done) {
        chai.request('http://localhost:3000').post('/postUser').send({
            "name": "admin",
            "address": "admin road",
            "email": "admin@admin.com",
            "item": "admins rights"
        }).then(function (res) {
            expect(res).to.have.status(200);
            done();
        })
            .catch(function (err) {
                throw (err);
            })
    })
})

describe('Testing update user', () => {
    it('should be return status 200 for /updateUser', function (done) {
        chai.request('http://localhost:3000').put('/updateUser').send({
            "name": "sss",
            "address": "123 road",
            "email": "sss@live.com",
            "item": "hairclip"
        }).then(function (res) {
            expect(res).to.have.status(200);
            done();
        })
            .catch(function (err) {
                throw (err);
            })
    })
})

describe('Testing delete user', () => {
    it('should be return status 200 for /deleteUser', function (done) {
        chai.request('http://localhost:3000').delete('/deleteUser').send({ "name": "" }).then(function (res) {
            expect(res).to.have.status(200);
            done();
        })
            .catch(function (err) {
                throw (err);
            })
    })
})

//Negative cases

describe('Testing API', () => {
    it('should be return status 404 for //', function (done) {
        chai.request('http://localhost:3000').get('//').then(function (res) {
            expect(res).to.have.status(404);
            done();
        })
            .catch(function (err) {
                throw (err);
            })
    })
})

describe('Testing get API', () => {
    it('should be return status 404 for /getUsers', function (done) {
        chai.request('http://localhost:3000').get('/getUsers').then(function (res) {
            expect(res).to.have.status(404);
            done();
        })
            .catch(function (err) {
                throw (err);
            })
    })
})


describe('Testing failed create user', () => {
    it('should be return status 400 for /postUser', function (done) {
        chai.request('http://localhost:3000').post('/postUser').send({}).end((err,res) => {
            res.should.have.status(400);
        })
        done();
    })
})

describe('Testing failed update user', () => {
    it('should be return status 400 for /updateUser', function (done) {
        chai.request('http://localhost:3000').put('/updateUser').send({}).end((err,res)=>{
            res.should.have.status(400);
        })
        done();
    })
})

describe('Testing failed delete user', () => {
    it('should be return status 400 for /deleteUser', function (done) {
        chai.request('http://localhost:3000').delete('/deleteUser').end((err,res)=>{
            res.should.have.status(400);
        })
        done();
    })
})