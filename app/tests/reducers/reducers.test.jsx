var expect = require("expect");
var reducers = require("reducers");
describe("Reducers",()=>{
  describe("search text reducer" , ()=>{
    it("should set search text" , ()=>{
      var action = {
        type : "SET_SEARCH_TEXT",
        searchText :"dog"
      }
      var res = reducers.searchTextReducer("",action);
      expect(res).toBe("dog");
    })
  });

  describe("toggle show completed reducer" , ()=>{
    it("should toogle shoe completed" ,()=>{
      var action = {
        type : "TOGGLE_SHOW_COMPLETED"
      };
    var res = reducers.showCompletedReducer(false,action);
      expect(res).toBe(true);
    });
  });
});
