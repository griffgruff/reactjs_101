var React = require('react')

var ForumHeader = require('./ForumHeader.react')
var ForumQuestion = require('./ForumQuestion.react')
var ForumAnswers = require('./ForumAnswers.react')
var ForumAddAnswerBox = require('./ForumAddAnswerBox.react')
var ForumActions = require('../actions/ForumActions')
var ForumStore = require('../stores/ForumStore')
var SimpleForm = require('./SimpleForm.react')

//use object literal syntax to create this
var Forum = React.createClass({

	getInitialState: function(){
		//how do I get this data?
		//well then flux might be the answer.
		return{
			//this will end up this.state.allAnswers =
			allAnswers: {
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

			}
		}
	},
	componentDidMount: function(){
		ForumStore.addChangeListener(this._onChange);
	},
	componentWillUnMount: function(){
		ForumStore.removeListener(this._onChange);
	},
	_onChange: function(){
		//ForumStore will broadcast all changes
		//this is the method to perform the update
		//only the store can call this method
		this.setState({ allAnswers: ForumStore.getAnswers()})
	},
	_onAddAnswer: function(answerText, mything){
		ForumActions.addNewAnswer(answerText);
	},
	render: function(){
		return (
			<div>
				<ForumHeader />
				  <div className="container">
						<ForumQuestion />
						<hr />
						<ForumAnswers allAnswers={ this.state.allAnswers } />
						<hr />
						<h4>Add an answer</h4>
						<ForumAddAnswerBox onAddAnswer={ this._onAddAnswer }/>
					</div>

				<SimpleForm />
			</div>
		);
   }
});


//if this is a module then make sure you export it.
module.exports = Forum;
