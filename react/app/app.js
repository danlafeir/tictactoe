import React from 'react';
import ReactDOM from 'react-dom';

import GameBoard from './gameboard';

class TicTacToe extends React.Component {
  render() {
    return <div style={styles.container}>
      <h1 style={styles.header}>Tic Tac Toe Game</h1>
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

ReactDOM.render(<TicTacToe/>, document.getElementById('app'));