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
      React.createElement(TodoList, null),
      React.createElement(TodoForm, null)
    );
  }
});

var TodoList = React.createClass({
  displayName: "TodoList",

  render: function render() {
    return React.createElement(
      "div",
      { className: "todoList" },
      React.createElement(
        "table",
        { style: { border: "2px solid black" } },
        React.createElement(
          "tbody",
          null,
          React.createElement(
            Todo,
            { title: "Shopping" },
            "Milk"
          ),
          React.createElement(
            Todo,
            { title: "Hair cut" },
            "13:00"
          )
        )
      )
    );
  }
});

var Todo = React.createClass({
  displayName: "Todo",

  render: function render() {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        { style: { border: "1px solid black" } },
        this.props.title
      ),
      React.createElement(
        "td",
        { style: { border: "1px solid black" } },
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

exports["default"] = TodoBox;
module.exports = exports["default"];
