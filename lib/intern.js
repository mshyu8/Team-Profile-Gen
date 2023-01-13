const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(name, id, school, email, position) {

        super(name, id, email, position) 
            this.school = school;
    }


    getSchool() {
        return this.school;
    }

    getPosition() {
        return "Intern";
    };
};


module.exports = Intern;