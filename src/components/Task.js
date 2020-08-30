import React, { Component } from 'react'


class Task extends Component {
    render() {
        const { task, toggleIsEdit } = this.props;
        return (
            <div className="task">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <button onClick={() => toggleIsEdit()}>Edit Task</button>
            </div>
        )
    }
}

export default Task;
