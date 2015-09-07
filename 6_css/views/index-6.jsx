let React = require('react');

let TodoBox = React.createClass({
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

let TodoList = React.createClass({
  render: () => {
    return (
      <div className = "todoList">
        <table style = {{border: "2px solid black"}}>
          <tbody>
            <Todo title = "Shopping">Milk</Todo>
            <Todo title = "Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
});

let Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      checked: false
    }
  },
  handleChange: function (e) {
    this.setState({checked: e.target.checked});
  },
  render: function () {
    return (
      <tr>
        <td style = {style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style = {style.tableContent}>{this.props.title}</td>
        <td style = {style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
});

let TodoForm = React.createClass({
  render: () => {
    return (
      <div className = "todoForm">
        I am a TodoForm.
      </div>
    );
  }
});

let style = {
  tableContent: {
    border: "1px solid black"
  }
};

export default TodoBox;
