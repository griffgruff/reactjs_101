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
						<ForumAddAnswerBox />
					</div>
			</div>
		);
	}
});
