import React from 'react'
import reduxStore from './reduxStore'

class PlayerIndicator extends React.Component {
  render() {
    reduxStore().dispatch({
      type: '#/player/change',
      currentPlayer: "Player One"
    });

    return <div style={styles.indicator}>{reduxStore().getState()}</div>
  }
}

const styles = {
  indicator: {
    marginTop: '5px',
    marginBottom: '5px',
    textAlign: 'center',
    border: 'black 5px solid',
    padding: '5px',
    width: '100px'
  }
}

module.exports = PlayerIndicator
