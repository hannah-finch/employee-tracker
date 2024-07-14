const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    message: 'What is the name of the department?',
    name: 'department_name'
  }
]
async function addDepartment() {
  let departmentSql = inquirer
  .prompt(questions)
  .then((answer) => {
    let sql = `INSERT INTO department (name)
    VALUES ('${answer.department_name}')`
    return(sql);
  })
  return(departmentSql);
}

module.exports = addDepartment;