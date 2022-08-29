import { cp } from "fs"
import Event from "../classes/Event.js"

class MessageCreate extends Event {
	async run(message) {
		if (message.content.startsWith(this.client.prefix)) {
			let command = this.client.getCommand(message.content.replace(this.client.prefix, ""))
			if (!command) return

			if (command.cooldown) {
				let cooldownUntil = this.client.cooldowns.get(`${command.name}-${message.author.id}`)
				if (cooldownUntil && cooldownUntil > Date.now())
					return message.reply(`Command is still on cooldown for ${Math.ceil((cooldownUntil - Date.now()) / 1000)} more seconds`)

				this.client.cooldowns.set(`${command.name}-${message.author.id}`, new Date().valueOf() + command.cooldown)
			}

			await command.run(message)
		} else {
			let response = this.client.getResponse(message.content.toLowerCase())
			if (!response) return

			if (response.cooldown) {
				let cooldownUntil = this.client.cooldowns.get(`${response.name}-${message.author.id}`)
				if (cooldownUntil && cooldownUntil > Date.now())
					return message.reply(`Response is still on cooldown for ${Math.ceil((cooldownUntil - Date.now()) / 1000)} more seconds`)

				this.client.cooldowns.set(`${response.name}-${message.author.id}`, new Date().valueOf() + response.cooldown)
			}

			await response.run(message)
		}
	}
}

export default MessageCreate
