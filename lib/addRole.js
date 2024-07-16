const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    message: 'What is the name of the role?',
    name: 'role'
  },
  {
    type: 'input',
    message: 'What is the salary of the role?',
    name: 'salary'
  },
  {
    type: 'input',
    message: 'What department does the role belong to?',
    name: 'department'
  }
]

async function addRole() {
  let roleSql = inquirer
  .prompt(questions)
  .then((answer) => {
    let sql = `INSERT INTO role ( title, salary, department_id )
    VALUES ('${answer.title}', '${answer.salary}', '${answer.department}')`
    return(sql);
  })
  return(roleSql);
}

module.exports = addRole;