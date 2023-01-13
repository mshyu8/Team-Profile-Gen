const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(name, id, email, position, school) {

        super(name, id, email, position) 
            this.school = school;
    }


    getSchool() {
        return this.school;
    }

    getPosition() {
        return "Intenrn";
    };
};


module.exports = Intern;