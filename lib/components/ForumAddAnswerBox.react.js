'use strict';

var ForumAddAnswerBox = React.createClass({
  displayName: 'ForumAddAnswerBox',


  getInitialState: function getInitialState() {
    return { value: '', myvalue: '' };
  },

  _addAnswer: function _addAnswer() {
    //value comes out of state
    this.props.onAddAnswer(this.state.value, this.state.myvalue);
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement('textarea', { id: 'addAnswer', className: 'col-md-6 col-xs-8', onChange: this._onChange }),
      React.createElement('input', { type: 'button', className: 'btn btn-primary', value: 'Add',
        onClick: this._addAnswer })
    );
  },
  _onChange: function _onChange(event) {
    //not sure what this does
    //think it changes the value of value
    this.setState({
      //event.target is the textarea box value
      value: event.target.value,
      myvalue: event.target.value
    });
  }
});