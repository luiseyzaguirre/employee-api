const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/EmployeeRoutes');

mongoose.connect('mongodb://localhost:27017/employeeDB',{
    useNewUrlParser:true, useUnifiedTopology:true, autoCreate: true
});

const db = mongoose.connection;

db.on('error', (err)=>{
  console.log(err)
});

db.once('open', ()=>{
  console.log('Database is open')
});

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.use('/api/employee', employeeRoutes);