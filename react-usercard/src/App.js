
import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    myGithub: [],
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/charlie-may86')
      .then(res =>{
        
        this.setState({
          myGithub: res.data
        })
        console.log(this.state)
      })
      .catch()
  }

  render() {
    return (
      <div>
        <h1>This is Chas-e's App</h1>
        <h2>{this.state.myGithub.avatar_url}</h2>
        <img src={this.state.myGithub.avatar_url} alt='avatar' width='200'/>
      </div>
    );
  }
}

export default App;
