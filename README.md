# Slackbot Team Bootstrap
 A slackbot bootstrap base on Botkit. Related article : ...
 
 This project is a simple starter to create a custom slackbot for your team.
 
### Setup

Node version  : 8.9.0

The project is based on Botkit, i invite you to check the documentation to understand how you can new feature to your bot.

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

It's very simple when you say *hello*  to your bot he/she will reply *hi*.

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
    intents : ['hi']
  })
]
```
#### hello(options)
The first argument has to be an `options` object. The `options` object is optional

* `intents` - *Array \<string|regex\>* - Words or sentence that trigger your skills.
* `event` - *Array* - Receive Events, possible values (direct_message, direct_mention, mention, ambient). See [Bootkit documentation](https://github.com/howdyai/botkit/blob/master/docs/readme-slack.md#L386)
* `help` - *String* - Advice to share with the user about how to use this skill.

List of the different skills available :

 * [Debug](#) - Skills help you to get some log information.

### Debugging

There is one way to debug the operation of the bot:

* Launch the node process like `NODE_DEBUG=team-bot node node.js`

