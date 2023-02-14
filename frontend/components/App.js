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

    handleOnClick = (e, id) => {
        e.preventDefault();
        const todos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ ...this.state, todos });
    };

}
