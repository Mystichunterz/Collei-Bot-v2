import Command from "../classes/Command.js"
import Discord, { EmbedBuilder } from "discord.js"

class Ping extends Command {
	async run(message) {
		message.reply("Pong. Calculating ping...")
        let dramaticTiming = async (ms) => await new Promise(r => setTimeout(r,ms))
        await dramaticTiming(2000)

        const newEmbed = new EmbedBuilder()
            .setColor('#00a368')
            .setTitle(`Colleiv.2 Ping Report`)
            .setDescription(`**Bot Latency:** ${Date.now() - message.createdTimestamp - 2000}ms. \n**API Latency:** ${this.client.ws.ping}ms.`)
            .setFooter({text: "Sumeru Akademiya | TGP"})
            .setTimestamp()
        
        message.reply({
            embeds: [
                newEmbed
            ]
        })
	}
}

export default Ping