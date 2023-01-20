import { EmbedBuilder, Guild } from "discord.js";
import Response from "../../classes/Response.js";

class testing extends Response {
  aliases = ["testing"];
  cooldown = 5 * 1000;
  ownerOnly = true;
  async run(message) {
    let tributes = [
      "448795804153675779",
      "1010061827612352592",
      "506569585428791296",
      "846499373604798494",
      "711588486456541207",
      "372847488102694923",
      "302253160309850122",
      "271576557619773440",
      "950240936456257557",
    ];

    var j = 0;
    for (let i = 0; i < 9; i++) {
      if (i % 2 == 0) {
        j++;
      }
      await message.guild.members.fetch();
      var tribute = await this.client.users.cache.get(`${tributes[i]}`);
      console.log(tributes[i]);
      console.log(tribute);
      var newEmbed = new EmbedBuilder()
        .setTitle("Hunger Games")
        .setDescription(
          `Tribute Added\n\n${tribute.username}#${tribute.discriminator} has been added to **District ${j}**`
        )
        .setThumbnail(tribute.avatarURL())
        .setColor("#00a368")
        .setFooter({ text: `Tributes: ${i + 1}/24` });

      message.channel.send({
        embeds: [newEmbed],
      });
    }
  }
}

export default testing;
