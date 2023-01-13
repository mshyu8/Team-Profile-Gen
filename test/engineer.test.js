const Engineer = require("../lib/engineer");

    describe("Engineer", () => {
        describe("getInfo", () => {
            it("should be able to take in a new Engineer and return the expected information", () => {

        const testName = 'Brian Dryin';

        const testId = '5';
        
        const testEmail = 'briandryin@gmail.com';
        
        const testPosition = 'Engineer';

        const testGitHub = "DryingaBrian";
        
        const testEngineer = new Engineer(testName, testId, testEmail, testPosition, testGitHub);
        

        
        nameInfo = testEngineer.getName();
        
        idInfo = testEngineer.getId();
        
        emailInfo = testEngineer.getEmail();
        
        positionInfo = testEngineer.getPosition();

        gitHubInfo = testEngineer.getgitHub();
        
        
        
        expect(nameInfo).toEqual(testName);
        
        expect(idInfo).toEqual(testId);
        
        expect(emailInfo).toEqual(testEmail);
        
        expect(positionInfo).toEqual(testPosition);

        expect(gitHubInfo).toEqual(testGitHub);
        
            })
        })
    })