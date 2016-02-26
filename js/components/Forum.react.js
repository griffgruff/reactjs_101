//use object literal syntax to create this
var Forum = React.createClass({


	getInitialState: function(){
		//how do I get this data?
		//well then flux might be the answer.
		return{
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
		//state is a property of all react componencts.
		//and is set when getInitialState is called.
		//and can be updated with will cause a re-render.
		//this data now gets passes to the component
		return React.createElement('div', null,
			React.createElement(ForumHeader,{ allAnswers: this.state.allAnswers})
		);
	}
});