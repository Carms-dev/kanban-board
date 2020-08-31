import React, { Component } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';


export class Column extends Component {
    render() {
        const { columns, columnKey, updateColumn, deleteColumn, selectColumn, selectedColumnKey, selectTask, selectedTaskKey } = this.props;
        return (
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
