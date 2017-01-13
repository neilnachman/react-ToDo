var React = require('react');
var moment = require("moment");
var Todo = React.createClass({

  render : function(){
   var {text,id,completed,createdAt,completedAt} = this.props;
   var renderDate = ()=>{
     var message = "Created ";
     var timeStamp = createdAt;
     if(completed){
       message = 'Completed '
       timeStamp = completedAt;
     }
     return message + moment.unix(timeStamp).format("MMM Do YYY @ h:mm a")
   }
    return(

        <div onClick={()=>{this.props.onToggle(id)}}>
          <input type="checkbox" checked={completed}/>
          <p>{text}</p>
          <p>{renderDate()}</p>
        </div>


    );
  }
});
module.exports = Todo;
