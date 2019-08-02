import React from "react";
import PropTypes from 'prop-types';

import ConfirmedFilter from "./ConfirmedFilter";
import Counter from "./Counter";
import GuestList from "./GuestList";

const MainContent = ({toggleFilter,
                      toggleConfirmation,
                      toggleEditing,
                      setName,
                      removeGuest,
                      isFiltered,
                      totalInvited,
                      numberAttending,
                      numberUnconfirmed,
                      guests,
                      pendingGuest}) => (

  <div className="main">
    <ConfirmedFilter 
      toggleFilter={toggleFilter}
      isFiltered={isFiltered}
    /> 

    <Counter
      totalInvinted={totalInvited}
      numberAttending={numberAttending}
      numberUnconfirmed={numberUnconfirmed}
    />

    <GuestList
      guests={guests}
      toggleConfirmation={toggleConfirmation}
      toggleEditing={toggleEditing}
      setName={setName}
      removeGuest={removeGuest}
      isFiltered={isFiltered}
      pendingGuest={pendingGuest}
    />
  </div>
);

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  guests: PropTypes.array.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default MainContent;
