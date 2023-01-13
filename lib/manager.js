const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor( name, id, officeNumber,email ) {
        super(name, id, email)
            this.officeNumber = officeNumber;
            
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getPosition() {
        return 'Manager';
    };

};

module.exports = Manager;