import React, { Component } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';


export class Column extends Component {
    render() {
        const { columns, columnKey, updateColumn, deleteColumn, selectColumn, selectedColumn, selectTask, selectedTask } = this.props;
        return (
          <div>
            <div className="column-header">
              <h2>{columns[columnKey].name}</h2>
              {selectedColumn === columns[columnKey] ? (
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
                  selectedTask={selectedTask}
                />
              );
            })}
          </div>
        );
    }
}

export default Column;
