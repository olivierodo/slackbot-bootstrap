# Slackbot Team Bootstrap
A slackbot bootstrap base on Botkit. Related article : ...

This project is a simple starter to create a custom slackbot for your team.

### Setup

Node version  : 8.9.0

The project is based on Botkit, i invite you to check the documentation to understand the concept of the framework.

Install the dependencies

```
$ npm install
``` 

Start the bot

```
SLACK_TOKEN=<your slack token> npm start
```

### Sample Skill : Hello

As a sample, the Hello skills is setup.

It's a very simple skill, when you say *hello* to your bot, he/she will reply *hi*.

To enable a skill you need to add it to the `bot.skills` list (already enabled by default) :

```javascript
bot.skills = [
  require('./skills/samples/hello')()
]
```

You can add different options to the skills :

```javascript
bot.skills = [
  require('./skills/samples/hello')({
    intents : ['hi', 'Good morning'] // Now intead of react to the word Hello, the bot will react to the word Hi and Good morning
  })
]
```
#### hello(options)
The first argument has to be an `options` object. The `options` object is optional

* `intents` - *Array \<string|regex\>* - Words or sentence that trigger your skills.
* `event` - *Array<string>* - Receive Events, possible values (direct_message, direct_mention, mention, ambient). See [Bootkit documentation](https://github.com/howdyai/botkit/blob/master/docs/readme-slack.md#L386)
* `help` - *String* - Advice to share with the user about how to use this skill.

List of the different skills available :

 * [Debug](#) - Skills help you to get some log information.

### Debugging

To debug the operation of the bot use:

* Launch the node process like `NODE_DEBUG=team-bot node node.js`
* To add some debug logs use `d('My debug message')`

