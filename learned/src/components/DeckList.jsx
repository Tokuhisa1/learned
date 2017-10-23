import React, { Component } from 'react';
import Axios from 'axios';
import Deck from './Deck';

class DeckList extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
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
        console.log(res.data.card_sets);
        this.setState({
          apiData: res.data.card_sets,
          apiDataLoaded: true,
        });
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
      <div id="deck-list">
        <div>
          {(this.state.apiDataLoaded) ? this.showDecksOnPage() : <p>Loading. . .</p>}
        </div>
      </div>
    );
  }
}

export default DeckList;
