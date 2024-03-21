const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {MongoClient} = require('mongodb');
const userRouter = require('./node/routes/userRoute')
const URL = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(URL);
const app = new express();
const PORT = 3000;


(async () => {
    try {
        await client.connect();
        console.log('Соединение установлено');
        const db = client.db('usersDb');
        const list = db.listCollections();
        app.locals.collection =  await db.collection('users');
        app.listen(PORT);
    } catch (e) {
        console.log('Error - ', e);
    }
})();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', userRouter);