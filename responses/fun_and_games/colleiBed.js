import Response from "../../classes/Response.js";

class colleiBed extends Response {
  aliases = ["Collei, flip a coin"];
  async run(message) {
    console.log("working");
    let jokeNumber = Math.floor(Math.random() * 2) + 1;
    message.reply("The gods flip a coin and the world holds its breath.");
    let comedicTiming = async (ms) =>
      await new Promise((r) => setTimeout(r, ms));
    message.reply("On one side greatness, the other madness.");
    switch (jokeNumber) {
      case 1:
        message.reply("Heads.");
        break;
      case 2:
        message.reply("Tails.");
        break;
    }
  }
}

export default colleiBed;
