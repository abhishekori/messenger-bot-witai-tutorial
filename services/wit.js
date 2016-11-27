'use strict'

var Config = require('../config')
var FB = require('../connectors/facebook')
var Wit = require('node-wit').Wit
var request = require('request')


var firstEntityValue = function (entities, entity) {
	var val = entities && entities[entity] &&
		Array.isArray(entities[entity]) &&
		entities[entity].length > 0 &&
		entities[entity][0].value

	if (!val) {
		return null
	}
	return typeof val === 'object' ? val.value : val
}


var actions = {
	send(request, response) {
		const {sessionId, context, entities} = request;
		const {text, quickreplies} = response;
		return new Promise(function(resolve, reject) {
			console.log('sending...', JSON.stringify(response));
			return resolve();
		});
	},
	getForecast({context, entities}) {
		return new Promise(function(resolve, reject) {
			var findItem = firstEntityValue(entities, 'findItem')
			if (findItem) {
				context.findItem = findItem; // we should call a weather API here
				delete context.missingFindItem;
			} else {
				context.missingFindItem = true;
				delete context.findItem;
			}
			return resolve(context);
		});
	},

}

// SETUP THE WIT.AI SERVICE
var getWit = function () {
	console.log('GRABBING WIT')
	return new Wit(Config.WIT_TOKEN, actions)
}

module.exports = {
	getWit: getWit,
}

// BOT TESTING MODE
if (require.main === module) {
	console.log('Bot testing mode!')
	var client = getWit()
	client.interactive()
}



