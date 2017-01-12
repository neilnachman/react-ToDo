var React = require("react");
var TodoList = require("TodoList");
var ToDoApp = React.createClass({
  getInitialState : function(){
    return{
      todos : [
      {
        id : 1,
        text : 'walk the dog'
      },
      {
        id : 2,
        text : 'clean the yard'
      },
      {
        id : 3,
        text : 'go to sleep'
      },
      {
        id : 4,
        text : 'play video games'
      }
    ]
    }
  },
  render : function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos ={todos}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
