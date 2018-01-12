var Botkit = require('botkit');

global.d = require('debug')('team-bot');

var controller = Botkit.slackbot({
  debug: 'production' !== process.env.NODE_ENV
});

var bot = controller.spawn({
    token: process.env.SLACK_TOKEN,
    retry : 10
}).startRTM();

bot.skills = [
  require('./skills/samples/hello')(), // Default setup.
  //require('./skills/samples/hello')({intents : ['hi']}), // Override the options to trigger the skill on the "Hi" word
];

d('Setting up the skills');
bot.skills.forEach(_ => _.setup.apply(null, [bot, controller]));

controller.on('rtm_close', function(bot, err) {
 console.log(err);
 process.exit(1);
});
