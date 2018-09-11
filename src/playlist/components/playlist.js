import React, {Component} from 'react'
import Media from "./media";
import './playlist.css'

class Playlist extends Component{
    render(){
        const playlist = this.props.playlist
        //console.log(this.props.data)
        return(
            <div className='Playlist'>
                <div className='Playlist-titles'>
                    <p className='Playlist-description'>{this.props.description}</p>
                    <h1 className='Playlist-title'>{this.props.title}</h1>
                </div>
                <br/>
                <br/>
                <br/>
                {
                    playlist.map(i => {
                        return <Media {...i} key={i.id} handleClick={this.props.handleOpenModal}/>
                    })
                }
            </div>
        )
    }
}

export default Playlist