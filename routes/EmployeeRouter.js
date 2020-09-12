const router = require('express').Router();
const employeeController = require('../controllers/EmployeeController')

router.get('/',employeeController.findAll);

router.post('/add',employeeController.add);

router.get('/:id',employeeController.findById);

router.delete('/:id',employeeController.remove);

router.post('/update/:id',employeeController.update);

module.exports = router;