// Imports parent class
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

        if (typeof this.school !== 'string') {
            throw new Error("School is not a string");
        };
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return "intern";
    };
};

module.exports = Intern;