import { Client, GatewayIntentBits } from "discord.js"
import "dotenv/config"
import Bot from "./classes/Bot.js"

const client = new Bot({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
	prefix: "c2.",
})

client.loadEvents()
client.loadCommands()
client.loadResponses()

client.start(process.env.TOKEN)
