import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';
const Guest = ({name,
               isConfirmed,
               isEditing,
               handleConfirmation,
               handleToggleEditing,
               setName,
               handleRemove}) => (
  <li>
    <GuestName 
      isEditing={isEditing}
      handleNameEdits={event => setName(event.target.value)}>
      {name}
    </GuestName>

    <label>
      <input 
        type="checkbox" 
        checked={isConfirmed}
        onChange={handleConfirmation}/> Confirmed
    </label>

    <button onClick={handleToggleEditing}>
      { isEditing ? 'save' : 'edit'}
    </button>
    <button onClick={handleRemove}>remove</button>

  </li>
)

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

export default Guest;