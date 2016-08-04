import React from 'react'
import reduxStore from './reduxStore'

class PlayerIndicator extends React.Component {
  render() {
    return <div style={styles.indicator}>Player One</div>
  }
}

const styles = {
  indicator: {
    marginTop: '5px',
    marginBottom: '5px',
    border: 'black 5px solid',
    padding: '10px',
    width: '100px'
  }
}

module.exports = PlayerIndicator
