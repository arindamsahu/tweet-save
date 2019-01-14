import React, { Component } from 'react';
import './App.css';
import { Button, Input, Col } from 'reactstrap';

export class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {search:""};
  }

  onSearch = () => {
    this.props.search(this.state.search);
  }
  onChange = (e) => {
    this.setState({search: e.target.value});
  }
  render() {
    return (
      <div>
        <Col sm={10}>
        <Input type="text" className="search-bar" 
        placeholder="Search Tweets" onChange={this.onChange}/>
        </Col>
        <Button className="search-button" onClick={this.onSearch}>Search</Button>
      </div>
    );
  }
}

