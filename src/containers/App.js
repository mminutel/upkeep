import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {

  state = {companies: []};

  componentDidMount() {
    fetch('/api/companies')
      .then(res => res.json())
      .then(companies => this.setState({companies}));
      console.log(this.state);

  }

  render() {
    return (
      <div>
        <header className="app-header"></header>
        <main className="app-body">test</main>
        <footer className="app-footer">test</footer>
      </div>
    );
  }
}

export default App;
