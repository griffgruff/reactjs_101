var React = require('react')
var ReactDom = require('react-dom');

//now using classes


class SimpleForm extends React.Component {
  //componentWillMount
  constructor(props){
    super(props)
  };

  onMarkCorrect(id){
    console.log("hello");
  };

  render() {
    return (
      <p>hello</p>
    );
  };

}


module.exports = SimpleForm;
