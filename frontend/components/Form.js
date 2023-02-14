import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    render() {
        return (
            <form
                onSubmit={(e) => {
                    this.props.addTodo(e, this.state);
                    this.setState((state) => ({ ...state, name: "" }));
                }}>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        );
    }
}
