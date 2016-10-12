import { createStore, applyMiddleware } from 'redux';
import initialState from './initialState';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const Store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
  }

const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';

const receiveAlbums = (albums) =>
  ({ type: RECEIVE_ALBUMS_FROM_SERVER,
     albums }
);

const fetchAlbumsFromServer = () => {
  return (dispatch) => {
    fetch('api/albums')
      .then(res => res.json())
      .then(albums => albums.map(convertAlbum))
      .then(arrayOfAlbums => dispatch(receiveAlbums(arrayOfAlbums)))
  }
}


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

export { Store, receiveAlbums, fetchAlbumsFromServer };
