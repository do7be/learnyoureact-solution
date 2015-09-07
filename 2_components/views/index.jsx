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
      "I am a TodoList."
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
