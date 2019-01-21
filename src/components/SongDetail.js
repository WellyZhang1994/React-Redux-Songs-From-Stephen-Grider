import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if(!props.song){
        return <div>Select a song</div>;
    }
   
    return (
        <div>
            <h3>Deatails for:</h3>
            <p>
                Title: {props.song.title}
                <br />
                Duration: {props.song.duration}
            </p>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {song: state.selectedSong};
}

//first() put state to props function and also let action to reducer to change the state.
//second() put props to component.
export default connect(mapStateToProps)(SongDetail);