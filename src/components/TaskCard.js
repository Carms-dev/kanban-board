import React, { Component } from 'react';
import TaskModal from './TaskModal';

class TaskCard extends Component {

    deleteTask = (index) => {
        const column = this.props.column;
        column.tasks.splice(index, 1);
        this.props.updateColumn(this.props.columnKey, column);
    }

    render() {
        const { columns, selectTask, selectedTask, columnKey, taskIndex, updateColumn } = this.props;
        const task = columns[columnKey].tasks[taskIndex]

        return (
            <div>
                <div className="task">
                    <h3>
                        {task.title}
                    </h3>
                    <button onClick={() => selectTask(columnKey, taskIndex)}>See Details</button>
                </div>
                {selectedTask === task ? <TaskModal
                    columns={columns}
                    columnKey={columnKey}
                    taskIndex={taskIndex}
                    selectTask={selectTask}
                    updateColumn={updateColumn}
                /> : <div />}
            </div>
        )
    }
}

export default TaskCard;
