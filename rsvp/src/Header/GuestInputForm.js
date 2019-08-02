import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = ({newGuestSubmitHandler,
                         handleNameInput,
                         pendingGuest}) => (

  <form onSubmit={newGuestSubmitHandler}>
      <input
        type="text"
        onChange={handleNameInput}
        value={pendingGuest}
        placeholder="Invite Someone"
      />
      <button type="submit" name="submit" value="submit">
        Submit
      </button>
    </form>
);

GuestInputForm.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default GuestInputForm;