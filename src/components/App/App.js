import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Applications from '../Applications/Applications';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';

class App extends Component {

  render() {
    return (
      <div>
        <header className="app-header"><Header /></header>
        <BrowserRouter>
          <main className="app-main">
              <Switch>
                <Route path='/applications' component={Applications} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/tasks' component={Tasks} />
              </Switch>
          </main>
        </BrowserRouter>
        <footer className="app-footer"><Footer /></footer>
      </div>
    );
  }

}

export default App;
