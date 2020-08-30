import React, { Component } from 'react'
import EditTaskForm from './EditTaskForm';


class TaskModal extends Component {
    // Tasks#destroy: onClick
    deleteTask = (taskKey) => {
        const column = this.props.columns[this.props.columnKey];
        delete column.tasks[taskKey]
        this.props.updateColumn(this.props.columnKey, column);
    }

    render() {
        const { columns, selectTask, columnKey, taskKey, updateColumn } = this.props;

        return (
            <div className="taskModal" style={{ border: "1px solid red" }}>
                <button onClick={() => selectTask(columnKey, null)}>X</button>
                {/* implement inline edit */}
                <EditTaskForm
                    columns={columns}
                    columnKey={columnKey}
                    taskKey={taskKey}
                    updateColumn={updateColumn}
                />
                <button onClick={() => this.deleteTask(taskKey)}>Delete Task</button>
            </div>
        )
    }
}

export default TaskModal;
