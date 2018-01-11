var Botkit = require('botkit');

global.d = require('debug')('team-bot');

var controller = Botkit.slackbot({
  debug: 'production' !== process.env.NODE_ENV
});

var bot = controller.spawn({
    token: process.env.SLACK_TOKEN,
    retry : 10
}).startRTM();

bot.controller = controller;
bot.skills = [
  require('./skills/samples/hello')(), // Default setup.
  //require('./skills/samples/hello')({intents : ['hi']}), // Override the options
];

bot.skills.forEach(_ => _.setup.apply(this, [bot]));

controller.on('rtm_close', function(bot, err) {
 console.log(err);
 process.exit(1);
});
