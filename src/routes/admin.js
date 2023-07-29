const express = require('express');
const route = express.Router();
const adminController = require('../controller/admin');
const common = require('../common/common')

route.post('/addemployee', adminController.addEmployee) 
// route.post('/login', userController.login) 
// route.get('/profile', common.auth, userController.profile) 

module.exports = route