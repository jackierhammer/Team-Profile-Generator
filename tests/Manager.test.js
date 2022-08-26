const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set office number", () => {
            const office = 1;
            const e = new Manager("Mary", 1, "email", office);
            expect(e.officeNumber).toBe(office);
        });
    });
});