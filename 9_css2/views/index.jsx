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

  render: function render() {
    var todo = this.props.data.map(function (obj) {
      return React.createElement(
        Todo,
        { title: obj.title, key: obj.title },
        obj.detail
      );
    });
    return React.createElement(
      "div",
      { className: "todoList" },
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
    children: React.PropTypes.string.isRequired
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
  render: function render() {
    var trStyle = this.state.checked ? style.checkedTodo : style.notCheckedTodo;
    return React.createElement(
      "tr",
      { style: trStyle },
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
