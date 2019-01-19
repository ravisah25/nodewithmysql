
const sqlConnect = require('./index')

async function getEmployee() {
    return new Promise((resolve, reject) => {
        sqlConnect.query('select  * from employee', (err, rows, fields) => {
            if (!err) {
                console.log(rows);
                resolve(rows);
            }
            else {
                console.log('error');
            }
        })
    })
}


async function getEmployee(id){
 return new Promise((resolve, reject) =>{
        sqlConnect.query('select * from employee where EmpID = ?',[id],(err, rows, fields) =>{
            if (!err) {
                console.log(rows);
                resolve(rows);
            }
            else {
                console.log('error');
            }
    })
 })
}

module.exports = {
    getEmployee,
    getEmployee
}