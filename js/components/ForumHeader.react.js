var React = require('react')
var ReactDom = require('react-dom');

var ForumHeader = React.createClass({

	render: function (){
		console.log(this.props.allAnswers);
		return (
						<nav className="navbar navbar-default">
							<div className="container-fluid">
								<div className="navebar-header">
									<a className="navbar-brand" href="#">
											React Forum

									</a>
								</div>
							</div>
						</nav>
					);
	 }
});

module.exports = ForumHeader;
