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
        setTimeout(() => {
          target.display = 'none';
        }, 0)
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

        console.log(tKeyDrag, cKeyDrag, tKeyDrop, cKeyDrop)
        console.log(e);

        // if (cKeyPrev !== cKeyNext) {
        //   // add task to next column
        //   const columnNext = columns[cKeyNext];
        //   const task = columns[cKeyPrev].tasks[tKey];
        //   columnNext.tasks[tKey] = task;
        //   updateColumn(cKeyNext, columnNext);
        //   console.log(columnNext);

        //   // delete task from prev column
        //   const columnPrev = columns[cKeyPrev];
        //   delete columnPrev.tasks[tKey];
        //   updateColumn(cKeyPrev, columnPrev);
        // }
      };

      return (
        <div 
          className="task-card"
          id={taskKey}
          data-tkey={taskKey}
          data-ckey={columnKey}
          draggable={this.props.draggable}
          onDragStart={dragStart}
          onDragOver={dragOver}
          onDrop={drop}
          // onDragOver={dragOver}
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
