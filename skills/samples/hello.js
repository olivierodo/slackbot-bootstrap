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
  d('Hello : options :', options);

  const setup = (bot, controller) => {
    d('Setup the Hello skill');
    controller.hears(options.intents, options.events.join(),  (bot, message) => {
      bot.reply(message, { text: 'Hi'});
    });
  }

  return {name , setup, options};
};
