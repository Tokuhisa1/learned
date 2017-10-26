import React, { Component } from 'react';
import Axios from 'axios';

class Review extends Component {
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
}

export default Review;
