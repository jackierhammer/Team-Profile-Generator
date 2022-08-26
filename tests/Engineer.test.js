const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set github", () => {
            const github = "github"
            const e = new Engineer("Mary", 1, "email", "github");
            expect(e.github).toBe(github);
        });
    });
});