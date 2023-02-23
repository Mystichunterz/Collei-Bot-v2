const Discord = require('discord.js');
const client = new Discord.Client();

// Set up some variables to keep track of the queues
let priorityQueue = [];
let requeue = [];
let nowSinging = null;

// Create a new Discord message embed object for the queue
const queueEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Karaoke Queue')
    .setDescription('Here is the current queue of karaoke singers:')
    .addFields(
        { name: 'Priority Queue', value: 'No singers in queue', inline: true },
        { name: 'Requeue', value: 'No singers in queue', inline: true },
    )
    .setFooter('React with 👍 to join the priority queue, or 👎 to join the requeue.');

// Send the embed to the channel where the command was issued
let queueMessage = null;

client.on('message', message => {
    if (message.content === '!startqueue') {
        message.channel.send(queueEmbed)
            .then(msg => {
                // Save the message object so we can edit it later
                queueMessage = msg;

                // Add the join queue reaction buttons
                queueMessage.react('👍')
                    .then(() => queueMessage.react('👎'))
                    .then(() => queueMessage.react('🎤'))
                    .then(() => queueMessage.react('👋'))
                    .catch(() => console.error('One of the emojis failed to react.'));
            });
    }
});

// Add event listener for the reaction buttons
client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (user.bot) return;

    if (reaction.message.id === queueMessage.id) {
        if (reaction.emoji.name === '👍') {
            if (!priorityQueue.includes(user.id)) {
                priorityQueue.push(user.id);
                let field = queueEmbed.fields.find(field => field.name === 'Priority Queue');
                field.value = priorityQueue.map(id => `<@${id}>`).join('\n') || 'No singers in queue';
                queueMessage.edit(queueEmbed);
            }
            else {
                user.send('You are already in the priority queue.');
            }
        }
        else if (reaction.emoji.name === '👎') {
            if (!priorityQueue.includes(user.id) && !requeue.includes(user.id)) {
                requeue.push(user.id);
                let field = queueEmbed.fields.find(field => field.name === 'Requeue');
                field.value = requeue.map(id => `<@${id}>`).join('\n') || 'No singers in queue';
                queueMessage.edit(queueEmbed);
            }
            else {
                user.send('You are already in the queue.');
            }
        }
        else if (reaction.emoji.name === '🎤' && user.hasPermission('ADMINISTRATOR')) {
            if (priorityQueue.length > 0) {
                nowSinging = priorityQueue.shift();
            }
            else if (requeue.length > 0) {
                nowSinging = requeue.shift();
            }
            else {
                user.send('No singers in the queue.');
                return;
            }

            let priorityField = queueEmbed.fields.find(field => field.name === 'Priority Queue');
            let requeueField = queueEmbed.fields.find(field => field.name === 'Requeue');

            priorityField.value = priorityQueue.map(id => `<@${id}>`).join('\n') || 'No singers in queue';
            requeueField.value = requeue.map(id => `<@${id}>`).join('\n') || 'No singers in queue';

            let nowSingingField = queueEmbed.fields.find(field => field.value.includes(`<@${nowSinging}>`));
            nowSingingField.value = nowSingingField.value.replace(`<@${nowSinging}>`, `~~<@${nowSinging}>~~ Now singing`);

            queueMessage.edit(queueEmbed);
        }
        else if (reaction.emoji.name === '👋' && user.hasPermission('ADMINISTRATOR')) {
            if (nowSinging === null) {
                user.send('No singer is currently marked as "Now singing".');
                return;
            }

            let nowSingingField = queueEmbed.fields.find(field => field.value.includes(`<@${nowSinging}>`));
            nowSingingField.value = nowSingingField.value.replace(`~~<@${nowSinging}>~~ Now singing`, `<@${nowSinging}>`);
            nowSinging = null;

            queueMessage.edit(queueEmbed);
        }
        else {
            return;
        }
    }
});

// Add event listener for when a user removes their reaction
client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (user.bot) return;

    if (reaction.message.id === queueMessage.id) {
        if (reaction.emoji.name === '👍') {
            if (priorityQueue.includes(user.id)) {
                priorityQueue = priorityQueue.filter(id => id !== user.id);
                let field = queueEmbed.fields.find(field => field.name === 'Priority Queue');
                field.value = priorityQueue.map(id => `<@${id}>`).join('\n') || 'No singers in queue';
                queueMessage.edit(queueEmbed);
            }
        }
        else if (reaction.emoji.name === '👎') {
            if (requeue.includes(user.id)) {
                requeue = requeue.filter(id => id !== user.id);
                let field = queueEmbed.fields.find(field => field.name === 'Requeue');
                field.value = requeue.map(id => `<@${id}>`).join('\n') || 'No singers in queue';
                queueMessage.edit(queueEmbed);
            }
        }
    }
});

// Add event listener for when the queue message is deleted
client.on('messageDelete', deletedMessage => {
    if (deletedMessage.id === queueMessage.id) {
        queueMessage = null;
    }
});

client.login('YOUR_TOKEN_HERE');
