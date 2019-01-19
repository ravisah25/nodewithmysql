
const baseRouter = require('express').Router()
const employeesRouter = require('./employee')

baseRouter.use('/employee',employeesRouter)


module.exports = baseRouter;
