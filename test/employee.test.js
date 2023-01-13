const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getInfo", () => {
        it("should be able to create a new Employee object and use the methods to return the expected information", () => {

            
        const testName = 'Brian Dryin';

        const testId = '5';
        
        const testEmail = 'briandryin@gmail.com';
        
        const testPosition = 'employee';
        
        const testEmployee = new Employee(testName, testId, testEmail, testPosition);
        

        
        nameInfo = testEmployee.getName();
        
        idInfo = testEmployee.getId();
        
        emailInfo = testEmployee.getEmail();
        
        positionInfo = testEmployee.getPosition();
        
        
        
        expect(nameInfo).toEqual(testName);
        
        expect(idInfo).toEqual(testId);
        
        expect(emailInfo).toEqual(testEmail);
        
        expect(positionInfo).toEqual(testPosition);
        
         });
    });
});