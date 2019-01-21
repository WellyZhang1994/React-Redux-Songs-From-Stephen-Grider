import { combineReducers } from 'redux';


const jeffReducer = () => {
    return [
        { name: '楊宗翰', dept: '精算二部-決策支援系統科'},
        { name: '廖登義', dept: '精算二部-決策支援系統科'},
        { name: '蘇翠淑', dept: '精算二部-決策支援系統科'},
        { name: '莊承諺', dept: '精算二部-決策支援系統科'},
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    jeff: jeffReducer,
    selectedSong: selectedSongReducer
});