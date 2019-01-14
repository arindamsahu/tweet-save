import React, { Component } from 'react';
import {SearchBar} from './SearchBar.js';
 import {TweetBoard} from './TweetBoard.js';
 import {SavedTweets} from './SavedTweets.js';
 import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {search:""};
  }
  myCallBack = (data) => {
    this.setState({search: data});
  }
  render() {
    return (
      <div className="App">
      <Container>
        <h3>Tweet Saver </h3>
        <hr></hr>
        <Row>
        <Col><SearchBar search={this.myCallBack}></SearchBar></Col>
        <Col>Saved Tweets</Col>
        </Row>
         <Row>
         <Col><TweetBoard passedSearch={this.state.search}></TweetBoard></Col>
         <Col><SavedTweets></SavedTweets></Col>
         </Row>
         </Container>
        
      </div>
    );
  }
}

export default App;
