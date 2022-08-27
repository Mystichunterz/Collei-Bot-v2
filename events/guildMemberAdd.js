import Event from "../classes/Event.js"

import generateImage from "./util/generateImage.js"
import Discord, { EmbedBuilder } from "discord.js"
import fs from "fs"

const welcomeChannelId = "959490799446425681"
const generalChaosID = "960162599570386974"

class GuildMemberAdd extends Event {
    async run(member) {

        //Welcome Sequence
        const img = await generateImage(member)
        fs.writeFileSync('join.png', img, (err) => { console.error(err) })
        const image = new Discord.AttachmentBuilder('./join.png', 'join.png')

        const newEmbed = new EmbedBuilder()
            .setColor('#00a368')
            .setTitle(`Welcome to Sumeru Akademiya | TGP!`)
            .setDescription(`Hello, and welcome ${member.user.username + "#" + member.user.discriminator}! Please pick up some roles in <#959708759784038400>, and check out our <#963662189477113886> for exciting and fun events! We hope you enjoy your stay!
            
            欢迎 ${member.user.username + "#" + member.user.discriminator} 来到须弥教令院！你可以在 <#959708759784038400> 得到身分组，或在 <#963662189477113886> 参与精彩的活动。我们有 <#960573254689497209> 频道，但你当然可以在其他频道说话。`)
            .setImage(`attachment://join.png`)
            .setFooter(`Sumeru Akademiya | TGP`)
            .setTimestamp()

        member.guild.channels.cache.get(welcomeChannelId).send({
            embeds: [newEmbed], files : [image]
        })

        let memberRoulette = Math.floor(Math.random() * 10) + 1
        member.guild.channels.cache.get(generalChaosID).send(`${memberRoulette}`)
        if (memberRoulette == 9) {
            member.guild.channels.cache.get(generalChaosID).send(`Okay kids, we've got company. Pretend you all get along.`)
        } else if (memberRoulette == 8) {
            member.guild.channels.cache.get(generalChaosID).send(`https://tenor.com/view/mihoyo-genshin-genshin-impact-scaramouche-cross-arms-gif-23298841`)
        }
    }
}

export default GuildMemberAdd