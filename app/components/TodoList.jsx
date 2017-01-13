var React = require('react');
var Todo = require("Todo");
var TodoList = React.createClass({

  render : function(){
    var {todos,onToggle} = this.props;
    var renderTodos = ()=>{
      return todos.map((todo)=>{
        return <Todo key = {todo.id} {...todo} onToggle = {onToggle}/>
      });
    }
    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
});
module.exports = TodoList;
