import React from 'react'
import './timer.css'


const leftPad = num =>{
    const pad = '00'
    return pad.substring(0, pad.length - num.length) + num
}

const formattedTime = (secs) => {
    const min = parseInt(secs/60, 10)
    const sec = parseInt(secs % 60, 10)
    return `${min}:${leftPad(sec.toString())}`
}

const Timer = props => (
    <div className='Timer'>
        <p>
            <span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
        </p>
    </div>
)

export default Timer