import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component{
    state = {
        author: "Isaac De la Cruz"
    }
    /*constructor(props){
        super(props)
        //this.handleClick = this.handleClick.bind(this)
        this.state = {
            author: props.author
        }
    }*/

    /*handleClick = event =>{
       // console.log(this.props.title)
        this.setState({
            author: 'Pancho',
        })
    }*/

    render(){
        const styles = {
            container:{
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return(
            <div className="Media" onClick={this.props.handleClick}>
                <div>
                    <img
                    src={this.props.cover}
                    alt=""
                    width={260}
                    height={160}
                    />
                    <h3>{this.props.title}</h3>
                    <p>{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['audio', 'video']),
}

export default Media