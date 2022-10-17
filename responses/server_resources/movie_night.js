import Response from "../../classes/Response.js"
import { EmbedBuilder } from "discord.js"

class movie_night extends Response {
	aliases = ["tamnot-dehna3"]
	async run(message) {
        const newEmbed = new EmbedBuilder()
            .setTitle("«« ━━ ✦・Movie Night・✦ ━━ »»")
            .setDescription("━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTravellers! We're hosting our very first movie night - streaming 3 MCU movies back-to-back!\n\nThe Movie Night will be held in <#996226720564793485>. Do join us if you're interested! \n\n``` Movie Triathlon ```\n**The Avengers (2012)**\n\n> Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.\n\n<:9_util_arrow:1008997496434982922> Movie Runtime: 2 Hours 23 Minutes\n\n**Avengers: Infinity War (2018)**\n\n> The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.\n\n<:9_util_arrow:1008997496434982922> Movie Runtime: 2 Hours 29 Minutes\n\n**Avengers: Endgame (2019)**\n\n> After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.\n\n<:9_util_arrow:1008997496434982922> Movie Runtime: 3 Hours 2 Minutes\n\n__**Date & Time**__\n<t:1665878400:F>, <t:1665878400:R>\n\n**Host**: <@959664918506930226>")
            .setColor("#00a368")
            .setImage("https://cdn.discordapp.com/attachments/959712273373478962/1030644218676383744/p_avengersendgame_19751_e14a0104.webp")
            .setTimestamp()

        message.channel.send("<@&986046143496617994>")

		message.channel.send({ embeds: [newEmbed] })

	}
}

export default movie_night