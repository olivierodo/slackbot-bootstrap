const name  = 'hello';
const config = {
 help : '',
 intents : ["hello"],
 events : [
   'direct_message',
   'direct_mention',
   'mention'
 ]
};


module.exports = function(options) {
  options = Object.assign(config, options);
  const setup = (bot) => {
    bot.controller.hears(options.intents, options.events.join(),  (bot, message) => {
      bot.reply(message, { text: 'Hi'});
    });
  }

  return {name , setup, help : options.help};
};
