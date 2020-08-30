import React from 'react'

class EditTaskForm extends React.Component {
    updateTask = (e) => {
        e.preventDefault();
        const { columns, columnKey, taskIndex, updateColumn } = this.props;

        const task = columns[columnKey].tasks[taskIndex];
        const updatedTask = {
            ...task,
            [e.currentTarget.name]: e.currentTarget.value
        }
        const updatedColumn = columns[columnKey];
        updatedColumn.tasks[taskIndex] = updatedTask;

        updateColumn(columnKey, updatedColumn);
        e.preventDefault();

    }

    render() {
        const { columns, columnKey, taskIndex, toggleIsEdit } = this.props;
        const task = columns[columnKey].tasks[taskIndex];

        return (
            <form className="task-add" onSubmit={this.updateTask}>
                <button onClick={() => toggleIsEdit()}>X</button>
                <input
                    type="text"
                    // onChange={this.updateTask}
                    name="title"
                    placeholder="Enter title"
                    value={task.title}
                />
                <input
                    type="text" name="description"
                    // onChange={this.updateTask}
                    placeholder="Enter description"
                    value={task.description}
                />
                <button type="submit">Save Change</button>
            </form>
        )
    }
}

export default EditTaskForm;
