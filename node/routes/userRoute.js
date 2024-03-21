const express = require('express');
const userController = require('../contorllers/userController');

const userRouter = express.Router();

userRouter.get('/', userController.getMainPage);
userRouter.get('/form', userController.getFrom)
userRouter.post('/form', userController.postUser);
userRouter.get('/form/user', userController.getUser);

module.exports = userRouter;