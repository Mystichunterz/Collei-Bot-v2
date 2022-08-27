import Event from "../classes/Event.js"

class MessageCreate extends Event {
	async run(message) {
		if (message.content.startsWith(this.client.prefix)) {	
			let command = this.client.getCommand(message.content.replace(this.client.prefix, ""))
			if (!command) return

			if (command.cooldown){
				let cooldownUntil = this.client.cooldowns.get(`${command.name}-${message.author.id}`)
				if (cooldownUntil && cooldownUntil > Date.now())
					return message.reply(`Command is still on cooldown for ${Math.ceil((cooldownUntil - Date.now())/1000)} more seconds`)

				this.client.cooldowns.set(`${command.name}-${message.author.id}`, new Date().valueOf() + command.cooldown)
			}

			await command.run(message)
		}	
		
		switch (message.content.toLowerCase()){

			case "collei, tell us a joke.":
			case "collei, tell us a joke":
			case "collei tell us a joke":
				let jokeNumber = Math.floor(Math.random() * 10) + 1
				let comedicTiming = async (ms) => await new Promise(r => setTimeout(r,ms))
				switch (jokeNumber) {
					case 1:
						message.reply(`Why is it unfortunate to drop your watch in a toilet?`)
						await comedicTiming(2000)
						return message.reply(`Cause it means you're bound to have a shitty time.`)
					case 2: 
						message.reply(`Why should you not trust a man who makes a mistake in an elevator?`)
						await comedicTiming(2000)
						return message.reply(`Because he is wrong on many levels.`)
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
						message.reply(`Sayu is always going fast. She doesn\'t even say goodbye. `)
						await comedicTiming(1000)
						return message.reply(`Not even a SAYU-NARA`)
					
				}

			case "hi collei!":
			case "hi collei":
			case "hello collei!":
			case "hello collei":
				return message.reply(`Hello ${message.author.username}!`)
			
			case "bye collei!":
			case "bye collei":
				return message.reply(`Bye ${message.author.username}!`)		

			case "lore":
				return message.reply(`I ruled undisputed, Zykkard as my right hand, Mika as my left.  The problem with humanity was too much freedom and leisure time - I removed both. I dispensed great justice and retribution - in the name of peace. I created an eternal empire ruled with imperious malice, lest humanity reverted to its primal primitive habits. There was no love, except love for me. There was no art, no literature, no science. Total domination. Unlimited power. Unlimited cookies. Who could stand in my way, who would dare. As monarch of Teyvat. As Warden of history. As god emperor of time.`)

			case "renvi lore":
				return message.reply(`A Renvi sits inside a Renvi. Is the Renvi made of Renvi? Or is Renvi made of Renvi? Renvi screams for Renvi does not know.`)
			
			case "slug lore":
				return message.reply(`There was once a pale woman with pink hair, who was very lonely. All things must meet this woman, so they shunned her. She took an axe and split herself in two, right down the middle. So she would always have a friend.`)
			
			case "potato lore":
				return message.reply(`Once a potato grew. The potato smiled. It was a potato. Then it got turned to fries.`)

			case "noodle lore":
				return message.reply(`<:1yaefish:1001425625610981446> Hmmmmm\n + Noodle started out as a small wriggly noodle. He believed he could get stronger, and then he ate some pasta sauce. He is still small and wriggly but for some reason he can use a computer and draw godlike. Please nerf the noodle.`)

			case "silver lore":
				return message.reply(`The sussy Silverpog repeated it once more. “DIN DJARIN!” And all fell silent in the voice chat. She hadnt left it in over a day and the server was worried for her sanity. Oh well, better to just leave her alone.`)

			case "akagi lore":
				return message.reply(`Akagi, a very valuable member to TGP, he's fed on love and grass. If anything should happen, we are all to evacuate in our loyal Aircraft Carrier.`)

			case "karezi lore":
				return message.reply(`Collei forgot her meds\nSo Karezi stopped her\nA line about Childe\nAn ending line`)

			case "11th lore":
				return message.reply(`Blood. Blood dripped down the mighty 11th Fatui Harbinger, all those that had done her wrong were gone.\nFinally, she had slain her way up to Event head.\nHer efforts were greatly recognized; this was all the proof she needed to earn her spot.\nThat didn't mean she would stop there.\nThere were still so many. How could she rest until she destroyed them all.\nNo, she's still out there. And if you piss her off, she's coming for you.`)
		}
	}
}

export default MessageCreate
