import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

class roles_LOTD extends Response {
  aliases = ["summon-roles-lotd"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("Roles | Lore of the Day")
      .setDescription(
        "Select this role to be pinged when daily lore-of-the-day posts are created! You can view previous lore-of-the-day posts in <#975196470150066227>.\n\n<:8Item_Heros_Wit:997706146989219931> - <@&999532997323792405>"
      )
      .setColor("#00a368");

    const roles3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-999532997323792405")
        .setStyle("Primary")
        .setLabel("LOTD")
        .setEmoji("<:8Item_Heros_Wit:997706146989219931>")
    );

    message.channel.send({ embeds: [newEmbed], components: [roles3] });
  }
}

export default roles_LOTD;
