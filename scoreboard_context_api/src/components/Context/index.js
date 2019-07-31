import React, { Component } from 'react';

const ScoreBoardContext = React.createContext();

export class Provider extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  handleAddPlayer = playerName => {
    const newPlayer = {
      name: playerName,
      score: 0,
      id: this.state.players.length + 1,
    }

    this.setState( prevState => { //call back function
      return {
        players: [
          ...prevState.players, //making a copy of right way
          newPlayer
        ]   
      };
    });
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  render () {
    return (
      <ScoreBoardContext.Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          getHighScore: this.getHighScore,
          addPlayer: this.handleAddPlayer,
        },
      }}>
        { this.props.children }
      </ScoreBoardContext.Provider>
    );
  }
}
export const Consumer = ScoreBoardContext.Consumer;