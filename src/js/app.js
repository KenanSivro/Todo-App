import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";
import TodoInterface from './interfaces/TodoInterface';
import '../style/todo.scss';

// New Interface instance
const todoInterface = new TodoInterface();

// Render TodoApp and inject to HTML element (id=root)
ReactDOM.render(
    <TodoApp todoInterface={todoInterface} />, 
    document.getElementById("root"));