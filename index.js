const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require('inquirer');
const fs = require('fs');
const createHtml = require("./src/htmltemplate");
const employeeList = [];




function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id number?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?'
            }
        ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.officeNumber, data.email);
            employeeList.push(manager);
            addEmployee();
        })
}


function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'position',
                message: 'What is the postition of this employee?',
                choices: ["Engineer", "Intern", "No more employees needed"]
            }
        ])
        .then(function(input) {
                switch (input.position) {
                    case `Engineer`: addEngineer();
                        break;
                    case `Intern`: addIntern();
                        break;
                    default: makeHtml();
                }
        })
}


function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineers id?'
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is the engineers github username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineers email?'
            }
        ])

        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.gitHub, data.email);
            employeeList.push(engineer);
            addEmployee();
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the interns name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns id number?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the intern attend?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?' 
            }
        ])

        .then((data) => {
            const intern = new Intern(data.name, data.id, data.school, data.email);
            employeeList.push(intern);
            addEmployee();
        })
}

const makeHtml = () => {
    const template = createHtml(employeeList)
    fs.writeFile("./dist/index.html", template, (err) => {
        console.log(err) ; console.log('Team Profiles Created!')
    })
}

addManager();