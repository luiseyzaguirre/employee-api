const { response } = require("express");
const Employee = require("../models/Employee");


const getEmployees = (req, res, next) =>{
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'Error can`t find all employees!'
        })

    });
}

const saveEmployee = (req, res, next) => {
    let employee = new Employee({
        rut: req.body.rut,
        name: req.body.name,
        cell: req.body.cell,
        email: req.body.email
    })
    employee.save()
    .then(response => {
        res.json({
            message:'Employee added Successfully'            
        })
    })
    .catch(error =>{
        res.json({
            message:'Error can`t save employee'            
        })
    })
}

module.exports = {
    getEmployees, saveEmployee
}