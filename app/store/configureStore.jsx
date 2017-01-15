var redux= require("redux");
var{searchTextReducer,showCompletedReducer,todosReducer} = require("reducers");
export var configure = ()=>{
  var reducer = redux.combineReducers({
    searchText : searchTextReducer,
    showCompleted : showCompletedReducer,
    todos : todosReducer
  });
  return redux.createStore(reducer,redux.compose(window.devToolsExtension ? window.devToolsExtension() : f =>f
  ));
};
