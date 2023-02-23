/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("commands > refreshkaraoke.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Command from "../classes/Command.js";
import Discord, { EmbedBuilder } from "discord.js";

import { priorityQueue } from "../responses/server_utility/karaokequeue.js";
import { requeueQueue } from "../responses/server_utility/karaokequeue.js";
import { karaokeEmbed } from "../responses/server_utility/karaokequeue.js";

//----------------------
//  main
//----------------------
class RefreshKaraoke extends Command {
  async run(message) {
    try {
      message.reply("Refreshing Queue...");

      //----------------------
      //  embed updating
      //----------------------
      let priorityField = "";
      let requeueField = "";

      //----------------------
      //  Priority Queue Update
      //----------------------
      for (const [key, value] of priorityQueue.entries()) {
        const userId = key.split("-")[1];
        const hasSung = value.hasSung;
        const isSinging = value.isSinging;
        const userLine = `${hasSung ? "~~" : ""}<@${userId}>${
          hasSung ? "~~" : ""
        }${isSinging ? " 🎤" : ""}`;
        priorityField += `\n${userLine}`;
      }

      //----------------------
      //  Requeue Queue Update
      //----------------------
      for (const [key, value] of requeueQueue.entries()) {
        const userId = key.split("-")[1];
        const hasSung = value.hasSung;
        const isSinging = value.isSinging;
        const userLine = `${hasSung ? "~~" : ""}<@${userId}>${
          hasSung ? "~~" : ""
        }${isSinging ? " 🎤" : ""}`;
        requeueField += `\n${userLine}`;
      }

      //----------------------
      //  Push Queue Update
      //----------------------
      const embed = karaokeEmbed.embeds[0];
      embed.fields[0].value = priorityField || "No singers in queue!";
      embed.fields[1].value = requeueField || "No singers in queue!";

      return karaokeEmbed.edit({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      if (
        error.message.includes(
          "Cannot read properties of null (reading 'embeds')"
        )
      ) {
        await interaction.editReply({
          content:
            "Sorry, the queue you are interacting with is outdated. Please try again with an updated queue embed.",
          ephemeral: true,
        });
      } else {
        await interaction.editReply({
          content: `There was an error processing your request. Please contact Mystichunterz#1922 if this issue persists.\n\n${error}`,
          ephemeral: true,
        });
      }
    }
  }
}

export default RefreshKaraoke;
