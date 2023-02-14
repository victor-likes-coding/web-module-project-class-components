import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        /* todo structure
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        }
    */

        // check if todo is completed and add a checkmark if it is
        return (
            <li onClick={(e) => this.props.onClickHandler(e, data.id)}>
                {data.name} {data.completed && "\u2713"}
            </li>
        );
    }
}
