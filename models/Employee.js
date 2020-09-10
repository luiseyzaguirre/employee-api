const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    
    rut:{
        type:String
    },
    name:{
        type:String
    },
    cell:{
        type:String
    },
    email:{
        type:String
    }
},{timestamps:true});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;