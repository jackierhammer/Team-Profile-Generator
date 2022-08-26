// Imports parent class
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        if (typeof this.officeNumber !== 'number') {
            throw new Error("Office number is not a number");
        };
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return "manager";
    };
};

module.exports = Manager;