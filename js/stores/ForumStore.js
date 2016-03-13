//How do I create a real application that goes back to the server for data?
//Is this using websocket? and does it need to?

var EventEmitter = require('../eventemitter')
var ForumDispatcher = require('../dispatcher/ForumDispatcher')
var ForumConstants = require('../ForumConstants')

var answerData = {
				"1":{
					body:"Isn't that about time travel?",
					correct:false
				},

				"2":{
					body:"Isn't that about time travel again?",
					correct:false
				},

				"3":{
					body:"Isn't that about time travel and again?",
					correct:false
				},

			};

var ForumStore = new EventEmitter();

ForumStore.emitChange = function(){
	this.emit('change');
};

ForumStore.addChangeListener = function(listener){
	this.on('change', listener)
};

ForumStore.getAnswers = function(){
  //this could be a call to get the real data.
  //an ajax call appears to be the way to do this
  return answerData;
};

ForumStore.addAnswers = function(newAnswer){
	answerData[Object.keys(answerData).length + 1] = {
		body: newAnswer,
		correct:false
	};
	this.emitChange();
};

ForumStore.markAsCorrect = function(id){
	//set all others to false
	for (var key in answerData){
		answerData[key].correct = false;
	}
	answerData[id].correct = true;

	this.emitChange();
};

ForumDispatcher.register(function(action){
	switch (action.actionType) {

		case ForumConstants.FORUM_ANSWER_ADDED:{
			ForumStore.addAnswers(action.newAnswer);
			break;
		}

		case ForumConstants.FORUM_ANSWER_MARKED_CORRECT:{
			ForumStore.markAsCorrect(action.id);
			break;
		}
	}

	console.log('received an action');
	console.log(action);
});


module.exports = ForumStore;
