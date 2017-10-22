import React, { Component } from 'react';
import './App.css';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main id="background">
          <Switch>
            <Route path="/decks/:id/cards/:id" component={Card} />
            <Route path="/decks/:id" component={Deck} />
            <Route path="/decks" component={DeckList} />
            <Route exact path="/" component={Home} />

            <Redirect to="/" />
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
