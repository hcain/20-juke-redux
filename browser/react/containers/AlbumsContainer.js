import { connect } from 'react-redux';
import { react } from 'react';
import Albums from '../components/Albums';

const mapStateToProps = (state, props) => {albums: state.albums};

const mapDispatchToProps = (dispatch, props) => ({
    loadAlbums (albums) {
        dispatch({type: RECEIVE_ALBUMS_FROM_SERVER, albums: albums});
    }
});

const AlbumsContainer = connect (
    mapStateToProps,
    mapDispatchToProps
    )(Albums);


export default AlbumsContainer;
