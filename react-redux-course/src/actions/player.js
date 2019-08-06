import * as PlayerActionTypes from '../actiontypes/player';

export const addPLayer = (name) => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name,
  };
};

export const removePLayer = (index) => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index,
  };
};

export const updatePLayerScore = (index, score) => {
  return {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    index,
    score,
  };
};