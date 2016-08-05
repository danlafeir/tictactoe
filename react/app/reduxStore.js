import { createStore } from 'redux'

const playerReducer = (state = "Player One", action) => {
	if(action.type = '#/player/change'){
		return action.currentPlayer
	}
	
	return state
}

module.exports = () => {
  if (!global.reduxStoreInstance) {
    global.reduxStoreInstance = createStore(playerReducer)
  }
  return global.reduxStoreInstance
};
