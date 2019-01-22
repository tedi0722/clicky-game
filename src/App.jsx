import React, { Component } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import cards from './cards.json';

import './App.css';


function shuffleCard(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0,
    clickedCards: [],
    message: ""
  }

  handleClick = id => {
    if (this.state.clickedCards.indexOf(id) === -1) {
      this.handleScore();
      this.setState({
        clickedCards: this.state.clickedCards.concat(id)
      });
    } else {
      this.handleReset();
    }
  }

  handleShuffle = () => {
    let shuffledCards = shuffleCard(cards);
    this.setState({
      cards: shuffledCards
    });
  }

  handleScore = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      message: ""
    });
    if (newScore > this.state.topScore) {
      this.setState({
        topScore: newScore
      });
    } else if (newScore === 12) {
      // this.setState({
      //   message: "You've Won"
      // });
      console.log("test");
    }
    // this.handleShuffle();
  }
  
  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clickedCards: []
    });
    this.handleShuffle();
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
        <div className="card-wrapper">
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              name={card.name}
              handleClick={this.handleClick}
              handleShuffle={this.handleShuffle}
              handleScore={this.handleScore}
              handleReset={this.handleReset}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
}


