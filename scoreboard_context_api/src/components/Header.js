import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {

  // const { players, title } = props; alternative to above arguments

  return (
    <header>
      <Stats players={ players }/>
        <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    id: PropTypes.number
  }).isRequired),
  title: PropTypes.string,
}

Header.defaultProps = {
  title: 'ScoreBoard',
}

export default Header;