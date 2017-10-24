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
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      name: e.target.value,
    });

  //   Axios.post('http://memjogger.com/api/cardset?token=6dce93485a8fb619c6536793db63d60c',
  //     data: {name: this.state.name})
  //     .then(res => {
  //       console.log(res);
  //     })
  // }
  console.log(e.target.value)
  console.log(this.state.name,'this is the state')
}
// handleClick(e){
//  let inp =  document.getElementById('addDeck').value
//   this.setState({
//     name:inp
//   })

//   var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://memjogger.com/api/cardset",
//   "method": "POST",
//   "headers": {
//     "cache-control": "no-cache",
//     "postman-token": "e79a81faf1232b58ab8cd2fae76aa885"
//   },
//   "data": {name:this.state.name}
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
//      Axios.post('http://'+this.state.name+'memjogger.com/api/cardset?token=e79a81faf1232b58ab8cd2fae76aa885')
//     //   .then(res => {
//     //     console.log(res,'this is the res');
//     //   })
//   console.log(this.state.name,'this is the name in state')
// }

handleClick(e){
 let inp =  document.getElementById('addDeck').value
  this.setState({
    name:inp
  })

  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://memjogger.com/api/cardset?",
  "headers": {
    "postman-token": "6dce93485a8fb619c6536793db63d60c"
  },
  "data": this.state.name
}
console.log(settings)


     Axios.post('http://memjogger.com/api/cardset?token=6dce93485a8fb619c6536793db63d60c'+this.state.name)
       .then(res => {
         console.log(res,'this is the res');
       })
  console.log(this.state.name,'this is the name in state')
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
        <Input id='input'inputValue={this.state.inputValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <button onClick={this.handleClick}>Click</button>
        <div id="deck-list">
          {(this.state.apiDataLoaded) ? this.showDecksOnPage() : <p>Loading. . .</p>}
        </div>
      </div>
    );
  }
}

export default DeckList;
