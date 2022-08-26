class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if (typeof this.name !== 'string') {
            throw new Error("Name is not a string");
        };
        if (typeof this.id !== 'number') {
            throw new Error("Id is not a number");
        };
        if (typeof this.email !== 'string') {
            throw new Error("Email is not a string");
        };
    };
    getName() {
        return this.name;
    };
    getID() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return "employee";
    };
};

// Exports the Employee class for use by Engineer, Intern, and Manager classes
module.exports = Employee;