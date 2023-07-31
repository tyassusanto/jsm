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

const findDepartmentId = (departmentId) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM t_department WHERE id = ?`
        connection.query(query, departmentId, (error, result) => {
            if (!error) {
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
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM t_employee WHERE id = ?`
        connection.query(query, id, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

// const getUsers = ({searchOption, sort, order, limit, offset}) => {
const getUsers = ({searchOption}) => {
    return new Promise((resolve, reject) => {
        let query = `
        SELECT 
            t_employee.id AS IdEmployee,
            t_employee.employee_name AS "EmployeeName",
            t_employee.username AS "Username",
            t_employee.email AS "Email",
            t_employee.phone_number AS "Phone",
            t_department.department_code AS "DepartmentCode",
            t_department.department_name AS "DepartmentName",
            t_level.level_code AS "LevelCode",
            t_level.level_name AS "LevelPosition"
        FROM 
            t_employee
        JOIN 
            t_department ON t_employee.department_id = t_department.id
        JOIN 
            t_level ON t_employee.level_id = t_level.id`
        if(searchOption) {
            query += ` WHERE t_department.department_code LIKE '%${searchOption}%' 
            OR t_level.level_code LIKE '%${searchOption}%'
            OR t_employee.employee_name LIKE '%${searchOption}%'`
        }
        // if(searchOption, sort, limit, offset, order){
        //     query += ` WHERE t_department.department_code LIKE '%${searchOption}%' 
        //     OR t_level.level_code LIKE '%${searchOption}%'
        //     OR t_employee.employee_name LIKE '%${searchOption}%' 
        //     ORDER BY ${sort} ${order} LIMIT ${limit} OFFSET ${offset}`
        // }
        
        console.log('query: ', query);
        connection.query(query, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
}

const countEmployee = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT COUNT(*) AS total FROM t_employee', (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
};

module.exports = {
    addEmployee,
    findDepartmentId,
    findLevelId,
    deleteUser,
    getUsers,
    countEmployee

}