import React, { Component } from 'react';
import './App.css';
import "es6-promise/auto";
import fetchJsonp from 'fetch-jsonp';
import { Container, Row, Col } from 'reactstrap';

export class TweetBoard extends Component {
 constructor(props){
 	super(props);
 	this.state={items:[]};
 }

 componentDidUpdate(prev){

 if (this.props.passedSearch !== prev.passedSearch) {
 	fetchJsonp('http://tweetsaver.herokuapp.com/?callback=cb&q='+this.props.passedSearch+'&count=20', {
    jsonpCallbackFunction: 'cb',
  })
  .then(res => res.json()).then(json => {
    this.setState({
    	items: json.tweets
    });
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
 }
 }

 drag = (ev) => {
 	ev.dataTransfer.setData("Text", ev.target.id);
 }
  render() {
  	const {items } = this.state;
  	if (items === null) {
    return <Container><Row>Error on Tweets</Row></Container>;
  	}
  	else {
    return (
      <div className="board">
      <Container>
          {items.map(item => (
            <Row key={item.id} id={item.id} draggable onDragStart={this.drag}>
            <Col md="2"><img src={item.user.profileImageUrlHttps} alt="user_image"/></Col>
            <Col md="7">
            <Row> <b>{item.user.name}</b> &nbsp; @{item.user.screenName} </Row>
            <Row>{item.text}</Row>
            </Col>
            <Col md="2">{new Intl.DateTimeFormat('en-US').format(item.createdAt)}</Col>
            </Row>
          ))}
          </Container>
      </div>
    );
	}
  }
}

