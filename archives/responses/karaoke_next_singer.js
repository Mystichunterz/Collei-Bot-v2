/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("buttons > karaokequeue > karaoke_join.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { priorityQueue } from "../../responses/server_utility/karaokequeue.js";
import { requeueQueue } from "../../responses/server_utility/karaokequeue.js";
import { karaokeEmbed } from "../../responses/server_utility/karaokequeue.js";

//----------------------
//  main
//----------------------
class KaraokeQueueButton {
  async run(client, interaction, parameters) {
    let priorityField = karaokeEmbed.embeds[0].fields[0];
    let requeueField = karaokeEmbed.embeds[0].fields[1];

    let lastSinger;
    let userFound = false;

    // Find user with earliest timestamp and hasSung = false in priority queue
    let nextUserFound = false;
    for (const [key, value] of priorityQueue.entries()) {
      const userId = key.split("-")[1];
      const hasSung = value.hasSung;
      const isSinging = value.isSinging;
      if (!hasSung && !isSinging) {
        // set the current user to be singing
        value.isSinging = true;
        userFound = true;
        if (lastSinger) {
          // if there was a previous singer, mark them as having sung and no longer singing
          lastSinger.hasSung = true;
          lastSinger.isSinging = false;
          console.log(`User <@${lastSinger.userId}> has sung`);
        }
        // update lastSinger to be the current user
        lastSinger = { ...value, userId };
        nextUserFound = true;
        break;
      } else if (isSinging) {
        // set the current user to have sung and is no longer singing
        value.hasSung = true;
        value.isSinging = false;
        userFound = true;
        // update lastSinger to be the current user
        lastSinger = { ...value, userId };

        // find the next user in the queue who has not sung yet and set their isSinging property to true
        for (const [nextKey, nextValue] of priorityQueue.entries()) {
          if (nextKey !== key && !nextValue.hasSung && !nextValue.isSinging) {
            nextValue.isSinging = true;
            nextUserFound = true;
            break;
          }
        }

        if (!nextUserFound) {
          for (const [nextKey, nextValue] of requeueQueue.entries()) {
            if (!nextValue.hasSung && !nextValue.isSinging) {
              nextValue.isSinging = true;
              nextUserFound = true;
              break;
            }
          }
        }

        break;
      }
    }

    if (!userFound) {
      for (const [key, value] of requeueQueue.entries()) {
        const userId = key.split("-")[1];
        const hasSung = value.hasSung;
        const isSinging = value.isSinging;
        if (!hasSung && !isSinging) {
          // set the current user to be singing
          value.isSinging = true;
          userFound = true;
          if (lastSinger) {
            // if there was a previous singer, mark them as having sung and no longer singing
            lastSinger.hasSung = true;
            lastSinger.isSinging = false;
            console.log(`User <@${lastSinger.userId}> has sung`);
          }
          // update lastSinger to be the current user
          lastSinger = { ...value, userId };
          break;
        } else if (isSinging) {
          // set the current user to have sung and is no longer singing
          value.hasSung = true;
          value.isSinging = false;
          userFound = true;
          // update lastSinger to be the current user
          lastSinger = { ...value, userId };
          break;
        }
      }
    }

    // if no one was found to sing, respond to the interaction
    if (!userFound) {
      if (priorityQueue.size > 0) {
        // Check if last user has isSinging true
        const lastPriorityUser = [...priorityQueue.values()].pop();
        if (lastPriorityUser.isSinging) {
          lastPriorityUser.isSinging = false;
          lastPriorityUser.hasSung = true;
        }
      }

      if (requeueQueue.size > 0) {
        // Check if last user has isSinging true
        const lastRequeueUser = [...requeueQueue.values()].pop();
        if (lastRequeueUser.isSinging) {
          lastRequeueUser.isSinging = false;
          lastRequeueUser.hasSung = true;
        }
      }
      await interaction.reply({
        content: "Everyone has already sung!",
        ephemeral: true,
      });
    }

    try {
      await interaction.reply({
        content: `The next singer is <@${lastSinger.userId}>.`,
        ephemeral: true,
      });
    } catch (error) {}

    // Update the embed
    priorityField.value = "";
    requeueField.value = "";

    for (const [key, value] of priorityQueue.entries()) {
      const userId = key.split("-")[1];
      const hasSung = value.hasSung;
      const isSinging = value.isSinging;
      const userLine = `${hasSung ? "~~" : ""}<@${userId}>${
        hasSung ? "~~" : ""
      }${isSinging ? " 🎤" : ""}`;
      priorityField.value += `\n${userLine}`;
    }

    for (const [key, value] of requeueQueue.entries()) {
      const userId = key.split("-")[1];
      const hasSung = value.hasSung;
      const isSinging = value.isSinging;
      const userLine = `${hasSung ? "~~" : ""}<@${userId}>${
        hasSung ? "~~" : ""
      }${isSinging ? " 🎤" : ""}`;
      requeueField.value += `\n${userLine}`;
    }

    const embed = karaokeEmbed.embeds[0];
    embed.fields[0].value = priorityField.value || "No singers in queue!";
    embed.fields[1].value = requeueField.value || "No singers in queue!";

    await karaokeEmbed.edit({ embeds: [embed] });
  }
}

export default KaraokeQueueButton;
