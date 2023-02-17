/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("events > messageCreate.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { cp } from "fs";
import Event from "../classes/Event.js";

//----------------------
//  config
//----------------------
const ownerId = ["448795804153675779"];

//----------------------
//  main
//----------------------
class MessageCreate extends Event {
  //----------------------
  //  Check if message is a command
  //----------------------
  async run(message) {
    if (message.content.startsWith(this.client.prefix)) {
      let command = this.client.getCommand(
        message.content.replace(this.client.prefix, "")
      );
      if (!command) return;

      if (command.cooldown) {
        let cooldownUntil = this.client.cooldowns.get(
          `${command.name}-${message.author.id}`
        );
        if (cooldownUntil && cooldownUntil > Date.now())
          return message.reply(
            `Command is still on cooldown for ${Math.ceil(
              (cooldownUntil - Date.now()) / 1000
            )} more seconds`
          );

        this.client.cooldowns.set(
          `${command.name}-${message.author.id}`,
          new Date().valueOf() + command.cooldown
        );
      }

      await command.run(message);
    } else {
      //----------------------
      //  Check if message is a response
      //----------------------
      let response = this.client.getResponse(message.content.toLowerCase());
      if (!response) return;

      //----------------------
      //  Check for moderator permissions
      //----------------------
      if (response.ownerOnly && !ownerId.includes(message.author.id)) {
        return message.reply(
          "Sorry, this command can only be used by the owner!"
        );
      }
      //----------------------
      //  Check if message has a cooldown
      //----------------------
      if (response.cooldown) {
        let cooldownUntil = this.client.cooldowns.get(
          `${response.name}-${message.author.id}`
        );
        if (cooldownUntil && cooldownUntil > Date.now())
          return message.reply(
            `Response is still on cooldown for ${Math.ceil(
              (cooldownUntil - Date.now()) / 1000
            )} more seconds`
          );

        //----------------------
        //  Sets the cooldown for the user by adding the current time plus the command's cooldown time to the cooldowns collection.
        //----------------------
        this.client.cooldowns.set(
          `${response.name}-${message.author.id}`,
          new Date().valueOf() + response.cooldown
        );
      }

      try {
        await response.run(message);
      } catch (error) {
        console.error(error);
      }

    }
  }
}

export default MessageCreate;
