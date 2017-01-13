var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localstorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
  describe("filter todos" , ()=>{
    var todos = [
      {
        id :1 ,
        text : 'some text',
        completed : true
      },
      {
        id :2,
        text : 'other some text',
        completed : false
      },
      {
        id :3 ,
        text : 'other some text',
        completed : true
      }
  ]

    it('should return all item if showcompleted is true' , ()=>{
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos.length).toBe(3);
    })
    it('should return 2 item if showcompleted is false' , ()=>{
      var filterTodos = TodoAPI.filterTodos(todos,false,'');
      expect(filterTodos.length).toBe(1);
    })
  })
});
