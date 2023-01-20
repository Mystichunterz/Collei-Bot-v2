import Response from "../../classes/Response.js";

class colleiJoke extends Response {
  aliases = [
    "collei, tell us a joke.",
    "collei, tell us a joke",
    "collei tell us a joke",
  ];
  async run(message) {
    let jokeNumber = Math.floor(Math.random() * 10) + 1;
    let comedicTiming = async (ms) =>
      await new Promise((r) => setTimeout(r, ms));
    switch (jokeNumber) {
      case 1:
        message.reply(`Why is it unfortunate to drop your watch in a toilet?`);
        await comedicTiming(2000);
        return message.reply(
          `Cause it means you're bound to have a shitty time.`
        );
      case 2:
        message.reply(
          `Why should you not trust a man who makes a mistake in an elevator?`
        );
        await comedicTiming(2000);
        return message.reply(`Because he is wrong on many levels.`);
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        message.reply(
          `Sayu is always going fast. She doesn\'t even say goodbye. `
        );
        await comedicTiming(1000);
        return message.reply(`Not even a SAYU-NARA`);
    }
  }
}

export default colleiJoke;
