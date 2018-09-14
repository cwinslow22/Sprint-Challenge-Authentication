import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    jokes: [],
  };

  render() {
    return (
      <div>
          <p>Here are some jokes?</p>
          <ul>
              {this.state.jokes.map(joke => (
              <li key={joke.id}>{joke.setup} please don't ... {joke.punchline}</li>
              ))}
          </ul>
      </div>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const reqOptions = {
        headers: {
            Authorization: token,
        },
    };

    axios
        .get('http://localhost:3300/api/jokes', reqOptions)
        .then(res => {
            console.log('jokes data:', res.data);
            this.setState({ jokes: res.data }); // or this.setState({ users: res.data }) if using res.json( users ); in the server index file for the get/api/users endpoint
        })
        .catch(err => {
            console.error('Axios Failed', err ); // res.response.data
            this.props.history.push('/signin');
        });
    // console.log('state', this.state);
  };
}

export default Jokes;