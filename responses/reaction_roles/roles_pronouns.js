import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

class roles_pronouns extends Response {
  aliases = ["summon-roles-pronouns"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("Roles | Pronouns")
      .setDescription(
        'Select a preferred pronoun!\n\nFor pronouns not included in the list, please select "Ask Me!"\n\n♂️-<@&963103820005646386>\n♀️-<@&963103893766668339>\n🧸-<@&963103928097079306>\n❔-<@&973200552802545684>\n'
      )
      .setColor("#00a368");
    const roles1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-963103820005646386")
        .setStyle("Primary")
        .setLabel("He/Him")
        .setEmoji("♂️"),
      new ButtonBuilder()
        .setCustomId("role-963103893766668339")
        .setStyle("Primary")
        .setLabel("She/Her")
        .setEmoji("♀️"),
      new ButtonBuilder()
        .setCustomId("role-963103928097079306")
        .setStyle("Primary")
        .setLabel("They/Them")
        .setEmoji("🧸"),
      new ButtonBuilder()
        .setCustomId("role-973200552802545684")
        .setStyle("Primary")
        .setLabel("Ask Me!")
        .setEmoji("❔")
    );
    message.channel.send({ embeds: [newEmbed], components: [roles1] });
  }
}

export default roles_pronouns;
