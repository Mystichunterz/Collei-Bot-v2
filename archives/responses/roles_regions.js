import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

class roles_regions extends Response {
  aliases = ["summon-roles-regions"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("Roles | Regions")
      .setDescription(
        "Select the Genshin server region(s) you play on!\n\nThis role grants you access to the respective region Co-Op channels, where you can play with others from the same region.\n\n🍔-<@&976216788754923550>\n🍝-<@&976216862671126540>\n🍜-<@&976217499303542804>\n🧋-<@&976217679675396106>\n🍵-<@&976217797065596938>"
      )
      .setColor("#00a368");
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-976216788754923550")
        .setStyle("Primary")
        .setLabel("NA")
        .setEmoji("🍔"),
      new ButtonBuilder()
        .setCustomId("role-976216862671126540")
        .setStyle("Primary")
        .setLabel("EU")
        .setEmoji("🍝"),
      new ButtonBuilder()
        .setCustomId("role-976217499303542804")
        .setStyle("Primary")
        .setLabel("ASIA")
        .setEmoji("🍜"),
      new ButtonBuilder()
        .setCustomId("role-976217679675396106")
        .setStyle("Primary")
        .setLabel("TK-HK-MO")
        .setEmoji("🧋"),
      new ButtonBuilder()
        .setCustomId("role-976217797065596938")
        .setStyle("Primary")
        .setLabel("CN")
        .setEmoji("🍵")
    );
    message.channel.send({ embeds: [newEmbed], components: [buttons] });
  }
}

export default roles_regions;
