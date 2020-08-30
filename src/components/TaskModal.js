import React, { Component } from 'react'
import Task from './Task';
import EditTaskForm from './EditTaskForm';


class TaskModal extends Component {
    state = {
        isEdit: false
    }

    toggleIsEdit = () => {
        this.setState({ isEdit: !this.state.isEdit });
    }

    deleteTask = (columnkey, taskIndex) => {
        const column = this.props.columns[this.props.columnKey];
        column.tasks.splice(taskIndex, 1);
        this.props.updateColumn(this.props.columnKey, column);
    }

    render() {
        const { columns, selectTask, columnKey, taskIndex, updateColumn } = this.props;
        const task = columns[columnKey].tasks[taskIndex];
        return (
            <div className="taskModal" style={{ border: "1px solid red" }}>
                <button onClick={() => selectTask(columnKey, null)}>X</button>
                {this.state.isEdit ? <EditTaskForm
                    columns={columns}
                    columnKey={columnKey}
                    taskIndex={taskIndex}
                    updateColumn={updateColumn}
                    toggleIsEdit={this.toggleIsEdit}
                /> : <Task task={task}
                    toggleIsEdit={this.toggleIsEdit}
                    />}
                <button onClick={() => this.deleteTask(columnKey, taskIndex)}>Delete Task</button>

            </div>

        )
    }
}

export default TaskModal;
