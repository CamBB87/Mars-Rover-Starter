const Message = require(`./message.js`)


class Rover {
   constructor(position = `position`, mode = `NORMAL`, generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
      
   }
   receiveMessage = function receiveMessage(message) {
      return message.name
   }
}

module.exports = Rover;