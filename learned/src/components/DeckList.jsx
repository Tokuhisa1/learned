import React, { Component } from 'react';
import Axios from 'axios';

class DeckList extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
  }

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

  showDecksOnPage() {
    return this.state.apiData.map((deck, index) => {
      return (
        <div className="deck" key={index}>
          <p>{deck.name}</p>
        </div>
      );
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
