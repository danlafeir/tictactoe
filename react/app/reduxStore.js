import { createStore } from 'redux'

const playerReducer = (state, action) => {
	if(action.type = '#/player/change'){
		return action.currentPlayer
	}
}

module.exports = () => {
  if (!global.reduxStoreInstance) {
    global.reduxStoreInstance = createStore(playerReducer)
  }
  return global.reduxStoreInstance
};
