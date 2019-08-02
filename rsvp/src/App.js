import React, { Component } from "react";
import './App.css';

import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [],
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map( guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmation = id => this.toggleGuestProperty("isConfirmed", id);

  toggleEditing = id => this.toggleGuestProperty("isEditing", id);

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = event => this.setState({ pendingGuest: event.target.value });

  setName = (name, id) =>
    this.setState({
      guests: this.state.guests.map( guest => {
        if (id === guest.id) {
          return {
            ...guest,
            name
            // its above make a copy of the old guest and update your name
          };
        } else {
          return guest;
        }
      })
    }); // edit guest

  newGuestSubmitHandler = event => {
    event.preventDefault();

    const id = this.newGuestId();
    const newGuest = {
      name: this.state.pendingGuest,
      isConfirmed: false,
      isEditing: false,
      id,
    };
    const guests = [newGuest, ...this.state.guests];

    this.setState({
      guests,
      pendingGuest: ""
    });
  };

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header 
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />

        <MainContent 
          toggleFilter={this.toggleFilter}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
