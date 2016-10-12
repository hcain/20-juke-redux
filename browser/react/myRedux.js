import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

var mainReducer = combineReducers({
  albums: albumReducer
})

// creating store and passing it middleware for logging and treating action creators as functions
const logger = createLogger();
const Store = createStore(mainReducer, applyMiddleware(logger, thunkMiddleware));

// helper functions for dealing with albums
const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
  }

// action types
const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';
const START_PLAYING = 'START_PLAYING';
const STOP_PLAYING = 'STOP_PLAYING';
const SET_CURRENT_SONG = 'SET_CURRENT_SONG';

// action creator that is dispatched and gets albums
const receiveAlbums = (albums) =>
  ({ type: RECEIVE_ALBUMS_FROM_SERVER,
     albums }
);

// action creator that fetches albums from server and calls receiveAlbums
const fetchAlbumsFromServer = () => {
  return (dispatch) => {
    fetch('api/albums')
      .then(res => res.json())
      .then(albums => albums.map(convertAlbum))
      .then(arrayOfAlbums => dispatch(receiveAlbums(arrayOfAlbums)))
  }
}

// reducer functions
function albumReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER:
      // return Object.assign({}, state, action.albums);
      return action.albums.slice(0)
    default: return state;
  }
}


// Store.getState();
// Store.getState();

export { Store, receiveAlbums, fetchAlbumsFromServer };
