import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Input from './partials/Input';

// import styled from 'styled-components';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.deck.id,
      isBeingEdited: false,
      inputValue: this.props.deck.name,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.id);
    Axios.put(`/decks/${this.state.id}`,
      { name: `${this.state.inputValue}` })
    .then(res => {
      if (res.status === 200) {
        Axios.get(`/decks/${this.state.id}`)
        .then(res => {
          this.setState(prevState => {
            return {
              // isBeingEdited: false,
              inputValue: this.state.inputValue
            };
          });
        });
      }
    });
  }

  editDeck() {
    return <Input id='input'
              inputValue={this.state.inputValue}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
  }

  showDeck() {
    return (
      <div className="deck">
        <Link to={`/decks/${this.state.id}`} className="link">
          <span>{this.props.deck.name}</span>
        </Link>
        <button className="deckButton" id="deckEdit"
          onClick={() => { this.setState({ isBeingEdited: true }) }}
        >Edit</button>
        <button className="deckButton" id="deckDelete"
          onClick={() => {this.props.handleDelete(this.state.id)}}
        >Delete</button>
      </div>
    );
  }

  render() {
    return (
      <div id="deck-list">
        <div>
          {!this.state.isBeingEdited ? this.showDeck()
                                     : this.editDeck()}
        </div>
      </div>
    );
  }
}

export default Deck;
