"use strict";

var ForumHeader = React.createClass({
	displayName: "ForumHeader",


	render: function render() {
		console.log(this.props.allAnswers);
		return React.createElement(
			"nav",
			{ className: "navbar navbar-default" },
			React.createElement(
				"div",
				{ className: "container-fluid" },
				React.createElement(
					"div",
					{ className: "navebar-header" },
					React.createElement(
						"a",
						{ className: "navbar-brand", href: "#" },
						"React Forum"
					)
				)
			)
		);
	}

});