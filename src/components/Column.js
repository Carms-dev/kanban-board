import React, { Component } from 'react';
import Task from './Task';

export class Column extends Component {
    initAddTaskForm = () => {
      console.log('add task');
    }
    render() {
      return (
        <div>
            <h2>{this.props.column.name}</h2>
            <div>
                {this.props.column.name}
                <button onClick={() => { this.props.deleteColumn(this.props.index) }}>
                    🗑️
                </button>
            </div>
        </div>
      )
    }
}

export default Column;
