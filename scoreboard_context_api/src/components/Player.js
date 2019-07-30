import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = { // because it is a class component
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    score: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool.isRequired,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func,
  }

  render() {
    const { name,
            id,
            score,
            isHighScore,
            index, 
            removePlayer, 
            changeScore} = this.props;

    console.log(name + ' rendered')

    return (
      <div className="player">
        <span className="player-name">
          <button 
            className="remove-player" 
            onClick={() => removePlayer(id)}>✖</button>

          {/* true or false */}
          <Icon isHighScore={isHighScore}/> 
          { name }
        </span>

        <Counter 
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;