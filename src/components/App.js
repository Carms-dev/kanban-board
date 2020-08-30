import React from 'react';
import Column from './Column';
import AddColumnForm from './AddColumnForm';
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

class App extends React.Component {
  state = {
    columns: {},
    isAddCol: false,
    selectedColumnKey: null,
    selectedTaskKey: null
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

    // hook up to iconify
    const script = document.createElement("script");
    script.src = "https://code.iconify.design/1/1.0.7/iconify.min.js";
    script.async = true;
    document.body.appendChild(script);
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
      columns[`column${i}`] = { name: v, tasks: {} };
    })

    this.setState({ columns });
  }

  //selectColumn
  selectColumn = (columnKey) => {
    const column = this.state.columns[columnKey]
    if (column) {
      this.setState({ selectedColumnKey: columnKey });
    } else {
      this.setState({ selectedColumnKey: null });
    }
  }

  // selectTask
  selectTask = (columnKey, taskKey) => {
    const task = this.state.columns[columnKey].tasks[taskKey];
    const selectedTaskKey = task ? taskKey : null;
    this.setState({ selectedTaskKey })
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
      <div>
        <h1>Kanban Board</h1>
        <div className="columns">
          {Object.keys(this.state.columns).map(key => (
            <Column
              key={key}
              columnKey={key}
              columns={this.state.columns}
              selectedColumnKey={this.state.selectedColumnKey}
              selectedTaskKey={this.state.selectedTaskKey}
              selectColumn={this.selectColumn}
              selectTask={this.selectTask}
              updateColumn={this.updateColumn}
              deleteColumn={this.deleteColumn}
            />
          ))}

          {(this.state.isAddCol) ?
            <AddColumnForm
              toggleAddCol={this.toggleAddCol}
              addColumn={this.addColumn}
            /> : <button onClick={this.toggleAddCol}>+ Add Another Column</button>
          }
        </div>
      </div>
    )
  }
}

export default App;
