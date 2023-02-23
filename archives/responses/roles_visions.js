import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

class roles_pings_visions extends Response {
  aliases = ["summon-roles-visions"];
  devOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("Roles | Vanity Colours: Visions")
      .setDescription(
        `"The gods goad us on with the promise of their seven treasures. Rewards for the worthy. The doorway to divinity."\n\n - Dainsleif, Teyvat Chapter Storyline Preview: Travail\n\n<:2element_pyro:984987720906592276> | <@&959708760144752680>\n\n<:2element_hydro:986055715951116340> | <@&959708761784746044>\n\n<:2element_anemo:986055777028562994> | <@&959701887144308758>\n\n<:2element_electro:986055789443686450> | <@&959708760610324510>\n\n<:2element_dendro:986055806967509084> | <@&959708761000382474>\n\n<:2element_cryo:986055828559773726> | <@&959708762564870154>\n\n<:2element_geo:986055859329171539> | <@&959708762128654446>\n\n<:2Element_Sakura:959711805079433266> | <@&959708761403048006>`
      )
      .setColor("#00a368");
    const roles4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-959708760144752680")
        .setStyle("Primary")
        .setEmoji("<:2element_pyro:984987720906592276>"),
      new ButtonBuilder()
        .setCustomId("role-959708761784746044")
        .setStyle("Primary")
        .setEmoji("<:2element_hydro:986055715951116340>"),
      new ButtonBuilder()
        .setCustomId("role-959701887144308758")
        .setStyle("Primary")
        .setEmoji("<:2element_anemo:986055777028562994>"),
      new ButtonBuilder()
        .setCustomId("role-959708760610324510")
        .setStyle("Primary")
        .setEmoji("<:2element_electro:986055789443686450>")
    );

    const roles5 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-959708761000382474")
        .setStyle("Primary")
        .setEmoji("<:2element_dendro:986055806967509084>"),
      new ButtonBuilder()
        .setCustomId("role-959708762564870154")
        .setStyle("Primary")
        .setEmoji("<:2element_cryo:986055828559773726>"),
      new ButtonBuilder()
        .setCustomId("role-959708762128654446")
        .setStyle("Primary")
        .setEmoji("<:2element_geo:986055859329171539>"),
      new ButtonBuilder()
        .setCustomId("role-959708761403048006")
        .setStyle("Primary")
        .setEmoji("<:2Element_Sakura:959711805079433266>")
    );
    message.channel.send({ embeds: [newEmbed], components: [roles4, roles5] });
  }
}

export default roles_pings_visions;
