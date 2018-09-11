import React from 'react'
import {render} from 'react-dom'
//import Category from '../playlist/components/category'
import Home from '../pages/containers/home'
import data from '../api.json'

// console.log("Hola mundo")

const homeContainer = document.getElementById('home-container')
//const holaMundo = <h1>Hola Mundo!</h1>

render(<Home data={data}/>, homeContainer)