const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object", () => {
            const e = new Employee("mary", 1, "email");
            expect(typeof(e)).toBe("object");
        });
        it("should set name", () => {
            const name = "Mary"
            const e = new Employee(name, 1, "email");
            expect(e.name).toBe(name);
        });
        it("should set id", () => {
            const id = 1
            const e = new Employee("Peter", id, "email");
            expect(e.id).toBe(id);
        });
        it("should set email", () => {
            const email = "email"
            const e = new Employee("Peter", 1, email);
            expect(e.email).toBe(email);
        });
    });
});