const Message = require(`./message.js`)


class Rover {
   constructor(position = 0) {
      this.position = position;
      this.mode = `NORMAL`;
      this.generatorWatts = 110;
   }
   receiveMessage(messageOBJ) {
      let recieve = { 
         message: messageOBJ.name,
         results: []
      };
      for(let i = 0; i < messageOBJ.commands.length; i++) {
         let currentCommand = messageOBJ.commands[i]
         
         if (currentCommand.commandType === `STATUS_CHECK`) {
            recieve.results.push({completed: true, roverStatus: {position: this.position, mode: this.mode, generatorWatts: this.generatorWatts}});

         } else if (currentCommand.commandType === `MOVE`) {
            if (this.mode === `LOW_POWER`) {
               recieve.results.push({completed: false})
            } else if (this.mode === `NORMAL`) {
               this.position = currentCommand.value;
               recieve.results.push({completed: true})
            }
         } else if (currentCommand.commandType === `MODE_CHANGE`) {
            if (currentCommand.value === `LOW_POWER`) {
               this.mode = currentCommand.value;
               recieve.results.push({completed: true});

            } else if (currentCommand.value === `NORMAL`) {
               this.mode = currentCommand.value;
               recieve.results.push({completed: true});

            }
         };
      };
    

      return recieve; //returns object with name and array of command objects
   };
};

module.exports = Rover;