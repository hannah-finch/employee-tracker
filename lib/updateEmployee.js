const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    message: `What is the employee's ID?`,
    name: 'employee_id'
  },
  {
    type: 'input',
    message: 'What is the role ID you want to assign the selected employee',
    name: 'role'
  },
  {
    type: 'input',
    message: `What is the employee's manager's ID`,
    name: 'manager'
  },
]

async function updateEmployee() {
  let updateSql = inquirer
  .prompt(questions)
  .then((answer) => {
    let sql = `UPDATE employee set role_id = ${answer.role},
    manager_id = ${answer.manager}
    WHERE id = ${answer.employee_id} ;`
    return(sql);
  })
  return(updateSql);
}

module.exports = updateEmployee;