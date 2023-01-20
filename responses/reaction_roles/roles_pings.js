import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

class rules_pings extends Response {
  aliases = ["summon-roles-pings"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("Roles | Pings & Access")
      .setDescription(
        "Select a role to be pinged for certain announcements and events!\n\n📢 | <@&959723574669742131>\n\n> Important updates concerning the server, such as major additions and new projects!\n\n📊 | <@&986045530360664064>\n\n> Polls for server decisions where community feedback is appreciated!\n\n<:2intertwined_fate:969907892595617913> | <@&986045367403561020>\n\n> Version announcements and other related pings for Genshin Impact!\n\n<:2primPRIMARYogem:986051235163545671> | <@&975003487815471124>\n\n> Pings for free primogems, from version livestreams and miscellaneous giveaways!\n\n🎉 | <@&975003820973236234>\n\n> Pings for server events and giveaways!\n\n🎲 | <@&963003075063324673>\n\n> Pings for game nights hosted in the server!\n\n🍿 | <@&986046143496617994>\n\n> Pings for watch parties hosted in the server! Movie details will also be released prior to the watch party via this ping.\n\n🎵 | <@&986046081907445760>\n\n> Pings for spontaneous listening parties hosted in the server! Come hang out and listen to some tunes. "
      )
      .setColor("#00a368");

    const roles3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-959723574669742131")
        .setStyle("Primary")
        .setEmoji("📢"),
      new ButtonBuilder()
        .setCustomId("role-986045530360664064")
        .setStyle("Primary")
        .setEmoji("📊"),
      new ButtonBuilder()
        .setCustomId("role-986045367403561020")
        .setStyle("Primary")
        .setEmoji("<:2intertwined_fate:969907892595617913>"),
      new ButtonBuilder()
        .setCustomId("role-975003487815471124")
        .setStyle("Primary")
        .setEmoji("<:2primogem:986051235163545671>")
    );

    const roles4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-975003820973236234")
        .setStyle("Primary")
        .setEmoji("🎉"),
      new ButtonBuilder()
        .setCustomId("role-963003075063324673")
        .setStyle("Primary")
        .setEmoji("🎲"),
      new ButtonBuilder()
        .setCustomId("role-986046143496617994")
        .setStyle("Primary")
        .setEmoji("🍿"),
      new ButtonBuilder()
        .setCustomId("role-986046081907445760")
        .setStyle("Primary")
        .setEmoji("🎵")
    );

    message.channel.send({ embeds: [newEmbed], components: [roles3, roles4] });
  }
}

export default rules_pings;
