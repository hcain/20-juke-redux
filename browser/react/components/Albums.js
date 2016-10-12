import React from 'react';



export default class Albums extends React.Component {

    constructor(props) {
        super(props);
    }

  componentDidMount () {
    this.props.loadAlbums();
  }


    render() {
      console.log('ALBUMS', this.props.albums)
      console.log('PROPS', this.props)
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
                    <small>{album.songs.length}
                    {album.songs.length === 1 ? ' song':' songs'}</small>
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


// fetch('/api/albums')
//   .then(res => res.json())
//   .then(albums => this.props.loadAlbums(albums.map(convertAlbum)));
