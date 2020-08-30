import React, { Component } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';


export class Column extends Component {
    render() {
        const { columns, columnKey, updateColumn, deleteColumn, selectColumn, selectedColumnKey, selectTask, selectedTaskKey } = this.props;
        const drop = e => {
          e.preventDefault();
          const task = e.dataTransfer.getData('task-card');
          const card = document.getElementById(task);
          card.style.display = 'block';
          e.target.appendChild(card);
        };
        const dragOver = e => {
          e.preventDefault();
        };
        return (
            <div
              id={this.id}
              onDrop={drop}
              onDragOver={dragOver}
            >
            <div className="column-header">
              <h2>{columns[columnKey].name}</h2>
              {selectedColumnKey === columnKey ? (
                <AddTaskForm
                  columns={columns}
                  columnKey={columnKey}
                  updateColumns={updateColumn}
                  selectColumn={selectColumn}
                />
              ) : (
                <button
                  onClick={() => {
                    selectColumn(columnKey);
                  }}
                >
                  + Task
                </button>
              )}

              <button
                onClick={() => {
                  deleteColumn(columnKey);
                }}
              >
                <span
                  className="iconify"
                  data-icon="clarity:trash-line"
                  data-inline="false"
                ></span>{" "}
                column
              </button>
            </div>
            {Object.keys(columns[columnKey].tasks).map(key => {
              return (
                <Task
                  key={key}
                  columns={columns}
                  columnKey={columnKey}
                  taskKey={key}
                  updateColumn={updateColumn}
                  selectTask={selectTask}
                  selectedTaskKey={selectedTaskKey}
                />
              );
            })}
          </div>
        );
    }
}

export default Column;
