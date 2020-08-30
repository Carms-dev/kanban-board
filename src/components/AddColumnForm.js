import React from 'react'

class AddColumnForm extends React.Component {
    nameRef = React.createRef();

    createColumn = (e) => {
        // prevent refresh from form submit
        e.preventDefault();
        const column = {
            name: this.nameRef.current.value,
            tasks: []
        }
        this.props.addColumn(column);
        // form reset
        e.currentTarget.reset();
        // close the form
        this.props.toggleAddCol();
    }

    render() {
        return (
            <form className="column-add" onSubmit={this.createColumn} >
                <input required ref={this.nameRef} type="text" name="name" placeholder="Enter title..." />
                <button type="submit">Add Column</button>
                <button onClick={() => this.props.toggleAddCol()}>✖</button>
            </form>
        )
    }
}

export default AddColumnForm;
