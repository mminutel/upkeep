import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class App extends Component {

  render() {
    return (
      <div>
        <header className="app-header"><Header /></header>
        <main className="app-main">--Main goes here.--</main>
        <footer className="app-footer"><Footer /></footer>
      </div>
    );
  }

}

export default App;
