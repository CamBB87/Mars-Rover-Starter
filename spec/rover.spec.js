const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
beforeAll(() => {
  // newCommand = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  // newMassage = new Message(`phil`, newCommand);
  // newRover = new Rover(98382);
  // arr = newRover.receiveMessage(newMassage); 
  // newArr = arr.results[0].roverStatus;
  // actualArr = [newRover];
});

describe("Rover class", function () {

  test("constructor sets position and default values for mode and generatorWatts", () => {
    let testRover = new Rover(50);
    expect(testRover.position).toBe(50);
    expect(testRover.generatorWatts).toBe(110);
    expect(testRover.mode).toBe(`NORMAL`);
  });
  test("response returned by receiveMessage contains the name of the message", () => {
    let newCommand = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let newMassage = new Message(`phil`, newCommand);
    let newRover = new Rover(50);
    let arr = newRover.receiveMessage(newMassage);
    expect(arr.message).toBe(`phil`);
  });
  test("response returned by receiveMessage includes two results if two commands are sent in the message", () => {
    let newCommand = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let newMassage = new Message(`phil`, newCommand);
    let newRover = new Rover(50);
    let arr = newRover.receiveMessage(newMassage);
    expect(arr.results.length).toBe(2);
  });
  test("responds correctly to the status check command", () => {
    let newCommand = [new Command('MODE_CHANGE', 'NORMAL'), new Command('STATUS_CHECK')];
    let newMassage = new Message(`phil`, newCommand);
    let newRover = new Rover(50);
    let arr = newRover.receiveMessage(newMassage);
    let newArr = arr.results[1].roverStatus;
    expect(newArr.position).toBe(50);
    expect(newArr.mode).toBe(`NORMAL`);
    expect(newArr.generatorWatts).toBe(110);
  });
  test("responds correctly to the mode change command", () => {
    let newCommand = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let newMassage = new Message(`phil`, newCommand);
    let newRover = new Rover(50);
    let arr = newRover.receiveMessage(newMassage);
    expect(arr.results[0].completed).toBe(true);
    expect(arr.results[1].roverStatus.mode).toBe(`LOW_POWER`);
  });
  test("responds with a false completed value when attempting to move in LOW_POWER mode", () => {
    let newCommand = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 950), new Command(`STATUS_CHECK`) ]; //should be able to handle a lot of commands 
    let newMassage = new Message(`phil`, newCommand);
    let newRover = new Rover(50);
    let arr = newRover.receiveMessage(newMassage);
    expect(arr.results[1].completed).toBe(false)
    expect(arr.results[2].roverStatus.position).toBe(50) // make a move if statement to test if posistion has moved to 950
  });
  test("responds with the position for the move command", () => {
    let newCommand = [new Command('MOVE', 950), new Command(`STATUS_CHECK`)]; //should be able to handle a lot of commands 
    let newMassage = new Message(`phil`, newCommand);
    let newRover = new Rover(50);
    let arr = newRover.receiveMessage(newMassage);
    expect(arr.results[1].roverStatus.position).toBe(950);
  });


});
