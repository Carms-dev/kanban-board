import React, { Component } from 'react'
import EditTaskForm from './EditTaskForm';


class TaskModal extends Component {
    // Tasks#destroy: onClick
    deleteTask = (taskKey) => {
        const column = this.props.columns[this.props.columnKey];
        delete column.tasks[taskKey]
        this.props.updateColumn(this.props.columnKey, column);
    }

    // Close Modal if Enter or Esacpe key is pressed
    handleKeyDown = (e) => {
        if (e.keyCode === 13 || e.keyCode === 27) {
            this.props.selectTask(this.props.columnKey, null);
        }
    }

    render() {
        const { columns, selectTask, columnKey, taskKey, updateColumn } = this.props;

        return (
            <div className="modal-wrapper">
                <div className="modal" onKeyDown={this.handleKeyDown}>
                    <button className="modal-close" onClick={() => selectTask(columnKey, null)}>✖</button>
                    {/* implement inline edit */}
                    <EditTaskForm
                        columns={columns}
                        columnKey={columnKey}
                        taskKey={taskKey}
                        updateColumn={updateColumn}
                    />
                    <button className="sq-btn" onClick={() => this.deleteTask(taskKey)}>🗑</button>
                </div>
            </div>
        )
    }
}

export default TaskModal;
