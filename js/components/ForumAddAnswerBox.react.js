var React = require('react')
var ReactDom = require('react-dom');

var ForumAddAnswerBox = React.createClass({

  getInitialState: function(){
    return { value: '', myvalue: '' };
  },
  _addAnswer: function(){
    //value comes out of state
    this.props.onAddAnswer(this.state.value, this.state.myvalue);
  },
  render: function(){
    return(
      <div>
        <textarea id="addAnswer"
                  className="col-md-6 col-xs-8"
                  onChange={ this._onChange }></textarea>

        <input type="button"
               className="btn btn-primary"
               value="Add"
               onClick={ this._addAnswer } />
      </div>


    )
  },
  _onChange: function(event){
    //not sure what this does
    //think it changes the value of value
    this.setState({
      //event.target is the textarea box value
      value: event.target.value,
      myvalue: event.target.value
    });
  }
});

module.exports = ForumAddAnswerBox;
