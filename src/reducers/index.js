import { combineReducers } from 'redux';


const songs = () => {
    return [
        { title: 'song1', duration: 'song1-duration'},
        { title: 'song2', duration: 'song2-duration'},
        { title: 'song3', duration: 'song3-duration'},
        { title: 'song4', duration: 'song4-duration'},
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songs,
    selectedSong: selectedSongReducer
});