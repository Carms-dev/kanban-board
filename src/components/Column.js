import React, { Component } from 'react';

export class Column extends Component {
    render() {
        return (
            <div>
                {this.props.column.name}
            </div>
        )
    }
}

export default Column;
