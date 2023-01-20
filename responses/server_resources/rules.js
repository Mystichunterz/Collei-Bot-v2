/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("responses > server_resources > server_rules.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class rules extends Response {
  aliases = ["c.rules"];
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・TheGenshinPlace | Server Rules・✦ ━━ »»")
      .setDescription(
        "https://drive.google.com/file/d/1aAIjsYLTOnF7Y6GsLjzd3-PW70D0U6cE/view?usp=sharing"
      )
      .setColor("#00a368");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default rules;
