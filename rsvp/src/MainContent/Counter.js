import React from "react";
import PropTypes from "prop-types";

const Counter = ({numberAttending,
                  numberUnconfirmed,
                  totalInvinted}) => (

  <table className="counter">
    <tbody>
      <tr>
        <td>Attending:</td>
        <td>{numberAttending}</td>
      </tr>
      <tr>
        <td>Unconfirmed:</td>
        <td>{numberUnconfirmed}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{totalInvinted}</td>
      </tr>
    </tbody>
  </table>
);

Counter.propTypes = {
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  totalInvinted: PropTypes.number.isRequired,
}

export default Counter;
