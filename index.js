/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("index.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import Bot from "./classes/Bot.js";

//----------------------
//  config
//----------------------
const client = new Bot({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  prefix: "c2.",
});

//----------------------
//  main
//----------------------
client.loadEvents();
client.loadCommands();
client.loadResponses();
client.loadButtons();

client.on("messageCreate", (message) => {
  if (message.content == "Hello!") {
    message.reply("hi");
  }
});

// client.on("messageCreate", (message) => {
//     if (message.content == "hi"){
//         message.reply("Hello!")
//     }
// });

client.on("messageCreate", (message) => {
  let legacyRoulette = Math.floor(Math.random() * 10) + 1;
  console.log(legacyRoulette);
  if (legacyRoulette == 9) {
    message.reply(
      "What is this brief mortal life, if not the pursuit of legacy?"
    );
  }
});

client.start(process.env.TOKEN);
