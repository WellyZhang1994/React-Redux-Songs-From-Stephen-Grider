import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component{
    renderList(){
        return(
            <div className="item" key={this.props.jeffs.name}>
                <div className="right floated content">
                    <button className="ui button primary" onClick={this.renderName(this.props.jeffs)}>
                        select
                    </button>
                </div>
                <div className="content"></div>
            </div>
        );
    }

    render(){
        // this.props === { songs: state.songs }
        //console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }

    renderName(values){
        console.log(values);
    }
}

//change state to props
const getMyState = (state) =>{
    //console.log(state);
    return {jeffs: state.jeff};
}

//first() put state to props function and also let action to reducer to change the state.
//second() put props to component.
export default connect(getMyState ,{  selectSong  })(SongList);


// function connect(){
//   return function(){
//     return 'Hi, there';  
//   }
// }

// connect()  -> null
// connect()() -> Hi there