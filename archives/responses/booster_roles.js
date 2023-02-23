import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

class roles_boosters extends Response {
  aliases = ["summon-roles-boosters"];
  ownerOnly = true;
  async run(message) {
    const boosterEmbed = new EmbedBuilder()
      .setTitle("Roles | Booster Exclusive Vanity Colours")
      .setDescription(
        "Thank you for boosting the Sumeru Akademiya | TGP discord server! Customise your name colour with these roles - a small thank you from us."
      )
      .setColor("#00a368");

    const roles1 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969890981182849105")
        .setStyle("Primary")
        .setLabel("Timmie's Pigeon Red")
        .setEmoji("<:1timmie:970163515027517460>"),
      new ButtonBuilder()
        .setCustomId("role-969891212653908008")
        .setStyle("Primary")
        .setLabel("Polandball Red")
        .setEmoji("<:3PBboo:960997455334350928>"),
      new ButtonBuilder()
        .setCustomId("role-969891135881359380")
        .setStyle("Primary")
        .setLabel("“As the Morning Sun Rises” Red")
        .setEmoji("<:1kazuhahi:970166101554135100>"),
      new ButtonBuilder()
        .setCustomId("role-969891447463612460")
        .setStyle("Primary")
        .setLabel("Yoimiya Orange")
        .setEmoji("<:1yoimiya_thumb:959780537726271549>"),
      new ButtonBuilder()
        .setCustomId("role-969891655006183484")
        .setStyle("Primary")
        .setLabel("Susbedo Yellow")
        .setEmoji("<:1albedocold:970168684746272818>"),
    ]);

    const roles2 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969891171281301524")
        .setStyle("Primary")
        .setLabel("Dandelion Wine Yellow")
        .setEmoji("🌼"),
      new ButtonBuilder()
        .setCustomId("role-969891990651154483")
        .setStyle("Primary")
        .setLabel("Carmen Dei Green")
        .setEmoji("<:1venti_petals:959935245346549872>"),
      new ButtonBuilder()
        .setCustomId("role-969892111807840286")
        .setStyle("Primary")
        .setLabel("Genshrek Green")
        .setEmoji("<:3genshrek:961081697724686396>"),
      new ButtonBuilder()
        .setCustomId("role-969892282792824865")
        .setStyle("Primary")
        .setLabel("Grass Green")
        .setEmoji("<:4touchgrass:970174254769377280>"),
      new ButtonBuilder()
        .setCustomId("role-969892522581168149")
        .setStyle("Primary")
        .setLabel("Yaksha's Teal")
        .setEmoji("<:1xiao_dazed:961000122165116988>"),
    ]);

    const roles3 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969892418914758716")
        .setStyle("Primary")
        .setLabel("Drunken Bard Teal")
        .setEmoji("<:1venticheers:970174822581674014>"),
      new ButtonBuilder()
        .setCustomId("role-969896958028288061")
        .setStyle("Primary")
        .setLabel("Alberich Teal")
        .setEmoji("🔵"),
      new ButtonBuilder()
        .setCustomId("role-969897044791685160")
        .setStyle("Primary")
        .setLabel("Kamisato Blue")
        .setEmoji("<:7ayakablush:969903940177104896>"),
      new ButtonBuilder()
        .setCustomId("role-969897188937314334")
        .setStyle("Primary")
        .setLabel("Cocogoat Blue")
        .setEmoji("<:1ganyu_pray:961000139722485790>"),
      new ButtonBuilder()
        .setCustomId("role-969897291605479454")
        .setStyle("Primary")
        .setLabel("Spindrift Knight Blue")
        .setEmoji("<:1eulasneeze:970170493888000080>"),
    ]);

    const roles4 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969897364548648960")
        .setStyle("Primary")
        .setLabel("Fandango Indigo")
        .setEmoji("<:1scaramouche:970164738828927075>"),
      new ButtonBuilder()
        .setCustomId("role-969891804512157696")
        .setStyle("Primary")
        .setLabel("Periwinkle")
        .setEmoji("🟣"),
      new ButtonBuilder()
        .setCustomId("role-969891970568835082")
        .setStyle("Primary")
        .setLabel("QiqiFallen Periwinkle")
        .setEmoji("<:1qiqi:959781504723058718>"),
      new ButtonBuilder()
        .setCustomId("role-969892206297108520")
        .setStyle("Primary")
        .setLabel("Prinzessin Der Verurteilung Purple")
        .setEmoji("<:7fischlsmug:969906791720845372>"),
      new ButtonBuilder()
        .setCustomId("role-969892311620259851")
        .setStyle("Primary")
        .setLabel("Imperatrix Umberosa Purple")
        .setEmoji("<:1ei_snicker:960281099274182666>"),
    ]);

    const roles5 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969892494366097428")
        .setStyle("Primary")
        .setLabel("Catgirl Purple")
        .setEmoji("<:1dionahide:970171513510707240>"),
      new ButtonBuilder()
        .setCustomId("role-969892602528821269")
        .setStyle("Primary")
        .setLabel("Sakura Pink")
        .setEmoji("<:2Element_Sakura:959711805079433266>"),
      new ButtonBuilder()
        .setCustomId("role-969892759387398184")
        .setStyle("Primary")
        .setLabel("Shrine Maiden Pink")
        .setEmoji("<:1Yae_snicker:960280974472646698>"),
      new ButtonBuilder()
        .setCustomId("role-1065963926187163678")
        .setStyle("Primary")
        .setLabel("Yanfei Pink")
        .setEmoji("<:1yanfei_sigh:959780415504277584>"),
      new ButtonBuilder()
        .setCustomId("role-969895710432583740")
        .setStyle("Primary")
        .setLabel("Hilichurl Brown")
        .setEmoji("<:1hilichurlsleep:970165458072395796>"),
    ]);

    const roles6 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-969895283087536148")
        .setStyle("Primary")
        .setLabel("Lapis Dei Brown")
        .setEmoji("<:1zhongli_sigh:960281307542351932>"),
      new ButtonBuilder()
        .setCustomId("role-969894816030806028")
        .setStyle("Primary")
        .setLabel("Hu Tao Brown")
        .setEmoji("<:1hutao_snap:961000448230322256>"),
      new ButtonBuilder()
        .setCustomId("role-969894388962586685")
        .setStyle("Primary")
        .setLabel("Abyssal Black")
        .setEmoji("<:1abyssmage:970171969137950720>"),
      new ButtonBuilder()
        .setCustomId("role-969893671522684929")
        .setStyle("Primary")
        .setLabel("Signora Ash Gray")
        .setEmoji("<:1signora:970164794789330964>"),
      new ButtonBuilder()
        .setCustomId("role-969893509140201482")
        .setStyle("Primary")
        .setLabel("Teppei Gray")
        .setEmoji("<:4teppeighost:970173687825326091>")
    );

    const roles7 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-969890878011342848")
        .setStyle("Primary")
        .setLabel("Osmanthus Wine White")
        .setEmoji("<:1zhongli_sip:960281214378463252>")
    );

    message.channel.send({
      embeds: [boosterEmbed],
      components: [roles1, roles2, roles3, roles4, roles5],
    });

    message.channel.send({
      components: [roles6, roles7],
    });
  }
}

export default roles_boosters;
