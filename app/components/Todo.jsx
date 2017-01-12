var React = require('react');
var Todo = React.createClass({

  render : function(){
   var {text,id} = this.props;
    return(
      <div>
      <div>{id}. {text}</div>
      </div>

    );
  }
});
module.exports = Todo;
