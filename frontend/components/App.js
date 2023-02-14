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

    handleSubmit = (e, task) => {
        e.preventDefault();
        // generate id from timestamp and add to task
        task.id = Date.now();
        task.completed = false;
        this.setState({ ...this.state, todos: [...this.state.todos, task] }, () => {
            console.log("changes saved");
            console.log(this.state.todos);
        });
    };
}
