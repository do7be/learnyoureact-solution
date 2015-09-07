let React = require('react');

let TodoBox = React.createClass({
  render: function () {
    return (
      <div className = "todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
});

let TodoList = React.createClass({
  render: function () {
    let todo = this.props.data.map((obj) => {
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>;
    });
    return (
      <div className = "todoList">
        <table style = {{border: "2px solid black"}}>
          <tbody>
            {todo}
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
      checked: false,
      tableStyle: style.tableContent
    }
  },
  handleChange: function (e) {
    this.setState({checked: e.target.checked});
  },
  render: function () {
    let trStyle = this.state.checked ? style.checkedTodo : style.notCheckedTodo;
    return (
      <tr style = {trStyle}>
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
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
  tableContent: {
    border: "1px solid black"
  }
};

export default TodoBox;
