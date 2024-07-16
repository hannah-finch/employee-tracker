const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    message: "What is the Employee's first name?",
    name: 'first_name'
  },
  {
    type: 'input',
    message: "What is the Employee's last name?",
    name: 'last_name'
  },
  {
    type: 'input',
    message: "What is the Employee's role id?",
    name: 'role_id'
  },
  {
    type: 'input',
    message: "What is the Employee's Manager's id? (leave empty if none)",
    name: 'manager_id'
  },
];

async function addEmployee () {
  let employeeSql = inquirer
  .prompt(questions)
  .then((answers) => {
    let {first_name, last_name, role_id, manager_id} = answers;
    if (manager_id === "") {
      manager_id = null
    }

    let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id}) ;`
    return sql;
  })
  .catch((err) => {
    console.log(err)
  })
  return employeeSql;
}

module.exports = addEmployee;