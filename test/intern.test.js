const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getInfo", () => {
        it("should take in a new Inter and return the expected information", () => {


        const testName = 'Brian Dryin';

        const testId = '5';
        
        const testEmail = 'briandryin@gmail.com';
        
        const testPosition = 'Intern';

        const testSchool = 'College College'
        
        const testIntern = new Intern(testName, testId, testEmail, testPosition, testSchool);
        

        
        nameInfo = testIntern.getName();
        
        idInfo = testIntern.getId();
        
        emailInfo = testIntern.getEmail();
        
        positionInfo = testIntern.getPosition();

        schoolInfo = testIntern.getSchool();
        
        
        
        expect(nameInfo).toEqual(testName);
        
        expect(idInfo).toEqual(testId);
        
        expect(emailInfo).toEqual(testEmail);
        
        expect(positionInfo).toEqual(testPosition);

        expect(schoolInfo).toEqual(testSchool);
        
        })
    })
})