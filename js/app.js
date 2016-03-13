var React = require('react');
var ReactDom = require('react-dom');
var Forum = require('./components/Forum.react')
var ForumDispatcher = require('./dispatcher/ForumDispatcher.react')


ReactDOM.render(
	React.createElement(Forum, null),
	document.getElementById('forum')
);

var myemitter = new EventEmitter();

myemitter.on('STARTED_THE_APP', function(){
	console.log('started the app')
});

myemitter.on('STARTED_THE_APP', function(){
	console.log('started the app #2')
});

myemitter.emit('STARTED_THE_APP')

//register this function with the dispatcher
ForumDispatcher.register(function(action){
	console.log('received an action');
	console.log(action);
});

ForumDispatcher.register(function(action){
	if (action.actionType === "FORUM_ANSWER_MARKED_CORRECT"){
		console.log("I got it!!");
	}

	console.log(action.actionType);
});
