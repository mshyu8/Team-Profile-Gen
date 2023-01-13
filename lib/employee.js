const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;
    };

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getPosition() {
        return 'employee';
    };

};

module.exports = Employee;