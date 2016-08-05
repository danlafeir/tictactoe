import React from 'react'
import reduxStore from './reduxStore'

class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: undefined
    }
  }

  _click(){
    if(!this.state.value){
      this.setState({value: reduxStore().getState()})
      reduxStore().dispatch({
        type: '#/player/change'
      })
    }
  }

  render() {
    return <div style={styles.box} onClick={() => this._click()}>
      <p style={styles.symbol}>{this.state.value}</p>
    </div>
  }
}

const styles = {
  box: {
    border: '2px solid black',
    height: '140px',
    width: '140px',
    margin: '0px',
    float: 'left'
  },
  symbol: {
    width: '105px',
    margin: 'auto',
    fontSize: '150px',
    lineHeight: '142px'
  }
}

module.exports = Square
