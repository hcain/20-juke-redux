import { createStore, applyMiddleware } from 'redux';
import initialState from './initialState';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const Store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));


const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';
// const action = { type: RECEIVE_ALBUMS_FROM_SERVER, albums: ['str'] };

const receiveAlbums = (albums) =>
  ({ type: RECEIVE_ALBUMS_FROM_SERVER, albums }
);

function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER:
      return Object.assign({}, state, { albums: action.albums });
    default: return state;
  }
}

Store.getState();
// Store.dispatch(receiveAlbums);
Store.getState();

export { Store, receiveAlbums };
