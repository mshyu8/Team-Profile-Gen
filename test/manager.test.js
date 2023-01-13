const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("getInfo", () => {
        it("should be able to take in a new maneger and return the expected information", () => {


        const testName = 'Brian Dryin';

        const testId = '5';
        
        const testEmail = 'briandryin@gmail.com';

        const testOfficeNumber = '6'
        
        const testManager = new Manager(testName, testId, testEmail, testOfficeNumber);
        

        
        nameInfo = testManager.getName();
        
        idInfo = testManager.getId();
        
        emailInfo = testManager.getEmail();
        
        positionInfo = testManager.getPosition();

        officeNumberInfo = testManager.getOfficeNumber();
        
        
        
        expect(nameInfo).toEqual(testName);
        
        expect(idInfo).toEqual(testId);
        
        expect(emailInfo).toEqual(testEmail);
        
        expect(positionInfo).toEqual('Manager');

        expect(officeNumberInfo).toEqual(testOfficeNumber);
        
        })
    })
})