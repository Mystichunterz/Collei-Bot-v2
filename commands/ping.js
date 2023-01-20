/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("commands > ping.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Command from "../classes/Command.js";
import Discord, { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class Ping extends Command {
  async run(message) {
    message.reply("Pong. Calculating ping...");

    const newEmbed = new EmbedBuilder()
      .setColor("#00a368")
      .setTitle(`Colleiv.2 Ping Report`)
      .setDescription(
        `**Bot Latency:** ${
          Date.now() - message.createdTimestamp
        }ms. \n**API Latency:** ${this.client.ws.ping}ms.
        `
      )
      .setFooter({ text: "Sumeru Akademiya | TGP" })
      .setTimestamp();

    message.reply({
      embeds: [newEmbed],
    });
  }
}

export default Ping;
