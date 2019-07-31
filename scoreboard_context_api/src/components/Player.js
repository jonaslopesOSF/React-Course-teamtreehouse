import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = { // because it is a class component
    index: PropTypes.number,
  }

  render() {
    const { index, } = this.props;

    return (
      <div className="player">
        <Consumer>
          { ({ actions, players }) => (
            <span className="player-name">
              <button 
                className="remove-player" 
                onClick={() => actions.removePlayer(players[index].id)}>
                ✖
              </button>

              {/* true or false */}
              <Icon isHighScore={players[index].score === actions.getHighScore()}/> 
              { players[index].name }
            </span>
          )}
        </Consumer>

        <Counter index={index} />
      </div>
    );
  }
}

export default Player;