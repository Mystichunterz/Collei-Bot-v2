import Response from "../classes/Response.js"

class colleiUlt extends Response {
	aliases = ["collei ult"]
	async run(message) {
		let ultNumber = Math.floor(Math.random() * 10) + 1
        switch (ultNumber) {
            case 1:
                return message.reply(`I am Prometheus! And you- are just a god.`)
            case 2:
                return message.reply(`Welcome to my world!`)
            case 3:
                return message.reply(`I know EXACTLY where you are.`)
            case 4:
                return message.reply(`They will cower!`)
            case 5:
                return message.reply(`Scatter!`)
            case 6:
                return message.reply(`Open up the sky!`)
            case 7:
                return message.reply(`You will not kill my allies!`)
            case 8:
                return message.reply(`You want to play? Let's play.`)
            case 9:
                return message.reply(`You should run.`)
            case 10:
                return message.reply(`I am the hunter!`)
        }
	}
}

export default colleiUlt