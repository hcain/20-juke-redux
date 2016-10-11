import { createStore } from 'redux';
import initialState from './initialState';


const Store = createStore(reducer);


const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';
const action = { type: RECEIVE_ALBUMS_FROM_SERVER, albums: ['str'] };

function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER:
      return Object.assign({}, state, { albums: action.albums });
    default: return state;
  }
}

Store.getState();
Store.dispatch(action);
Store.getState();

export default Store;
