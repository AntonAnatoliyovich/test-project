import './App.css';
import React, { Component } from 'react';
import boxers from './scripts/boxers.json';
import { Table } from './components/table';
import _ from 'lodash';

class App extends Component {
  state ={
    boxers: boxers,
    sort: 'asc',  // 'desc'
    sortField: 'id',
    boxersSorted: boxers
  }

  onSort = sortField => {
    const cloneBoxers = this.state.boxers.concat();
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    const boxersSorted = _.orderBy(cloneBoxers, sortField, sort);
    this.setState({boxersSorted, sort, sortField})
    // console.log(sortField)
    console.log(boxersSorted)
  }

  render() {
    return (
      <Table
        boxers={this.state.boxersSorted}
        onSort={this.onSort}
        sort={this.state.sort}
        sortField={this.state.sortField}
      />
    );
  }
}

export default App;
