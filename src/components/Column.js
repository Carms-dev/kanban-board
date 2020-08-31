import React, { Component } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';


export class Column extends Component {
    render() {
        const { columns, columnKey, updateColumn, deleteColumn, selectColumn, selectedColumnKey, selectTask, selectedTaskKey } = this.props;
        const drop = e => {
          e.preventDefault();
          const task = e.dataTransfer.getData('task-key');
          const card = document.getElementById(task);
          card.style.display = 'block';
          e.target.appendChild(card);
        };
        const dragOver = e => {
          e.preventDefault();
        };
        return (
            <div
              id={columnKey}
              onDrop={drop}
              onDragOver={dragOver}
            >
          <div className="column-card">
            <div className="column-header">
              <h2>{columns[columnKey].name}</h2>
              <button className="sq-btn" onClick={() => deleteColumn(columnKey)}>🗑</button>
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
