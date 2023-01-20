/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("events > interactionCreate.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Event from "../classes/Event.js";

//----------------------
//  main
//----------------------
class InteractionCreate extends Event {
  async run(interaction) {
    if (interaction.isCommand()) {
      this.handleSlashCommand(interaction);
    } else if (interaction.isButton()) {
      this.handleButton(interaction);
    }
  }

  handleButton(interaction) {
    const [name, ...params] = interaction.customId.split("-");
    const button = this.client.getButton(name);

    if (!button) return;
    button.run(this.client, interaction, params);
  }

  handleSlashCommand(interaction) {
    const slashcmd = this.client.getSlashCommand(interaction.commandName);

    if (!slashcmd) return;

    if (slashcmd.perms && !interaction.member.permissions.has(slashcmd.perms)) {
      return interaction.reply(
        "You do not have permission to use this command"
      );
    }

    slashcmd.run(this.client, interaction);
  }
}

export default InteractionCreate;
