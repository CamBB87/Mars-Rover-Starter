const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

beforeAll(() => {    
    newCommand = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]
    newMassage = new Message(`phil`, newCommand);
});


describe("Message class", function () {
    test("throws error if a name is NOT passed into the constructor as the first parameter", () => {
        expect(function () { new Message(); }).toThrow(new Error('Name type required.'));
    });
    test("constructor sets name", () => {
        expect(newMassage.name).toBe(`phil`)
    });
    test("contains a commands array passed into the constructor as the 2nd argument", () => {
        expect(newMassage.commands).not.toBe(undefined)
    });
});
