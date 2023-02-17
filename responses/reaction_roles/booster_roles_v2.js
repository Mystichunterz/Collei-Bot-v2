import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

class roles_boosters_v2 extends Response {
  aliases = ["summon-roles-boosters-v2"];
  ownerOnly = true;
  async run(message) {
    const boosterEmbed = new EmbedBuilder()
      .setTitle("Roles | Booster Exclusive Vanity Colours")
      .setDescription(
        "Thank you for boosting the Sumeru Akademiya | TGP discord server! Customise your name colour with these roles - a small thank you from us.\n\n<:2element_pyro:984987720906592276> | <@&959708760144752680>\n\n<:2element_hydro:986055715951116340> | <@&959708761784746044>\n\n<:2element_anemo:986055777028562994> | <@&959701887144308758>\n\n<:2element_electro:986055789443686450> | <@&959708760610324510>\n\n<:2element_dendro:986055806967509084> | <@&959708761000382474>\n\n<:2element_cryo:986055828559773726> | <@&959708762564870154>\n\n<:2element_geo:986055859329171539> | <@&959708762128654446>\n\n<:2Element_Sakura:959711805079433266> | <@&959708761403048006>"
      )
      .setColor("#00a368");

      const roles1 = new ActionRowBuilder().addComponents([
        new ButtonBuilder()
          .setCustomId("role-969890981182849105")
          .setStyle("Primary")
          .setLabel("Timmie's Pigeon Red")
          .setEmoji("<:PigeonRed:1075979554688073728>"),
        new ButtonBuilder()
          .setCustomId("role-969891212653908008")
          .setStyle("Primary")
          .setLabel("Polandball Red")
          .setEmoji("<:PolandballRed:1075979579853910016>"),
        new ButtonBuilder()
          .setCustomId("role-969891135881359380")
          .setStyle("Primary")
          .setLabel("“Rising Sun” Red")
          .setEmoji("<:SunriseRed:1075979586208268319>"),
        new ButtonBuilder()
          .setCustomId("role-969891447463612460")
          .setStyle("Primary")
          .setLabel("Yoimiya Orange")
          .setEmoji("<:NaganoharaOrange:1075980302641537105>"),
        new ButtonBuilder()
          .setCustomId("role-969891655006183484")
          .setStyle("Primary")
          .setLabel("Susbedo Yellow")
          .setEmoji("<:SusbedoYellow:1075980465988714548>"),
      ]);
      

    const roles2 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969891171281301524")
        .setStyle("Primary")
        .setLabel("Dandelion Wine Yellow")
        .setEmoji("<:DandelionWineYellow:1075979566088196197>"),
      new ButtonBuilder()
        .setCustomId("role-969891990651154483")
        .setStyle("Primary")
        .setLabel("Carmen Dei Green")
        .setEmoji("<:asteCarmenDeiGreen:1075979559108882432>"),
      new ButtonBuilder()
        .setCustomId("role-969892111807840286")
        .setStyle("Primary")
        .setLabel("Genshrek Green")
        .setEmoji("<:asteGenshrekGreen:1075980297901973584>"),
      new ButtonBuilder()
        .setCustomId("role-969892282792824865")
        .setStyle("Primary")
        .setLabel("Grass Green")
        .setEmoji("<:TouchgrassGreen:1075980468526256190>"),
      new ButtonBuilder()
        .setCustomId("role-969892522581168149")
        .setStyle("Primary")
        .setLabel("Yaksha's Teal")
        .setEmoji("<:asteYakshasTeal:1075979589727289374>"),
    ]);

    const roles3 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969892418914758716")
        .setStyle("Primary")
        .setLabel("Drunken Bard Teal")
        .setEmoji("<:DrunkenBardTeal:1075979567417802853>"),
      new ButtonBuilder()
        .setCustomId("role-969896958028288061")
        .setStyle("Primary")
        .setLabel("Alberich Teal")
        .setEmoji("<:asteAlberichTeal:1075979557749932062>"),
      new ButtonBuilder()
        .setCustomId("role-969897044791685160")
        .setStyle("Primary")
        .setLabel("Kamisato Blue")
        .setEmoji("<:KamisatoBlue:1075980300573741066>"),
      new ButtonBuilder()
        .setCustomId("role-969897188937314334")
        .setStyle("Primary")
        .setLabel("Cocogoat Blue")
        .setEmoji("<:CocogoatBlue:1075979563504504852>"),
      new ButtonBuilder()
        .setCustomId("role-969897291605479454")
        .setStyle("Primary")
        .setLabel("Spindrift Knight Blue")
        .setEmoji("<:SpindriftKnightBlue:1075980331418656828>"),
    ]);

    const roles4 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969897364548648960")
        .setStyle("Primary")
        .setLabel("Fandango Indigo")
        .setEmoji("<:FandangIndigo:1075979568948711584>"),
      new ButtonBuilder()
        .setCustomId("role-969891804512157696")
        .setStyle("Primary")
        .setLabel("Periwinkle")
        .setEmoji("<:astePeriwinkle:1075984727430922310>"),
      new ButtonBuilder()
        .setCustomId("role-969891970568835082")
        .setStyle("Primary")
        .setLabel("QiqiFallen Periwinkle")
        .setEmoji("<:QiqiPurple:1075980326477766687>"),
      new ButtonBuilder()
        .setCustomId("role-969892206297108520")
        .setStyle("Primary")
        .setLabel("Prinzessin Purple")
        .setEmoji("<:asteFischlPurple:1075980295691583560>"),
      new ButtonBuilder()
        .setCustomId("role-969892311620259851")
        .setStyle("Primary")
        .setLabel("Imperatrix Purple")
        .setEmoji("<:asteImperatrixPurple:1075980299273506887>"),
    ]);

    const roles5 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969892494366097428")
        .setStyle("Primary")
        .setLabel("Catgirl Purple")
        .setEmoji("<:asteCatgirlPurple:1075979561063415858>"),
      new ButtonBuilder()
        .setCustomId("role-969892602528821269")
        .setStyle("Primary")
        .setLabel("Sakura Pink")
        .setEmoji("<:SakuraPink:1075980328872726588>"),
      new ButtonBuilder()
        .setCustomId("role-969892759387398184")
        .setStyle("Primary")
        .setLabel("Shrine Maiden Pink")
        .setEmoji("<:ShrineMaidenPink:1075980330042937445>"),
      new ButtonBuilder()
        .setCustomId("role-1076014534503972914")
        .setStyle("Primary")
        .setLabel("Yanfei Pink")
        .setEmoji("<:1yanfei_sigh:959780415504277584>"),
      new ButtonBuilder()
        .setCustomId("role-969895710432583740")
        .setStyle("Primary")
        .setLabel("Hilichurl Brown")
        .setEmoji("<:HilichurlBrown:1075979572190916739> "),
    ]);

    const roles6 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-969895283087536148")
        .setStyle("Primary")
        .setLabel("Lapis Dei Brown")
        .setEmoji("<:LapisDeiBrown:1075979575613460631> "),
      new ButtonBuilder()
        .setCustomId("role-969894816030806028")
        .setStyle("Primary")
        .setLabel("Hu Tao Brown")
        .setEmoji("<:ChoppingBoardBrown:1075979562040709151>"),
      new ButtonBuilder()
        .setCustomId("role-969894388962586685")
        .setStyle("Primary")
        .setLabel("Abyssal Black")
        .setEmoji("<:asteAbyssBlack:1075979556537761872>"),
      new ButtonBuilder()
        .setCustomId("role-969893671522684929")
        .setStyle("Primary")
        .setLabel("Signora Ash Gray")
        .setEmoji("<:SignoraGrey:1075979583293243523>"),
      new ButtonBuilder()
        .setCustomId("role-969893509140201482")
        .setStyle("Primary")
        .setLabel("Teppei Gray")
        .setEmoji("<:TeppeiGrey:1075980470015242280>")
    );

    const roles7 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-969890878011342848")
        .setStyle("Primary")
        .setLabel("Osmanthus Wine White")
        .setEmoji("<:OsmanthusWineWhite:1075980796470513716>")
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

export default roles_boosters_v2;
