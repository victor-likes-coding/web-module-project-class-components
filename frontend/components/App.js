import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            showCompleted: true,
        };
    }
}
