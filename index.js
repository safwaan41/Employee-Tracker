// BOILER PLATE SERVER FOR SQL

const mysql = require('mysql2');
const inquirer = require('inquirer');


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'westeros_db'
  },
  console.log(`Connected to the westeros_db database.`)
);
// ENQUIRER QUESTIONS
function menu() {
    inquirer.prompt([
        {
            message: 'What would you like to do?',
            type: 'list',
            name: 'introMenu',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments','Add Department']
        }
    ])
    .then(introMenuAns => {
        if (introMenuAns.introMenu == 'View All Employees') {
            viewAllEmployees();
        }
        if (introMenuAns.introMenu == 'Add Employee') {
            addEmployee(); //MATCH FUNCTION LATER WITH THIS
        }
        if (introMenuAns.introMenu == 'Update Employee Role') {
            updateEmployee();
        }
        if (introMenuAns.introMenu == 'View All Roles') {
            viewAllRoles();
        }
        if (introMenuAns.introMenu == 'Add Role') {
            addRole();
        }
        if (introMenuAns.introMenu == 'View All Departments') {
            viewAllDep();
        }
        if (introMenuAns.introMenu == 'Add Department') {
            addDep();
        }
    })
}
menu ();




function viewAllDep() {
// QUERY FOR department TABLE (1/3)
db.query('SELECT * FROM department', function (err, results) {
  if (err) {
    console.log(err);
    return;
  }
  console.table(results);
  menu ();
});
}

function viewAllRoles() {
// QUERY FOR role TABLE (2/3)
db.query('SELECT * FROM role', function (err, results) {
    if (err) {
      console.log(err);
      return;
    }
    console.table(results);
    menu ();
  });
}

function viewAllEmployees() {
// QUERY FOR employee TABLE (3/3)
db.query('SELECT * FROM employee', function (err, results) {
    if (err) {
      console.log(err);
      return;
    }
    console.table(results);
    menu ();
  });
}

function addEmployee() {
    inquirer.prompt([
        {
            message: 'What is the employees first name?',
            type: 'input',
            name: 'firstName',
        },
        {
            message: 'What is the employees last name?',
            type: 'input',
            name: 'lastName',
        },
        {
            message: 'What is the employees role ID?',
            type: 'input',
            name: 'roleID',
        },
        {
            message: 'What is the employees manager ID?',
            type: 'input',
            name: 'managerID',
        },
    ])
    .then(answers => {
        db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES( '${answers.firstName}', '${answers.lastName}', ${answers.roleID}, ${answers.managerID})`, function (err, results) {
            if (err) {
              console.log(err);
              return;
            }
            console.table(results)
            menu ();
        })
    })
    
}
