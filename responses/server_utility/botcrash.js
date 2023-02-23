import Response from "../../classes/Response.js";

class botcrash extends Response {
  aliases = ["die"];
  ownerOnly = true;
  async run(message) {
    message.reply(`Dying...`);
    throw new Error("Intentional error for testing purposes");
    message.reply(`Well this is awkward.`);
  }
}

export default botcrash;
