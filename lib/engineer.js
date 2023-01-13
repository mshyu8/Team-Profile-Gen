const Employee = require("../lib/employee");

class Engineer extends Employee{
    constructor( name, id, github, email, position) {

        super(name, id, email, position)
            this.github = github;
    };

    getgitHub() {
        return this.github;

    }

    getPosition() {
        return "Engineer";
    };
};

module.exports = Engineer;