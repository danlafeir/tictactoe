import React from 'react'

import GameBoard from './gameboard'
import PlayerIndicator from './playerIndicator'

class TicTacToe extends React.Component {
  render() {
    return <div style={styles.container}>
      <h1 style={styles.header}>Tic Tac Toe Game</h1>
      <PlayerIndicator/>
      <GameBoard/>
    </div>
  }
}

const styles = {
  container: {
    margin: '0 auto',
    width: '500px'
  },
  header: {
    margin: 'auto 0'
  }
};

module.exports = TicTacToe;
