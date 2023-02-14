import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.showCompleted
                    ? this.props.todos.map((todo) => (
                          <Todo
                              data={todo}
                              key={todo.id}
                              onClickHandler={this.props.onClickHandler}
                          />
                      ))
                    : this.props.todos.map(
                          (todo) =>
                              !todo.completed && (
                                  <Todo
                                      data={todo}
                                      key={todo.id}
                                      onClickHandler={this.props.onClickHandler}
                                  />
                              )
                      )}
            </div>
        );
    }
}
