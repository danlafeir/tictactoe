import React from 'react';

import Square from './square'

class GameBoard extends React.Component {
  render() {
    return <div>
      <div style={styles.row}><Square/><Square/><Square/></div>
      <div style={styles.row}><Square/><Square/><Square/></div>
      <div style={styles.row}><Square/><Square/><Square/></div>
    </div>
  }
}

const styles = {
  row: {
    height: '144px',
    display: 'block'
  }
}

module.exports = GameBoard;