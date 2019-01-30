import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component{
    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.selectSong(song)}>
                            select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }

    render(){
        // this.props === { songs: state.songs }
        //console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }

    selectSong = (song)=>{
        this.props.selectSong(song);
    }
}

//change state to props
const getMyState = (state) =>{
    //console.log(state);
    return {songs: state.songs};
}

//first() put state to props function and also let action to reducer to change the state.
//second() put props to component.
export default connect(getMyState ,{ selectSong })(SongList);


// function connect(){
//   return function(){
//     return 'Hi, there';  
//   }
// }

// connect()  -> null
// connect()() -> Hi there