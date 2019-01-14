import React, { Component } from 'react';
import './App.css';
import {Row} from 'reactstrap';

export class SavedTweets extends Component {
  
  allowDrop = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
  }
  drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let arr = [];
    if(sessionStorage.getItem("s_data") !== null){
    	arr = JSON.parse(sessionStorage.getItem("s_data"));
    }
    arr.push(document.getElementById(data).innerHTML);
    sessionStorage.setItem("s_data", JSON.stringify(arr));
    ev.target.appendChild(document.getElementById(data));
  }

  render() {
  	const items = JSON.parse(sessionStorage.getItem("s_data"));
  	let arr = [];
  	if(items){
  	items.map((item, idx) => {
  		function createMarkup() { return {__html: item}; };
  		arr.push(<Row key={idx} dangerouslySetInnerHTML={createMarkup()} />);
  	});
  }
    return (
      <div className="container">
      <div className="saved-board" onDrop={(event => this.drop(event))} 
         onDragOver={(event => this.allowDrop(event))}>
      {arr}
       </div>      
      </div>
    );
  }
}
