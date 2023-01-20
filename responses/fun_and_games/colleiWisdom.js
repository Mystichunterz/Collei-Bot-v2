import Response from "../../classes/Response.js";

class colleiWisdom extends Response {
  aliases = ["collei, what is your wisdom?"];
  cooldown = 5 * 1000;
  async run(message) {
    let comedicTiming = async (ms) =>
      await new Promise((r) => setTimeout(r, ms));
    message.reply("Brain");
    await comedicTiming(2000);
    message.reply("smooth.");
    await comedicTiming(2000);
    message.reply("Thoughts");
    await comedicTiming(2000);
    message.reply("slide.");
    await comedicTiming(2000);
  }
}

export default colleiWisdom;
