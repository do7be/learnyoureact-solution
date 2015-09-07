"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = require('react');

var TodoBox = React.createClass({
  displayName: "TodoBox",

  render: function render() {
    return React.createElement(
      "div",
      { className: "todoBox" },
      React.createElement(
        "h1",
        null,
        "Todos"
      ),
      React.createElement(TodoList, { data: this.props.data }),
      React.createElement(TodoForm, null)
    );
  }
});

var TodoList = React.createClass({
  displayName: "TodoList",

  getInitialState: function getInitialState() {
    return {
      data: this.props.data,
      titleValue: "",
      detailValue: ""
    };
  },
  changeTitle: function changeTitle(e) {
    this.setState({ titleValue: e.target.value });
  },
  changeDetail: function changeDetail(e) {
    this.setState({ detailValue: e.target.value });
  },
  addTodo: function addTodo() {
    var newData = this.state.data.concat({ title: this.state.titleValue, detail: this.state.detailValue });
    this.setState({ data: newData });
    this.setState({ titleValue: "" });
    this.setState({ detailValue: "" });
  },
  deleteTodo: function deleteTodo(title) {
    this.setState({
      data: this.state.data.filter(function (todo) {
        return todo.title !== title;
      })
    });
  },
  render: function render() {
    var _this = this;

    var todo = this.state.data.map(function (obj) {
      return React.createElement(
        Todo,
        { title: obj.title, key: obj.title, onDelete: _this.deleteTodo },
        obj.detail
      );
    });
    return React.createElement(
      "div",
      { className: "todoList" },
      React.createElement(
        "div",
        null,
        "Title:",
        React.createElement("input", { type: "text", value: this.state.titleValue, onChange: this.changeTitle }),
        "Detail:",
        React.createElement("input", { type: "text", value: this.state.detailValue, onChange: this.changeDetail }),
        React.createElement(
          "button",
          { onClick: this.addTodo },
          "Add"
        )
      ),
      React.createElement(
        "table",
        { style: { border: "2px solid black" } },
        React.createElement(
          "tbody",
          null,
          todo
        )
      )
    );
  }
});

var Todo = React.createClass({
  displayName: "Todo",

  propTypes: {
    title: React.PropTypes.string.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      checked: false,
      tableStyle: style.tableContent
    };
  },
  handleChange: function handleChange(e) {
    this.setState({ checked: e.target.checked });
  },
  _onDelete: function _onDelete() {
    this.props.onDelete(this.props.title);
  },
  render: function render() {
    var trStyle = this.state.checked ? style.checkedTodo : style.notCheckedTodo;
    return React.createElement(
      "tr",
      { style: trStyle },
      React.createElement(
        "td",
        { style: style.tableContent },
        React.createElement(
          "button",
          { onClick: this._onDelete },
          "X"
        )
      ),
      React.createElement(
        "td",
        { style: style.tableContent },
        React.createElement("input", { type: "checkbox", checked: this.state.checked, onChange: this.handleChange })
      ),
      React.createElement(
        "td",
        { style: style.tableContent },
        this.props.title
      ),
      React.createElement(
        "td",
        { style: style.tableContent },
        this.props.children
      )
    );
  }
});

var TodoForm = React.createClass({
  displayName: "TodoForm",

  render: function render() {
    return React.createElement(
      "div",
      { className: "todoForm" },
      "I am a TodoForm."
    );
  }
});

var style = {
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

exports["default"] = TodoBox;
module.exports = exports["default"];
