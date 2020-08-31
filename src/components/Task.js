import React, { Component } from 'react';
import TaskModal from './TaskModal';


class Task extends Component {
  render() {
      const { columns, selectTask, selectedTaskKey, columnKey, taskKey, updateColumn } = this.props;
      const task = columns[columnKey].tasks[taskKey]
      const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('task-key', target.id);
        setTimeout(() => {
          target.display = 'none';
        }, 0)
      }
      const dragOver = e => {
        e.stopPropagation();
      }

      return (
        <div>
          <div
            className="task"
            id={taskKey}
            draggable={this.props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
          <div className="task-card">
            {/* only title is rendered */}
            <button onClick={() => selectTask(columnKey, taskKey)}>
              <h3>{task.title}</h3>
              <span className="icon-btn">🖋</span>
            </button>
          </div>
          {/* render popup if that task is selected */}
          {selectedTaskKey === taskKey ? (
            <TaskModal
              columns={columns}
              columnKey={columnKey}
              taskKey={taskKey}
              selectTask={selectTask}
              updateColumn={updateColumn}
            />
          ) : (
            <div />
          )}
        </div>
      );
  }
}

export default Task;
