var React = require('react')
var ReactDom = require('react-dom');

var ForumAnswer = React.createClass({

  propTypes: {
    //you have to give me a func
    //what are the types here?
    answer: React.PropTypes.object.isRequired,
    onMarkCorrect: React.PropTypes.func.isRequired
  },

  _onMarkCorrect: function(){
    this.props.onMarkCorrect(this.props.id);
  },

  render: function() {
    var answer = this.props.answer;

    var markAnswer;

    if (!answer.correct){
      markAnswer = (
      <div className="pull-right">
        <small>
              <a href='#' onClick={ this._onMarkCorrect }>
                Mark as correct
              </a>
        </small>
      </div>);
    }

    var className = "panel-body";

    if (answer.correct){
      className += " bg-success";
    }
    return (
      <div className="panel panel-default">
        <div className = { className }>
          { answer.body}
          { markAnswer }
        </div>
      </div>
    );
  }
});


module.exports = ForumAnswer;
