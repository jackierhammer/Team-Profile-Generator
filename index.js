const inquirer = require('inquirer');
const fs = require('fs');

// Imports the function that creates the html file from template.js
const createHTML = require('./src/template.js');

// Imports the class constructors for Engineer, Intern, and Manager
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// employeeArray holds all of the employee objects created
let employeeArray = [];
// employeeCount holds the number of interns and number of engineers provided by the user
let employeeCount = [];

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

function newManager(data) {
    const teamManager = new Manager(
    `${data.managerName}`, 
    parseInt(`${data.managerID}`), 
    `${data.managerEmail}`, 
    parseInt(`${data.managerOffice}`)
    );
    employeeArray.push(teamManager);
};

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

function newEngineer(data) {
    const teamEngineer = new Engineer(
    `${data.engineerName}`, 
    parseInt(`${data.engineerID}`), 
    `${data.engineerEmail}`, 
    `${data.github}`
    );
    employeeArray.push(teamEngineer);
};

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

function newIntern(data) {
    const teamIntern = new Intern(
    `${data.internName}`, 
    parseInt(`${data.internID}`), 
    `${data.internEmail}`, 
    `${data.school}`
    );
    employeeArray.push(teamIntern);
};

const employeeCounter = [
    {
        type: 'input',
        name: 'internCount',
        message: 'How many interns are there?',
    },
    {
    type: 'input',
    name: 'engineerCount',
    message: 'How many engineers are there?',
    }
];

function writeHTMLFile(content) {
    fs.writeFile('./dist/index.html', content, (err) =>
        err ? console.log(err) : console.log('Your webpage has been generated.')
    );
}

// main function gets the number of interns and engineers that inquirer needs to gather user input for
async function main() {
    const askCount = await inquirer.prompt(employeeCounter)
    .then((data) => {
        employeeCount.push(parseInt(data.internCount));
        employeeCount.push(parseInt(data.engineerCount));
    });
    const askQ = await askQuestions();
};

// askQuestions function asks the appropriate number of questions for manager, interns, and engineers and then runs object creating functions
async function askQuestions() {
    const managerAsk = await inquirer.prompt(managerQuestions)
    .then((data) => {
        newManager(data);
    });
    for (let i = 0; i < employeeCount[0]; i++) {
        const internAsk = await inquirer.prompt(internQuestions)
        .then((data) => {
            newIntern(data);
        });
    };
    for (let i = 0; i < employeeCount[1]; i++) {
        const engineerAsk = await inquirer.prompt(engineerQuestions)
        .then((data) => {
            newEngineer(data);
        });
    };
    const garbage = await writeHTMLFile(createHTML(employeeArray,employeeCount));
};

main();


