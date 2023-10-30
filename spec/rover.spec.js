const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
beforeAll(() => {
  newRover = new Rover(9000, `NORMAL`, 110)
});

describe("Rover class", function() {

  test("constructor sets position and default values for mode and generatorWatts", () => {
    expect(newRover.position).toBe(9000)
    expect(newRover.generatorWatts).toBe(110)
    expect(newRover.mode).toBe(`NORMAL`)
  });
  // test("response returned by receiveMessage contains the name of the message", () => {
  //   expect(Rover.)
  // });

});
