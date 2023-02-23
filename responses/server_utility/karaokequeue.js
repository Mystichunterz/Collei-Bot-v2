/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("responses > server_utility > karaokequeue.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

//----------------------
//  config
//----------------------
export const priorityQueue = new Map();
export const requeueQueue = new Map();

// priorityQueue.set("a", "Some good news");
// priorityQueue.set("b", 2);
// priorityQueue.set("c", 3);

//----------------------
//  main
//----------------------
let karaokeEmbed = null;

let priorityField = "";
let requeueField = "";

class karaoke_queue extends Response {
  aliases = ["summon-karaoke"];
  ownerOnly = true;

  updateEmbed() {
    //----------------------
    //  embed updating
    //----------------------
    priorityField = "";
    requeueField = "";

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
  }

  async run(message) {
    this.updateEmbed();
    const embed = new EmbedBuilder()
      .setTitle("Karaoke Queue")
      .setDescription("Here is the current queue of karaoke singers:")
      .addFields(
        {
          name: "Priority Queue",
          value: priorityField || "No singers in queue!",
          inline: true,
        },
        {
          name: "Requeue",
          value: requeueField || "No singers in queue!",
          inline: true,
        }
      )
      .setColor("#00a368");

    const buttons = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("karaoke_join-")
        .setStyle("Primary")
        .setLabel("Join the Queue!")
        .setEmoji("<:7colleiTCG:1075294222955069550>"),
      new ButtonBuilder()
        .setCustomId("karaoke_leave-")
        .setStyle("Danger")
        .setLabel("Leave the Queue!")
        .setEmoji("<:5peepo_exit:970296615862698044>"),
      new ButtonBuilder()
        .setCustomId("karaoke_next_singer-")
        .setStyle("Success")
        .setLabel("Next Singer!")
        .setEmoji("<:9_util_arrow:1008997496434982922>"),
    ]);

    // Delete previous karaokeEmbed if it exists
    if (karaokeEmbed) {
      await karaokeEmbed.delete();
    }

    karaokeEmbed = await message.channel.send({
      embeds: [embed],
      components: [buttons],
    });

    return karaokeEmbed;
  }
}

//----------------------
//  exports
//----------------------
export { karaokeEmbed };
export default karaoke_queue;
