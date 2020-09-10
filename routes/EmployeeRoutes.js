const express = require('express');
const routes = express.Router();

const employeeController = require('../controllers/EmployeeController');


routes.get('/get',employeeController.getEmployees);
routes.post('/save',employeeController.saveEmployee);

module.exports = routes;