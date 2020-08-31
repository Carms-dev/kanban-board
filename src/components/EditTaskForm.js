import React from 'react'

class EditTaskForm extends React.Component {
    // Tasks#Update: onChange
    updateTask = (e) => {
        // skip refresh
        e.preventDefault();
        // create the updated task
        const { columns, columnKey, taskKey, updateColumn } = this.props;
        const task = columns[columnKey].tasks[taskKey];

        const updatedTask = {
            ...task,
            [e.currentTarget.name]: e.currentTarget.value
        }
        // update the column
        const updatedColumn = columns[columnKey];
        updatedColumn.tasks[taskKey] = updatedTask;
        updateColumn(columnKey, updatedColumn);
    }

    render() {
        const { columns, columnKey, taskKey } = this.props;
        const task = columns[columnKey].tasks[taskKey];

        return (
            <form>
                <h2 style={{marginBottom: "1rem"}}>Edit Task</h2>
                <input
                    autoFocus
                    type="text"
                    onChange={this.updateTask}
                    name="title"
                    placeholder="Enter title"
                    value={task.title}
                />
                <input
                    type="text" name="description"
                    onChange={this.updateTask}
                    placeholder="Enter description"
                    value={task.description}
                />
            </form>
        )
    }
}

export default EditTaskForm;
