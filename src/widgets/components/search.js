import React from 'react'
import './search.css'

const Search = props => (
    <form
        className='Search'
        onSubmit={props.handleSubmit}
    >
        <input
            ref={props.setRef}
            type="text"
            placeholder='Buscar'
            className='Search-input'
            name='search'
            onChange={props.handleChange}
            value={props.value}
            //defaultValue='luis fonsi'
        />
    </form>
)

export default Search