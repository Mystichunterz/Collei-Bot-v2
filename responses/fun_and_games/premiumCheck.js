import { EmbedBuilder, Guild } from "discord.js";
import Response from "../../classes/Response.js";

class premiumCheck extends Response {
  aliases = ["premium check"];
  cooldown = 5 * 1000;
  async run(message) {
    await message.guild.members.fetch();
    var tribute = await this.guild.members.cache.get(`448795804153675779`);
    console.log(tribute);
    message.reply(
      `${message.author.username}! has boosted since ${tribute.premiumSinceTimestamp}`
    );
  }
}

export default premiumCheck;
