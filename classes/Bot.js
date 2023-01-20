/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("classes > Bot.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { Client, Collection } from "discord.js";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import fs from "fs";

//----------------------
//  config
//----------------------
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getFiles(directory) {
  return fs.readdirSync(directory).filter((file) => file.endsWith(".js"));
}

//----------------------
//  main
//----------------------
class Bot extends Client {
  constructor(args) {
    super(args);

    this.prefix = args.prefix;
    this.commands = new Collection();
    this.aliases = new Collection();
    this.cooldowns = new Collection();
    this.events = new Collection();
    this.responses = new Collection();
  }

  async start(token) {
    await super.login(token);
  }

  loadEvents() {
    getFiles(`${(this, __dirname)}/../events/`).forEach(
      async (eventFileName) => {
        const eventName = eventFileName.split(".js")[0];
        const Event = (
          await import(
            pathToFileURL(
              `${(this, __dirname)}/../events/${eventFileName}`
            ).toString()
          )
        ).default;
        const event = new Event(this, eventName);
        event.startListener();
        this.events.set(eventName, event);
      }
    );
  }

  loadCommands() {
    getFiles(`${(this, __dirname)}/../commands/`).forEach(
      async (commandFileName) => {
        const commandName = commandFileName.split(".js")[0];
        const Command = (
          await import(
            pathToFileURL(
              `${(this, __dirname)}/../commands/${commandFileName}`
            ).toString()
          )
        ).default;
        const command = new Command(this, commandName);
        this.commands.set(commandName, command);
        if (command.aliases)
          command.aliases.forEach((alias) =>
            this.aliases.set(alias, commandName)
          );
      }
    );
  }

  getCommand(commandName) {
    let command = this.commands.get(commandName);
    if (!command) command = this.commands.get(this.aliases.get(commandName));
    return command;
  }

  loadResponses() {
    getFiles(`${(this, __dirname)}/../responses/`).forEach(
      async (responseFileName) => {
        const responseName = responseFileName.split(".js")[0];
        const Response = (
          await import(
            pathToFileURL(
              `${(this, __dirname)}/../responses/${responseFileName}`
            ).toString()
          )
        ).default;
        const response = new Response(this, responseName);
        this.responses.set(responseName, response);
        if (response.aliases)
          response.aliases.forEach((alias) =>
            this.aliases.set(alias, responseName)
          );
      }
    );

    getFiles(`${(this, __dirname)}/../responses/lore/`).forEach(
      async (responseFileName) => {
        const responseName = responseFileName.split(".js")[0];
        const Response = (
          await import(
            pathToFileURL(
              `${(this, __dirname)}/../responses/lore/${responseFileName}`
            ).toString()
          )
        ).default;
        const response = new Response(this, responseName);
        this.responses.set(responseName, response);
        if (response.aliases)
          response.aliases.forEach((alias) =>
            this.aliases.set(alias, responseName)
          );
      }
    );

    getFiles(`${(this, __dirname)}/../responses/server_resources/`).forEach(
      async (responseFileName) => {
        const responseName = responseFileName.split(".js")[0];
        const Response = (
          await import(
            pathToFileURL(
              `${
                (this, __dirname)
              }/../responses/server_resources/${responseFileName}`
            ).toString()
          )
        ).default;
        const response = new Response(this, responseName);
        this.responses.set(responseName, response);
        if (response.aliases)
          response.aliases.forEach((alias) =>
            this.aliases.set(alias, responseName)
          );
      }
    );

    getFiles(
      `${(this, __dirname)}/../responses/server_resources_newsletters/`
    ).forEach(async (responseFileName) => {
      const responseName = responseFileName.split(".js")[0];
      const Response = (
        await import(
          pathToFileURL(
            `${
              (this, __dirname)
            }/../responses/server_resources_newsletters/${responseFileName}`
          ).toString()
        )
      ).default;
      const response = new Response(this, responseName);
      this.responses.set(responseName, response);
      if (response.aliases)
        response.aliases.forEach((alias) =>
          this.aliases.set(alias, responseName)
        );
    });

    getFiles(`${(this, __dirname)}/../responses/fun_and_games/`).forEach(
      async (responseFileName) => {
        const responseName = responseFileName.split(".js")[0];
        const Response = (
          await import(
            pathToFileURL(
              `${
                (this, __dirname)
              }/../responses/fun_and_games/${responseFileName}`
            ).toString()
          )
        ).default;
        const response = new Response(this, responseName);
        this.responses.set(responseName, response);
        if (response.aliases)
          response.aliases.forEach((alias) =>
            this.aliases.set(alias, responseName)
          );
      }
    );
  }

  getResponse(responseName) {
    let response = this.responses.get(this.aliases.get(responseName));
    return response;
  }
}

export default Bot;
