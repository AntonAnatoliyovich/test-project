import './App.css';
import React, { Component } from 'react';
import boxers from './scripts/boxers.json';
import { Table } from './components/table';
import { BoxersForm } from './components/boxersForm';
import _ from 'lodash';

class App extends Component {
  state ={
    sort: 'asc',
    sortField: 'id',
    boxersSorted: boxers
  }

  onSort = sortField => {
    const cloneBoxers = [...this.state.boxersSorted];
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    const boxersSorted = _.orderBy(cloneBoxers, sortField, sort);
    this.setState({boxersSorted, sort, sortField})
    console.log(boxersSorted)
  }

  addBoxer = ( newBoxer ) => {
    const newArray = [...this.state.boxersSorted]
    newArray.push(newBoxer)
    this.setState(() => ({
      boxersSorted: newArray
    }))
  };

  deleteBoxer = id => {
    const currentBoxers = this.state.boxersSorted.filter(boxer => {
      return boxer.id !== id
    })
    this.setState(() => ({
      boxersSorted: currentBoxers,
    }))
}

  render() {
    return (
      <>
        <BoxersForm
          addBoxer={this.addBoxer}
        />
        <Table
          boxers={this.state.boxersSorted}
          onSort={this.onSort}
          sort={this.state.sort}
          sortField={this.state.sortField}
          deleteBoxer={this.deleteBoxer}
        />
      </>
    );
  }
}

export default App;
