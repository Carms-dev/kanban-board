import React, { Component } from 'react';

export class Column extends Component {
    render() {
        return (
            <div>
                {this.props.column.name}
                <button onClick={() => { this.props.deleteColumn(this.props.index) }}>
                    🗑️
                </button>
            </div>
        )
    }
}

export default Column;
