//use object literal syntax to create this
var Forum = React.createClass({
	displayName: "Forum",


	getInitialState: function () {
		//how do I get this data?
		//well then flux might be the answer.
		return {
			//this will end up this.state.allAnswers =
			allAnswers: {
				"1": {
					body: "Isn't that about time travel?",
					correct: false
				},

				"2": {
					body: "Isn't that about time travel again?",
					correct: false
				},

				"3": {
					body: "Isn't that about time travel and again?",
					correct: false
				}

			}
		};
	},

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(ForumHeader, null),
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(ForumQuestion, null),
				React.createElement("hr", null),
				React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
				React.createElement("hr", null),
				React.createElement(
					"h4",
					null,
					"Add an answer"
				),
				React.createElement(ForumAddAnswerBox, null)
			)
		);
	}
});