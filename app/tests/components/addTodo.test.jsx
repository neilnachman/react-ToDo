var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require("AddTodo");
describe("AddTdo",()=>{
  it("should exist" , ()=>{
    expect(AddTodo).toExist();
  });
  it("shuld call onAddTodo when submit form and text is valid" , ()=>{
    var spy = expect.createSpy();
    var addTodo=  TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.text.value ="new todo";
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith("new todo");
  });


});
