const path = require('path');

exports.getMainPage = (req, res)=>{
    res.sendFile(path.resolve('./views/main.html'));
}

exports.getFrom = (req, res)=>{
    res.sendFile(path.resolve('./views/feedback.html'));
}

exports.postUser = async (req, res)=>{
    if(!req.body) return res.sendStatus(400);

    const collection = req.app.locals.collection;
    try {
        const userName = req.body.name;
        const userEmail = req.body.email;
        const userMessage = req.body.message;
        const user = {name: userName, email: userEmail, message: userMessage};
        await collection.insertOne(user);
    } catch (e) {
        console.log('Error - ', e);
    }
    res.redirect('/form/user');
}

exports.getUser = async (req, res) => {

    const collection = req.app.locals.collection;
    try {
        let users = await collection.find().toArray();
        let lastUser = users.at(-1);
        res.send(`${lastUser.name} - ${lastUser.email} - ${lastUser.message}`);
    }
    catch (e) {
        console.log('Error - ', e);
    }
}