const Message = require(`./message.js`)


class Rover {
   constructor(position = 0) {
      this.position = position;
      this.mode = `NORMAL`;
      this.generatorWatts = 110;
      
   }
   receiveMessage(message) {
      
      return message; //returns object with name and array of command objects
   };
};

module.exports = Rover;