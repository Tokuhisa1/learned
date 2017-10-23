import React, { Component } from 'react';
import Axios from 'axios';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      apiData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount() {
    // console.log(this.state.id);
    Axios.get(`http://memjogger.com/api/cardset/${this.state.id}?token=6dce93485a8fb619c6536793db63d60c`)
      .then(res => {
        // console.log(res.data.card_set);
        this.setState({
          apiData: res.data.card_set,
          apiDataLoaded: true,
        });
      });
  }

  showDeckOnPage() {
    return (
      <div className="deck">
        {console.log(this.state.apiData.name)}
        {this.state.apiData.name}
      </div>
    );
  }

  render() {
    return (
      <div id="deck-list">
        <div>
          {(this.state.apiDataLoaded) ? this.showDeckOnPage() : <p>Loading. . .</p>}
        </div>
      </div>
    );
  }
}

export default Deck;
