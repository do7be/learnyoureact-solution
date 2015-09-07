var React = require('react');

var TodoBox = React.createClass({
  render: () => {
    return (
      <div className = "todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: () => {
    return (
      <div className = "todoList">
        I am a TodoList.
      </div>
    );
  }
});

var TodoForm = React.createClass({
  render: () => {
    return (
      <div className = "todoForm">
        I am a TodoForm.
      </div>
    );
  }
});

export default TodoBox;
