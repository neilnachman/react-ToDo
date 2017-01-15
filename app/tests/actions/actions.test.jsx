var expect = require("expect");
var actions = require("actions");
describe("actions", ()=>{
  it("should genrate search text actions" , ()=>{
    var action = {
      type :'SET_SEARCH_TEXT',
      searchText :"some search text"
    }
    var result = actions.setSearchText(action.searchText);
    expect(result).toEqual(action);
  });
  it("should genrate add todo action" , ()=>{
    var action = {
      type :'ADD_TODO',
      text : "some text"
    }
    var result = actions.addTodo(action.text);
    expect(result).toEqual(action);
  })
})
