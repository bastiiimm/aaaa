module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}...  ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No hay música en la cola después de la actual ${message.author}...❌`);

        await queue.shuffle();

        return message.channel.send(`Cola barajada **${queue.tracks.length}** song(s) ! ✅`);
    },
};