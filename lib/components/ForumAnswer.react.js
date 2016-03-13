"use strict";

var ForumAnswer = React.createClass({
  displayName: "ForumAnswer",


  propTypes: {
    //you have to give me a func
    //what are the types here?
    answer: React.PropTypes.object.isRequired,
    onMarkCorrect: React.PropTypes.func.isRequired
  },

  _onMarkCorrect: function _onMarkCorrect() {
    this.props.onMarkCorrect(this.props.id);
  },

  render: function render() {
    var answer = this.props.answer;

    var markAnswer;

    if (!answer.correct) {
      markAnswer = React.createElement(
        "div",
        { className: "pull-right" },
        React.createElement(
          "small",
          null,
          React.createElement(
            "a",
            { href: "#", onClick: this._onMarkCorrect },
            "Mark as correct"
          )
        )
      );
    }

    var className = "panel-body";

    if (answer.correct) {
      className += " bg-success";
    }
    return React.createElement(
      "div",
      { className: "panel panel-default" },
      React.createElement(
        "div",
        { className: className },
        answer.body,
        markAnswer
      )
    );
  }
});