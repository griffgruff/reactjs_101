"use strict";

var ForumAnswers = React.createClass({
  displayName: "ForumAnswers",


  _onMarkCorrect: function _onMarkCorrect(id) {
    ForumActions.markAnswerCorrect(id);
  },

  render: function render() {
    var allAnswers = this.props.allAnswers;
    var answers = [];

    for (var key in allAnswers) {
      //this creates an array of components
      answers.push(React.createElement(ForumAnswer, { key: key, id: key, answer: allAnswers[key],
        onMarkCorrect: this._onMarkCorrect }));
    }

    // this creates a component
    return React.createElement(
      "div",
      null,
      answers
    );
  }
});