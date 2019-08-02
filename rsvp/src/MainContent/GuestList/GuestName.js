import React from 'react';
import PropTypes from 'prop-types';

const GuestName = ({isEditing, children, handleNameEdits}) => {
  if (isEditing) {
    return(
      <input 
        type="text" 
        value={children} 
        onChange={handleNameEdits} />
    );
  } else {
    return (
      <span>
        {children}
      </span>
    )
  }
}

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
}

export default GuestName;