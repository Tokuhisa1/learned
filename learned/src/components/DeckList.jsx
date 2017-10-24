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
    Axios.get('http://memjogger.com/api/cardset?token=6dce93485a8fb619c6536793db63d60c')
    .then(res => {
      console.log(res.data.card_sets);
      this.setState({
        apiData: res.data.card_sets,
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
    Axios.post('http://memjogger.com/api/cardset?token=6dce93485a8fb619c6536793db63d60c',
      JSON.stringify({"name": `${this.state.inputValue}`}), )
    .then(res => {
      if (res.status === 200) {
        Axios.get('http://memjogger.com/api/cardset?token=6dce93485a8fb619c6536793db63d60c')
        .then(res => {
          this.setState(prevState => {
            return {
              apiData: res.data.card_sets,
              inputValue: ''
            };
          });
        });
      }
    });
  }

  handleDelete(id) {
    Axios.delete(`http://memjogger.com/api/cardset/${id}?token=6dce93485a8fb619c6536793db63d60c`)
    .then(res => {
      console.log(res);
    })
  }

  showDecksOnPage() {
    return this.state.apiData.map((deck, index) => {
      return <Deck deck={deck} key={index}
              handleDelete={this.handleDelete} />;
    });
  }

  render() {
    return (
      <div>
        <Input id='input'
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div id="deck-list">
          {this.state.apiDataLoaded ? this.showDecksOnPage()
                                      : <p>Loading. . .</p>}
        </div>
      </div>
    );
  }
}

export default DeckList;
