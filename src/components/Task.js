import React, { Component } from 'react';
import TaskModal from './TaskModal';


class Task extends Component {
  render() {
      const { columns, selectTask, selectedTaskKey, columnKey, taskKey, updateColumn } = this.props;
      const task = columns[columnKey].tasks[taskKey];

      const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('tkey', target.dataset.tkey);
        e.dataTransfer.setData('ckey', target.dataset.ckey);
      }
      const dragOver = e => {
        e.preventDefault();
      }
      const drop = e => {
        e.preventDefault();

        const tKeyDrag = e.dataTransfer.getData('tKey');
        const cKeyDrag = e.dataTransfer.getData('cKey');
        const tKeyDrop = e.currentTarget.dataset.tkey;
        const cKeyDrop = e.currentTarget.dataset.ckey;

        // find mouse position of drop
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const h = rect.height;

        // Extract the tasks keys to an Array
        const tasksKeys = Object.keys(columns[cKeyDrop].tasks);
        
        // split array based on where the mouse is when drop
        const dropBefore = (y / h) < 0.5;

        const spliceIndex = dropBefore 
          ? tasksKeys.indexOf(tKeyDrop)
          : tasksKeys.indexOf(tKeyDrop) + 1;

        // split array of keys into two
        const tasksKeysBef = tasksKeys.splice(0, spliceIndex);

        // set new containers
        const updatedColumn = columns[cKeyDrop];
        const updatedTasks = {};
        
        // rebuilt the tasks object
        // before
        tasksKeysBef.forEach(key => {
          updatedTasks[key] = updatedColumn.tasks[key]
        })
        // insert
        updatedTasks[tKeyDrag] = columns[cKeyDrag].tasks[tKeyDrag];
        // after
        tasksKeys.forEach((key) => {
          updatedTasks[key] = updatedColumn.tasks[key];
        });

        // update the variable and update the column
        updatedColumn.tasks = updatedTasks;
        updateColumn(cKeyDrop, updatedColumn);

        // delete task from prev column
        if (cKeyDrag !== cKeyDrop) {
          const columnPrev = columns[cKeyDrag];
          delete columnPrev.tasks[tKeyDrag];
          updateColumn(cKeyDrag, columnPrev);
        }
      };

      return (
        <div 
          className="task-card"
          data-tkey={taskKey}
          data-ckey={columnKey}
          draggable={this.props.draggable}
          onDragStart={dragStart}
          onDragOver={dragOver}
          onDrop={drop}
        >
          {/* only title is rendered */}
          <button className="task" onClick={() => selectTask(columnKey, taskKey)}>
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
