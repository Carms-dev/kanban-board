import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Column from './Column';
// import base from './base';

class App extends React.Component {
  // firebase hookup needed to syncState. ComponentDidMount. OR Effect Hook.
  state = {
    columns: {}
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

  initAddColumnForm = () => {
    console.log("add column");
  }

  render() {
    return (
      <div className="columns">
        {Object.keys(this.state.columns).map(key => (
          <Column 
            key={key}
            column={this.state.columns[key]}
          />
        ))}
        <button onClick={this.initAddColumnForm}>+ Add Another Column</button>
      </div>
    )
  }
}

export default App;
