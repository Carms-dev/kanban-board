import React, { Component } from 'react';

export class Task extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.task.name}</h3>
                <p>{this.props.task.description}</p>
            </div>
        )
    }
}

export default Task;
