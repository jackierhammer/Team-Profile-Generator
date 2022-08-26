// Imports parent class
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

        if (typeof this.github !== 'string') {
            throw new Error("Github is not a string");
        };
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        return "engineer";
    };
};

module.exports = Engineer;