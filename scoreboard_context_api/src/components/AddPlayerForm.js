import React from 'react';
import { Consumer } from './Context';

const AddPlayerForm = () => {
  let playerInput = React.createRef();

  return (
    <Consumer>
      { ({ actions }) => {
        let handleSubmit = (event) => {
          event.preventDefault();
          actions.addPlayer(playerInput.current.value);
          event.currentTarget.reset();
        }

        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={playerInput}
              placeholder="Enter a player's name"
            />
            <input 
              type="submit"
              value="Add Player"
            />
          </form>
        );
      }}
    </Consumer>
  );
}

export default AddPlayerForm;