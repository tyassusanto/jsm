const connection = require('../config/connection')

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

const updateUsers = (update, id) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE t_employee SET ? WHERE id = ?`
        connection.query(query, [update, id], (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
        console.log('update : ', query)
    })
}

const getUserById = (oldPassword, id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM t_employee WHERE id = ${id} AND password = ${oldPassword}`
        connection.query(query, (error, result) => {
            if(!error){
                resolve(result)
            } else {
                reject(error)
            }
        })
        console.log('getid : ', query)
    })
}

module.exports ={
    findUsername,
    findEmail,
    updateUsers,
    getUserById
}