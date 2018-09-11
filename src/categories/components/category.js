import React, {Component} from 'react'
import Playlist from '../../playlist/components/playlist'
import Play from '../../icons/components/play'
import FullScreen from '../../icons/components/full-screen'
import Pause from '../../icons/components/pause'
import Volume from '../../icons/components/volume'
import './category.css'
import Search from '../../widgets/containers/search'


class Category extends Component{
    render(){
        const category = this.props.categories

        return(
            <div className='Category'>
                <Search/>
{/*                <Play size={100} color='green'/>
                <Pause size={100} color='blue'/>
                <Volume size={100} color='grey'/>
                <FullScreen size={100} color='black'/>*/}
                {
                    category.map(i => {
                        return (
                            <Playlist {...i} key={i.id} handleOpenModal={this.props.handleOpenModal}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Category