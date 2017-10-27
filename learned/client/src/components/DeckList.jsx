import React, { Component } from 'react';
import Axios from 'axios';
import Deck from './Deck';
import Input from './partials/Input';

class DeckList extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Test AJAX call - returns 405 error, without JSON.stringify
  // Axios.post('http://memjogger.com/api/user/login', JSON.stringify({
  //   "email": "TokuhisaWinston@Outlook.com",
  //   "passwd": ""
  // }))
  //   .then(res => {
  //     console.log(res.data.token);
  //   });

  componentDidMount() {
    Axios.get('/decks')
    .then(res => {
      console.log(res.data.decks_data.card_sets);
      this.setState({
        apiData: res.data.decks_data.card_sets,
        apiDataLoaded: true,
      });
    });
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    Axios.post('http://memjogger.com/api/cardset/?token=6dce93485a8fb619c6536793db63d60c',
       JSON.stringify({"name": `${this.state.inputValue}`}))
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        Axios.get('/decks')
        .then(res => {
          this.setState(prevState => {
            return {
              apiData: res.data.deck_data.card_sets,
              inputValue: ''
            };
          });
        });
      }
    });
  }

  handleDelete(id) {
    console.log(id);
    Axios.delete(`/decks/${id}`)
    .then(res => {
      if (res.status === 200) {
        Axios.get('http://localhost:3001/decks')
        .then(res => {
          this.setState(prevState => {
            return { apiData: res.data.decks_data.card_sets, };
          });
        });
      }
    });
  }

  showDecks() {
    return this.state.apiData.map((deck, index) => {
      return <Deck deck={deck} key={index}
              handleDelete={this.handleDelete} />;
    });
  }

  render() {
    return (
      <div id="background">
        <div id="inset">
          <Input id='input'
            inputValue={this.state.inputValue}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <div id="deck-list">
            {this.state.apiDataLoaded ? this.showDecks()
                                      : <p>Loading. . .</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default DeckList;
