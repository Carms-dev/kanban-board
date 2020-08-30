import React from 'react';
import Column from './Column';
import AddColumnForm from './AddColumnForm';
// import base from './base';

class App extends React.Component {
  // firebase hookup needed to syncState. ComponentDidMount. OR Effect Hook.
  state = {
    columns: {},
    isAddCol: false
  }

  // initialize basic columns
  componentWillMount() {
    this.initColumns();
  }

  initColumns = () => {
    const colName = ["Todo", "In progress", "Done"];
    const columns = {}
    colName.forEach((v, i) => {
      columns[`column${i}`] = { name: v, tasks: {} };
    })
    
    this.setState({ columns });
  }

  // Column crud
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
        {(this.state.isAddCol) ? <AddColumnForm 
          toggleAddCol={this.toggleAddCol}
          addColumn={this.addColumn}
        /> : <button onClick={() => this.toggleAddCol()}>+ Add Another Column</button>
        }

      </div>
    )
  }
}

export default App;
