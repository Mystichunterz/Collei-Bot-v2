import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

class roles_test extends Response {
  aliases = ["summon-roles-test"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("Roles | Test")
      .setDescription(
        "What is this brief, mortal life if not the pursuit of legacy?"
      )
      .setColor("#00a368");

    const roles3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-999532997323792405")
        .setStyle("Primary")
        .setLabel("Legacy")
        .setEmoji("<:asteUHMTEST4:1075973027868721192>")
    );

    message.channel.send({ embeds: [newEmbed], components: [roles3] });
  }
}

export default roles_test;
