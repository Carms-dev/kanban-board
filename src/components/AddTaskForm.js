import React from "react";

class AddTaskForm extends React.Component {
  // create reference needed for the form
  titleRef = React.createRef();
  descriptionRef = React.createRef();

  // Tasks#create: in response to submit
  createTask = (e) => {
    // prevent refresh
    e.preventDefault();
    // create the task using the input value
    const task = {
      title: this.titleRef.current.value,
      description: this.descriptionRef.current.value,
    };
    // update the columns
    const updatedColumn = this.props.columns[this.props.columnKey];
    updatedColumn.tasks[`task${Date.now()}`] = task;
    this.props.updateColumns(this.props.columnKey, updatedColumn);
    // clear the form
    e.currentTarget.reset();
    // clear the selectColumn to close the form
    this.props.selectColumn(null);
  };

  render() {
    return (
      <form className="task-add" onSubmit={this.createTask}>
        <input
          required
          ref={this.titleRef}
          type="text"
          name="title"
          placeholder="Enter title"
        />
        <input
          ref={this.descriptionRef}
          type="text"
          name="description"
          placeholder="Enter description"
        />
        <button type="submit">Add Task</button>
        <button onClick={() => this.props.selectColumn(null)}>
          Cancel
        </button>
      </form>
    );
  }
}

export default AddTaskForm;
