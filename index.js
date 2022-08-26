const inquirer = require('inquirer');
const fs = require('fs');

// Imports the function that creates the README file from template.js
const template = require('./src/template.js');

// Imports the class constructors for Engineer, Intern, and Manager
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

let employeeArray = [];

const managerQuestions = [
    {
    type: 'input',
    name: 'managerName',
    message: 'Please tell me the name of your team manager.',
    },
    {
    type: 'input',
    name: 'managerID',
    message: 'Please type the employee id of your team manager.',
    },
    {
    type: 'input',
    name: 'managerEmail',
    message: 'Please type the email of your team manager.',
    },
    {
    type: 'input',
    name: 'managerOffice',
    message: 'Please type the office number of your team manager.',
    },
];

const engineerQuestions = [
    {
    type: 'input',
    name: 'engineerName',
    message: 'Please tell me the name of this engineer.',
    },
    {
    type: 'input',
    name: 'engineerID',
    message: 'Please type the employee id of this engineer.',
    },
    {
    type: 'input',
    name: 'engineerEmail',
    message: 'Please type the email of this engineer.',
    },
    {
    type: 'input',
    name: 'github',
    message: 'Please type the github username of this engineer.',
    },
];

const internQuestions = [
    {
    type: 'input',
    name: 'internName',
    message: 'Please tell me the name of this intern.',
    },
    {
    type: 'input',
    name: 'internID',
    message: 'Please type the employee id of this intern.',
    },
    {
    type: 'input',
    name: 'internEmail',
    message: 'Please type the email of this intern.',
    },
    {
    type: 'input',
    name: 'school',
    message: 'Please type the school of this intern.',
    },
];

async function main() {
    const manager = await inquirer.prompt(managerQuestions)
    .then((data) => {
        const teamManager = new Manager(
            `${data.managerName}`, 
            parseInt(`${data.managerID}`), 
            `${data.managerEmail}`, 
            parseInt(`${data.managerOffice}`)
        );
        employeeArray.push(teamManager);
    });
    const engineer = await inquirer.prompt(engineerQuestions)
    .then((data) => {
        const newEngineer = new Engineer(
            `${data.engineerName}`, 
            parseInt(`${data.engineerID}`), 
            `${data.engineerEmail}`, 
            `${data.github}`
        );
        employeeArray.push(newEngineer);
        console.log(typeof employeeArray[0]);
    });
};

main();


// fs.writeFile('./dist/index.html', template(data), (err) =>
//   err ? console.log(err) : console.log('Your webpage has been generated.')
// );

