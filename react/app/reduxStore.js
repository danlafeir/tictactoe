import { createStore } from 'redux'

const playerReducer = (state = 'X', action) => {
	if(action.type = '#/player/change'){
		return state === 'X' ? 'O' : 'X'
	}

	return state
}

module.exports = () => {
  if (!global.reduxStoreInstance) {
    global.reduxStoreInstance = createStore(playerReducer)
  }
  return global.reduxStoreInstance
};
