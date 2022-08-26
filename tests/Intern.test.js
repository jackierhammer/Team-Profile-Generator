const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should set school", () => {
            const school = "school"
            const e = new Intern("Mary", 1, "email", school);
            expect(e.school).toBe(school);
        });
    });
});