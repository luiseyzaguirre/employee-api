const EmployeeModel = require('../models/EmployeeModel');

    const findAll = (req, res, next)=>{
        EmployeeModel.find()
            .then(employees => res.json(employees))
            .catch(err => res.status(400).json('Error: ' + err));
    }

   const add = (req, res, next)=>{
       const rut= req.body.rut
       const name= req.body.name
       const cell= req.body.cell
       const email= req.body.email

       const employee = new EmployeeModel({
           rut,
           name,
           cell,
           email,
       });

       employee.save()
           .then(() => res.json('Employee added!'))
           .catch(err => res.status(400).json('Error: ' + err));
   }

   const findById = (req, res, next)=>{
       EmployeeModel.findById(req.params.id)
            .then(employee => res.json(employee))
            .catch(err => res.status(400).json('Error: ' + err));
    }

    const remove = (req, res, next) => {
        EmployeeModel.findByIdAndDelete(req.params.id)
            .then(() => res.json('Employee deleted.'))
            .catch(err => res.status(400).json('Error: ' + err));
    }

    const update = (req, res, next)=>{
        EmployeeModel.findById(req.params.id)
            .then(employee => {
                employee.rut= req.body.rut
                employee.name= req.body.name
                employee.cell= req.body.cell
                employee.email= req.body.email

                employee.save()
                    .then(() => res.json('Employee updated!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    }

    module.exports = {
        findAll, add, findById, update, remove
    }