const express = require('express');
const route = express.Router();
const userController = require('../controller/users');
const common = require('../common/common')

route.post('/login', userController.login) 
route.put('/update/:id', common.auth, userController.updateUsers) 

module.exports = route