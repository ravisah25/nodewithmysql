const employeeRouter = require('express').Router()
const { getAllEmployee, getEmployee } = require('../models/employee')

employeeRouter.get('/', async (req, res) => {
    try {
        let data = await getAllEmployee();
        res.send(data);
    }
    catch (ex) {
        console.log("error :", ex);
    }
})


employeeRouter.get('/:id', async (req, res) => {
    var id = req.params.id;
    // mySqlConnect.query('select * from employee where EmpID = ?',[id],(err, rows, fields) =>{
    //     if(!err){
    //         res.send(rows);
    //     }
    // })
    
    try {
        let data = await getEmployee(id);
        res.send(data);
    }
    catch (ex) {
        console.log("error :", ex);
    }
})

employeeRouter.post('/', async (req, res) => {
    let data = req.body;
    // let sql = "set @EmpID = ?; set @Name = ?; set @EmpCode = ?; set @Salary = ?; \
    // call EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    // mySqlConnect.query(sql, [data.EmpID,data.Name,data.EmpCode,data.Salary], (err, rows, fields) =>{
    //     if(!err){
    //         res.send(rows);
    //     }   
    //     else{
    //         res.send(err);
    //     }
    // })
    try {
        let data = await getAllEmployee();
        res.send(data);
    }
    catch (ex) {
        console.log("error :", ex);
    }

})


module.exports = employeeRouter