var ForumHeader = React.createClass({

	//so this is not a good way to do this.
	render: function(){


		//props is what has been pass to this component
		//now that all happens by magic
		console.log(this.props.allAnswers);

		return React.createElement(
			'nav', { 
				className: 'navbar navbar-default'
			},
			React.createElement(
				"div",{
					className: "container-fluid"
				},
				React.createElement(
					'div',{
						className : "navebar-header"
					},
					React.createElement(
						"a",{
							className: "navbar-brand",
							href: "#"
						},
						"React Forum"
						)
					)
				)
		);
	}
});