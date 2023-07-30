const bcrypt = require('bcrypt');
const createError = require('http-errors');
const commonHelper = require('../common/common')
const jwt = require('jsonwebtoken')

const modelsUsers = require('../models/users')

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const [user] = await modelsUsers.findUsername(username)
        if (!user) return next(createError(403, 'Username salah atau belum terdaftar'))
        const hashedPassword = await bcrypt.compare(password, user.password)
        if (!hashedPassword) return next(createError(403, 'Password salah'))
        const secretKey = 'KMZWAY87AA'
        const payload = {
            name: user.employee_name,
            username: user.username,
            email: user.email,
            phone: user.phone_number,
            departmentId: user.department_id,
            levelId: user.level_id,
        }
        const verifToken = {
            expiresIn: 60 * 60 //1jam
        }
        const token = jwt.sign(payload, secretKey, verifToken)
        user.token = token
        const result = {
            id: user.id,
            name: user.employee_name,
            username: user.username,
            email: user.email,
            phone: user.phone_number,
            departmentId: user.department_id,
            levelId: user.level_id,
            token
        }
        res.status(200)
        commonHelper.response(res, result, 200, 'berhasil login');

    } catch (error) {
        res.status(500)
    }
}

const updateUsers = async (req, res, next) => {
    try {
        const id = req.params.id
        const employee_name = req.body
        const update = {
            employee_name,
            updated_at: new Date()
        }
        const result = await modelsUsers.updateUsers(update, id)
        res.status(200)
        commonHelper.response(res, update, 200, `Success Update Your Pofile`)
    } catch (error) {
        res.status(500),
            next({
                status: 500,
                message: 'Internal Server Error'
            })
    }
}

module.exports = {
    login,
    updateUsers
}