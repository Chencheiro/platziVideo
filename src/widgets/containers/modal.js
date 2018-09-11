import React, {Component} from 'react'
import {createPortal} from 'react-dom'

class ModalContainer extends Component{
    render(){
        return createPortal(/*qué*/this.props.children, /*dónde*/ document.getElementById('modal-container'))
    }
}

export default ModalContainer