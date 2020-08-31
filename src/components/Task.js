import React, { Component } from 'react';
import TaskModal from './TaskModal';


class Task extends Component {
  render() {
      const { columns, selectTask, selectedTaskKey, columnKey, taskKey, updateColumn } = this.props;
      const task = columns[columnKey].tasks[taskKey]
      const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('tkey', target.dataset.tkey);
        e.dataTransfer.setData('ckey', target.dataset.ckey);
        setTimeout(() => {
          target.display = 'none';
        }, 0)
      }
      const dragOver = e => {
        // e.stopPropagation();
      }

      return (
        <div 
          className="task-card"
          id={taskKey}
          data-tkey={taskKey}
          data-ckey={columnKey}
          draggable={this.props.draggable}
          onDragStart={dragStart}
          onDragOver={dragOver}
        >
          {/* only title is rendered */}
          <button onClick={() => selectTask(columnKey, taskKey)}>
            <h3>{task.title}</h3>
            <span className="icon-btn">🖋</span>
          </button>
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
