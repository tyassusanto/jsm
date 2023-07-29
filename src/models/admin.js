const { reject } = require('bcrypt/promises')
const connection = require('../config/connection')

const addEmployee = (insertDataUser) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO t_employee SET ?`
        connection.query(query, insertDataUser, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const findUsername = (username) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM t_employee WHERE username = ?`
        connection.query(query, username, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const findEmail = (email) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM t_employee WHERE email = ?`
        connection.query(query, email, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const findDepartmentId = (department_id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM t_department WHERE id = ?`
        connection.query(query, department_id, (error, result) => {
            if(!error){
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}
const findLevelId = (level_id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM t_level WHERE id = ?`
        connection.query(query, level_id, (error, result) => {
            if(!error){
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

module.exports = {
    addEmployee,
    findUsername,
    findEmail,
    findDepartmentId,
    findLevelId
}