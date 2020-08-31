import React from 'react'

class AddColumnForm extends React.Component {
    nameRef = React.createRef();

    createColumn = (e) => {
        // prevent refresh from form submit
        e.preventDefault();
        // create new column
        const column = {
            name: this.nameRef.current.value,
            tasks: {}
        }
        // add the column
        this.props.addColumn(column);
        // form reset
        e.currentTarget.reset();
        // close the form
        this.props.toggleAddCol();
    }

    render() {
        return (
            <form className="column-add" onSubmit={this.createColumn} >
                <input autoFocus required ref={this.nameRef} type="text" name="name" placeholder="Enter column name..." />
                <button type="submit">Add Column</button>
                <button onClick={this.props.toggleAddCol}>✖</button>
            </form>
        )
    }
}

export default AddColumnForm;
