import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = () => {

  // const { players, title } = props; alternative to above arguments

  return (
    <header>
      <Stats />
        <h1>ScoreBoard</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;