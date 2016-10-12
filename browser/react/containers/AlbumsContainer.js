import { connect } from 'react-redux';
import { react } from 'react';
import Albums from '../components/Albums';
import { receiveAlbums, fetchAlbumsFromServer } from '../myRedux';


const mapStateToProps = (state, props) => ({albums: state.albums});

const mapDispatchToProps = (dispatch, props) => ({
    loadAlbums () {
        dispatch(fetchAlbumsFromServer());
    }
});

const AlbumsContainer = connect (
    mapStateToProps,
    mapDispatchToProps
    )(Albums);


export default AlbumsContainer;
