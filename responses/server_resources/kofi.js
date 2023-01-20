/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("responses > server_resources > kofi.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class kofi extends Response {
  aliases = ["c.kofi"];
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ✦・Our Kofi・✦ »»")
      .setURL("https://ko-fi.com/genshinplace")
      .setColor("#00a368");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default kofi;
