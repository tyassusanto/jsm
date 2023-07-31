const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');
const createError = require('http-errors');
const commonHelper = require('../common/common')

const modelsAdmin = require('../models/admin')
const modelsUsers = require('../models/users')

const addEmployee = async (req, res, next) => {
    try {
        const { employee_name, username, email, password, phone_number, department_id, level_id } = req.body;
        const phoneRegex = /^62\d+$/;
        if (!phone_number.match(phoneRegex)) {
            return next(createError(400, 'Nomor telepon harus berawalan 62 dan hanya boleh berisikan angka'));
        }
        const userUsername = await modelsUsers.findUsername(username);
        const userEmail = await modelsUsers.findEmail(email);
        const departmentId = await modelsAdmin.findDepartmentId(department_id)
        const levelId = await modelsAdmin.findLevelId(level_id)
        if (userUsername.length > 0) {
            return next(createError(403, 'Username sudah terdaftar'))
        };
        if (userEmail.length > 0) {
            return next(createError(403, 'Email sudah terdaftar'))
        };
        if (departmentId.length < 1) {
            return next(createError(403, 'Departemen ID Tidak Tersedi'))
        }
        if (levelId.length < 1) {
            return next(createError(403, 'Level ID Tidak Tersedi'))
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const insertDataUser = {
            id: uuid(),
            employee_name,
            username,
            email,
            password: hashPassword,
            phone_number,
            department_id,
            level_id,
        };
        const resultRegister = await modelsAdmin.addEmployee(insertDataUser);
        const result = {
            employee_name,
            username,
            email,
            phone_number,
            department_id,
            level_id
        }
        res.status(200)
        commonHelper.response(res, result, 200, 'berhasil register');
    } catch (error) {
        console.log(error);
        res.status(500),
            next({
                status: 500,
                message: 'Internal Server Error'
            });
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await modelsAdmin.deleteUser(id)
        res.status(200)
        commonHelper.response(res, result, 200, `berhasil hapus ${id}`);
    } catch (error) {
        console.log(error);
        res.status(500),
            next({
                status: 500,
                message: 'Internal Server Error'
            });
    }
}

const getUsers = async (req, res, next) => {
    try {
        const searchOption = req.query.searchOption
        // const sort = req.query.sort || 'employee_name';
        // const order = req.query.order || 'DESC';
        // const page = parseInt(req.query.page) || 1;
        // const limit = parseInt(req.query.limit) || 5;
        // const offset = (page - 1) * limit;

        const result = await modelsAdmin.getUsers({
            searchOption,
            // sort,
            // limit,
            // offset,
            // order
        })
        const totalCount = await modelsAdmin.countEmployee()
        const [{ total }] = totalCount
        res.status(200)
        commonHelper.response(res, result, 200, null, {
            // currentPage: page,
            // limitData: limit,
            totalData: total,
            // totalPage: Math.ceil(total / limit)
        })
    } catch (error) {
        console.log(error, 'error get')
        res.status(500),
            next({
                status: 500,
                message: 'Internal Server Error'
            })
    }
}

module.exports = {
    addEmployee,
    deleteUsers,
    getUsers
}