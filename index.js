const inquirer = require('inquirer');

const questions = [
  {
  type: 'list',
  message: 'What would you like to do?',
  name: 'choice', //?
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
 
