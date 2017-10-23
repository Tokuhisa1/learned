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
  }

  componentDidMount() {
    // Test AJAX call - returns 405 error
    // Axios.post('http://memjogger.com/api/user/login', {
    //   "email": "TokuhisaWinston@Outlook.com",
    //   "passwd": "password"
    // })
    //   .then(res => {
    //     console.log(res);
    //   });

    Axios.get('http://memjogger.com/api/cardset?token=6dce93485a8fb619c6536793db63d60c')
      .then(res => {
        // console.log(res.data.card_sets);
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

  showDecksOnPage() {
    return this.state.apiData.map((deck, index) => {
      // console.log(this.state.apiData[index].name);
      return <Deck deck={deck} key={index} />;
    });
  }

  render() {
    return (
      <div>
        <Input inputValue={this.state.inputValue} handleChange={this.handleChange} />
        <div id="deck-list">
          {(this.state.apiDataLoaded) ? this.showDecksOnPage() : <p>Loading. . .</p>}
        </div>
      </div>
    );
  }
}

export default DeckList;
