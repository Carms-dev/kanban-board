import React from 'react';
import Column from './Column';
import AddColumnForm from './AddColumnForm';
// import base from './base';

class App extends React.Component {
  state = {
    columns: {},
    isAddCol: false
  }

  // initialize basic columns
  componentDidMount() {
    // initialize new board
    if (Object.keys(this.state.columns).length === 0) {
      this.initColumns();
    }

    // retrive data from localStorage
    const localStorageRef = localStorage.getItem("kanban");
    if (localStorageRef) {
      this.setState({ columns: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    // store data when there are updates
    localStorage.setItem(
      "kanban",
      JSON.stringify(this.state.columns)
    )
  }

  // initialize board
  initColumns = () => {
    const colName = ["Todo", "In progress", "Done"];
    const columns = {}
    colName.forEach((v, i) => {
      columns[`column${i}`] = { name: v, tasks: [{ title: "xx" }] };
    })

    this.setState({ columns });
  }

  // Column CRUD
  addColumn = (column) => {
    const columns = { ...this.state.columns };
    columns[`column${Date.now()}`] = column;
    this.setState({ columns });
  }

  updateColumn = (key, updatedColumn) => {
    const columns = { ...this.state.columns };
    columns[key] = updatedColumn;
    this.setState({ columns });
  }

  deleteColumn = (key) => {
    const columns = { ...this.state.columns };
    delete columns[key];
    this.setState({ columns });
  }

  // update the isAddCol flag
  toggleAddCol = () => {
    this.setState({ isAddCol: !this.state.isAddCol });
  }

  render() {
    return (
      <div className="columns">
        {Object.keys(this.state.columns).map(key => (
          <Column
            key={key}
            index={key}
            column={this.state.columns[key]}
            updateColumn={this.updateColumn}
            deleteColumn={this.deleteColumn}
          />
        ))}
        {(this.state.isAddCol) ?
          <AddColumnForm
            toggleAddCol={this.toggleAddCol}
            addColumn={this.addColumn}
          /> :
          <button onClick={() => this.toggleAddCol()}>+ Add Another Column</button>
        }
      </div>
    )
  }
}

export default App;
