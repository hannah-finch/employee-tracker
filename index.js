const inquirer = require('inquirer');
const express = require('express');
const { Pool } = require('pg');
const app = express();

// import function that gets
const getEmployeeInfo = require('./lib/getEmployeeInfo');

const questions = [
  {
  type: 'list',
  message: 'What would you like to do?',
  name: 'choice',
  choices: [
      'View All Employees', 
      'Add Employee',
      'Update Employee Role',
      'View all Roles',
      'Add Role',
      'View All Departments',
      'Add Department',
      'Quit']
  },
];
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool(
  {
    user: 'postgres',
    password: 'hannarue',
    host: 'localhost',
    database: 'employees_db'
  },
  console.log('Connected to employee database')
)

pool.connect();

function init () {
  inquirer
  .prompt(questions)
  .then((responses) => {

  })
}


// next  is switch statement for questions
// how to get chart to show? console.chart(variable)

function test() {
  pool.query(function (err, {rows}) {
    if (err) {
      console.log(err)
    }
    console.table(rows);
  })
}
// 'View All Employees', 
// 'Add Employee',
// 'Update Employee Role',
// 'View all Roles',
// 'Add Role',
// 'View All Departments',
// 'Add Department',
// 'Quit'

init();