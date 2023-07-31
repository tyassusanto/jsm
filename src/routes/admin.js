const express = require('express');
const route = express.Router();
const adminController = require('../controller/admin');
const common = require('../common/common')

route.get('/get', common.auth, adminController.getUsers)
route.post('/addemployee', adminController.addEmployee) 
route.delete('/delete/:id', common.auth, common.isAdmin, adminController.deleteUsers)

module.exports = route