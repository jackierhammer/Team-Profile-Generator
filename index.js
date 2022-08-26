const inquirer = require('inquirer');
const fs = require('fs');

// Imports the function that creates the README file from template.js
const template = require('./src/template.js');

// Imports the class constructors for Engineer, Intern, and Manager
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

inquirer
  .prompt([
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
    }
  ])
  .then((data) => {
    const teamManager = new Manager(`${data.managerName}`, `${data.managerID}`, `${data.managerEmail}`, `${data.managerOffice}`);
  });

console.log(teamManager);

// fs.writeFile('./dist/index.html', template(data), (err) =>
//   err ? console.log(err) : console.log('Your webpage has been generated.')
// );
