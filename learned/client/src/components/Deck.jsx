import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Input from './partials/Input';

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
    Axios.put(`http://memjogger.com/api/cardset/${this.state.id}?token=6dce93485a8fb619c6536793db63d60c`,
      JSON.stringify({"name": `${this.state.inputValue}`}))
    .then(res => {
      if (res.status === 200) {
        Axios.get(`http://memjogger.com/api/cardset/${this.state.id}?token=6dce93485a8fb619c6536793db63d60c`)
        .then(res => {
          this.setState(prevState => {
            return { inputValue: this.props.deck.name };
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
          {this.props.deck.name}
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
