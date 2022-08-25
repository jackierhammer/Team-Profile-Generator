class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "employee";
    }
}

// Exports the Employee class for use by Engineer, Intern, and Manager classes
module.exports = Employee;