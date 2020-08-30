import React, { Component } from 'react';
import TaskCard from './TaskCard';
import AddTaskForm from './AddTaskForm';


export class Column extends Component {
    render() {
        const { columns, columnKey, updateColumn, deleteColumn, selectColumn, selectedColumn, selectTask, selectedTask } = this.props;
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
                {columns[columnKey].tasks.map((_task, i) => {
                    return (
                        <TaskCard
                            key={`task-${i}`}
                            columns={columns}
                            columnKey={columnKey}
                            taskIndex={i}
                            updateColumn={updateColumn}
                            selectTask={selectTask}
                            selectedTask={selectedTask}
                            draggable="true"
                        />
                    );
                })}
            </div>
        );
    }
}

export default Column;
