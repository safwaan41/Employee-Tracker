const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'westeros_db'
    },
    console.log(`
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡀⠀⠀⠀⠀⢢⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⢱⡄⠀⠀⢄⣠⣧
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢡⠀⢀⠀⠙⣿⡇⠀⢄⠀⢹⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠄⠀⠀⠀⢢⠀⢨⡇⢠⠈⢻⣿⣧⠀⢈⣿⣿⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠢⢬⣲⣤⣶⣚⣟⡛⠓⣾⣶⠼⠯⠿⠤⠞⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣘⣧⣼⣿⣍⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣤⣴⣾⣿⣿⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡍⢉⣽⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡙⠛⣾⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⡀⠀⣼⣿⣿⣿⣭⡄⡯⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣠⡾⣛⣷⣬⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⡾⠃⠀⣿⠻⢾⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⠀⠀⠺⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢿⠄⠀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠉⠙⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⣿⣿⣿⣿⡿⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⢿⣿⣿⡟⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⣤⣿⠌⢿⣿⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠈⠻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`)
);
// ENQUIRER QUESTIONS
function menu() {
    inquirer.prompt([
        {
            message: 'What would you like to do?',
            type: 'list',
            name: 'introMenu',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
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
menu();




function viewAllDep() {
    // QUERY FOR department TABLE (1/3)
    db.query('SELECT * FROM department', function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        menu();
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
        menu();
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
        menu();
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
            console.log(answers)
            db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES( '${answers.firstName}', '${answers.lastName}', ${answers.roleID}, ${answers.managerID})`, function (err, results) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.table(results)
                menu();
            })
        })

}
// UPDATE EMPLOYEE ROLE
async function updateEmployee() {
    const employees = await db.promise().query('SELECT * FROM employee')
    const employeeChoices = employees[0].map(({id, first_name, last_name}) => ({name:`${first_name} ${last_name}`, value:id}))
    const role = await db.promise().query('Select * FROM role');
    const employeeRole = role[0].map(({id, title}) => ({name:title, value:id}));
    const response = await inquirer.prompt([
        {
            message: 'Please select the employee you would like to edit',
            type: 'list',
            name: 'updateEmployee',
            choices: employeeChoices
        },
        {
            message: 'Please select the new role for the employee',
            type: 'list',
            name: 'updateRole',
            choices: employeeRole
        },

    ])
    const data = await db.promise().query('UPDATE employee SET role_id = ? WHERE id = ?',[response.updateRole,response.updateEmployee])
    menu();
};

// ADD ROLE FUNCTION
function addRole() {
    inquirer.prompt([
        {
            message: 'What role would you like to add?',
            type: 'input',
            name: 'newRole'
        },
        {
            message: 'What is the salary of the new role?',
            type: 'input',
            name: 'roleSalary'
        },
        {
            message: 'What department ID does this role belong to?',
            type: 'input',
            name: 'roleDepartment'
        }
    ])
    .then(answers => {
        db.query(`INSERT INTO role(title,salary,department_id)VALUES('${answers.newRole}',${answers.roleSalary}',${answers.roleDepartment})`, function (err, results) {
            if (err) {
                console.log(err);
                return;
            }
            console.table(results)
            menu();
        })
    })

};

//ADD DEPARTMENT FUNCTION
function addDep() {
    inquirer.prompt([
        {
            message:'What is the department you would like to add?',
            type: 'input',
            name: 'newDep',
        }
    ])
    .then(answers => {
        console.log(answers)
        db.query(`INSERT INTO department(name) VALUES('${answers.name}')`, function (err, results){
            if (err) {
                console.log(err);
                return;
            }
            console.table(results)
            menu();
        })
    })
    

};


// .then(answers => {
//     db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('${answers.firstName}', '${answers.lastName}')`, function (err, results) {
//         if (err) {
//             console.log(err);
//             return;

// // (answers => {
// //     db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES( '${answers.firstName}', '${answers.lastName}', ${answers.roleID}, ${answers.managerID})`, function (err, results) {
// //         if (err) {
// //             console.log(err);
// //             return;
// //         }
// //         console.table(results)
// //         menu();
// //     })
// // })