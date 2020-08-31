import React, { Component } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';


export class Column extends Component {
    render() {
        const { columns, columnKey, updateColumn, deleteColumn, selectColumn, selectedColumnKey, selectTask, selectedTaskKey } = this.props;
        const drop = e => {
          e.preventDefault();
          const tKey = e.dataTransfer.getData('tKey');
          const cKeyPrev = e.dataTransfer.getData('cKey');
          const cKeyNext = e.currentTarget.id;
          
          if (cKeyPrev !== cKeyNext) {
            // add task to next column
            const columnNext = columns[cKeyNext];
            const task = columns[cKeyPrev].tasks[tKey];
            columnNext.tasks[tKey] = task;
            updateColumn(cKeyNext, columnNext);
            console.log(columnNext);

            // delete task from prev column
            const columnPrev = columns[cKeyPrev];
            delete columnPrev.tasks[tKey];
            updateColumn(cKeyPrev, columnPrev);
          } 
        };
        const dragOver = e => {
          e.preventDefault();
        };

        return (
          <div 
            className="column-card">
            <div className="column-header"
            id={columnKey}
            onDrop={drop}
            onDragOver={dragOver}
            >
              <h2>{columns[columnKey].name}</h2>
              <button
                className="sq-btn"
                onClick={() => deleteColumn(columnKey)}
              >
                🗑
              </button>
            </div>
            {Object.keys(columns[columnKey].tasks).map((key) => {
              return (
                <Task
                  key={key}
                  columns={columns}
                  columnKey={columnKey}
                  taskKey={key}
                  updateColumn={updateColumn}
                  selectTask={selectTask}
                  selectedTaskKey={selectedTaskKey}
                  draggable="true"
                />
              );
            })}
            {/* Add Task Button */}
            {selectedColumnKey === columnKey ? (
              <AddTaskForm
                columns={columns}
                columnKey={columnKey}
                updateColumns={updateColumn}
                selectColumn={selectColumn}
              />
            ) : (
              <button
                className="add-btn"
                style={{width: "100%"}}
                onClick={() => {
                  selectColumn(columnKey);
                }}
              >
                + Add a Task
              </button>
            )}
          </div>
        );
    }
}

export default Column;
