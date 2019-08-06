import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';

class Scoreboard extends Component {

  static propTypes = {
    players: PropTypes.array.isRequired
  }

  render() {

    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPLayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePLayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = player.map((player, index) => (
      <Player 
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePLayer={removePlayer}
      />
    ))

    return (
      <div className="scoreboard">
        <Header players={players} />

        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};

// ----------------------------------------------------------

const mapStateToProps = state => {
  {
    players: state
  }
};

export default connect(mapStateToProps)(Scoreboard);
