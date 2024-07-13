// how is this working together with schema.sql? Pool connects to the database

const inquirer = require('inquirer');
const express = require('express');
const { Pool } = require('pg');
const app = express();


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
  console.log('Logged in to employee database')
)

pool.connect();


function init () {
  inquirer
  .prompt(questions)
  .then((response) => {
    let sql;
    // After making a choice and the case runs, I want it to re-prompt I think. Look at video
    switch(response.choice) {
      case 'View All Employees': // works
        sql = 'SELECT * FROM employee';
        pool.query(sql, function (err, {rows}) {
          if (err) {
            console.log(err);
          }
          console.table(rows);
        })
        break;
      case 'Add Employee': // works
        // uses getEmployeeInfo function to prompt for info and saves in a string for sql
        // There's an extra variable here, I can just make employeeInfo be sql and whatever, can't explain but I know in my head, do it later
        getEmployeeInfo().then((employeeInfo) => {
          sql = employeeInfo;
          console.log(sql);
          pool.query(sql, (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Employee added");
          })
        })
        // do a query thingy to put into database
        break;
      case 'Update Employee Role': // not started
        // stuff
        break;
      case 'View all Roles':// works
        sql = 'SELECT * FROM role';
        pool.query(sql, function (err, {rows}) {
          if (err) {
            console.log(err);
          }
          console.table(rows);
        })
        break;
      case 'Add Role':// not started
        // stuff
        break;
      case 'View All Departments':// works
        sql = 'SELECT * FROM department';
        pool.query(sql, function (err, {rows}) {
          if (err) {
            console.log(err);
          }
          console.table(rows);
        })
        break;
      case 'Add Department':// not started
        // stuff
        break;
      case 'Quit':// not started
        // stuff
        break;
    }
    
  })
}

init();