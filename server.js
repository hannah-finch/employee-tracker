const inquirer = require('inquirer');
const express = require('express');
const { Pool } = require('pg');
const app = express();

const addEmployee = require('./lib/addEmployee');
const addDepartment = require('./lib/addDepartment');
const addRole = require('./lib/addRole');
const updateEmployee = require('./lib/updateEmployee');

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
  console.log('Logged in to employee database')
)

pool.connect();

const run= () => {
  inquirer
  .prompt(questions)
  .then((response) => {
    let sql;
    // After making a choice and the case runs, I want it to re-prompt I think. Look at video
    switch(response.choice) {
      case 'View All Employees':
        sql = 'SELECT * FROM employee';
        pool.query(sql, function (err, {rows}) {
          if (err) {
            console.log(err);
          }
          // console.table(rows);
        })
        console.log('thing')
        process.exit()
        break;
      case 'Add Employee':
        // uses addEmployee function to prompt for info and saves in database
        addEmployee().then((sql) => {
          pool.query(sql, (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Employee added");
          })
        })
        break;
      case 'Update Employee Role':
        // stuff
        updateEmployee().then((sql) => {
          pool.query(sql, (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Employee updated");
          })
        })
        break;
      case 'View all Roles':
        sql = 'SELECT * FROM role';
        pool.query(sql, function (err, {rows}) {
          if (err) {
            console.log(err);
          }
          console.table(rows);
        })
        break;
      case 'Add Role':
        addRole().then((sql) => {
          pool.query(sql, (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Role added");
          })
        })
        break;
      case 'View All Departments':
        sql = 'SELECT * FROM department';
        pool.query(sql, function (err, {rows}) {
          if (err) {
            console.log(err);
          }
          console.table(rows);
        })
        break;
      case 'Add Department':
        addDepartment().then((sql) => {
          pool.query(sql, (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Department added");
          })
        })
        break;
      case 'Quit':
        process.exit()
      default:
        console.log('thing 2')
        return;
    };
  })
};


function init () {
  run();
}

init();