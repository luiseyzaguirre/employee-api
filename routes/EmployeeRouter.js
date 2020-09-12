const router = require('express').Router();
let EmployeeRouter = require('../models/EmployeeModel');

router.route('/').get((req, res) => {
    EmployeeRouter.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const rut= req.body.rut
    const name= req.body.name
    const cell= req.body.cell
    const email= req.body.email

    const employee = new EmployeeRouter({
        rut,
        name,
        cell,
        email,
    });

    employee.save()
        .then(() => res.json('Employee added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    EmployeeRouter.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    EmployeeRouter.findByIdAndDelete(req.params.id)
        .then(() => res.json('EmployeeRouter deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    EmployeeRouter.findById(req.params.id)
        .then(employee => {
            employee.rut= req.body.rut
            employee.name= req.body.name
            employee.cell= req.body.cell
            employee.email= req.body.email

            employee.save()
                .then(() => res.json('EmployeeRouter updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;