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


  addBoxer = ({ id, name, age, nationality, stance, division, record, photo }) => {
    // console.log( id, name, age, nationality, stance, division, record, photo )
    const newBoxer = {id, name, age, nationality, stance, division, record, photo}
    const newArray = this.state.boxersSorted.push(newBoxer)
    console.log(this.state.boxersSorted)
    // this.setState({boxersSorted:newArray});

    this.setState(({ boxersSorted }) => ({
      boxersSorted: [...boxersSorted, newArray],
    }));
  };

  deleteBoxer = id =>
  this.setState(({ boxersSorted }) => ({
    boxersSorted: boxersSorted.filter(boxer => boxer.id !== id),
  }));


  render() {
    return (
      <>
        <BoxersForm
          addBoxer={this.addBoxer}
          deleteBoxer={this.deleteBoxer}
        />
        <Table
          boxers={this.state.boxersSorted}
          onSort={this.onSort}
          sort={this.state.sort}
          sortField={this.state.sortField}
        />
      </>
    );
  }
}

export default App;
