exports.run =  async(client, msg, args) => {
    msg.channel.send(`Your current Ping is at a Whopping \`${client.ws.ping}\` ms`);
}