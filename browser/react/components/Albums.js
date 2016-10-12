import React from 'react';

const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
  }


export default class Albums extends React.Component {

    constructor(props) {
        super(props);
    }

  componentDidMount () {
    fetch('/api/albums')
      .then(res => res.json())
      .then(albums => this.props.loadAlbums(albums.map(convertAlbum)));
  }

    render() {
      return (
      <div>
      <h3>Albums</h3>
        <div className="row">
      {this.props.albums.map(function (album) {
        return (
                <div className="col-xs-4" key={album.id}>
                <a className="thumbnail" href="#">
                    <img src={album.imageUrl}/>
                    <div className="caption">
                    <h5>
                        <span>{album.name}</span>
                    </h5>
                    <small>NUMBER OF SONGS HERE songs</small>
                    </div>
                </a>
                </div>
          )
      })}
        </div>
      </div>
    )
    }

}
