/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, useState } from 'react'
import Critic from './components/critics';
import { Helmet } from 'react-helmet' // Header Generator
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/HomePage'

const CRITIC_API = "https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

import '../../styles/styles.scss'

function App() {
  const critics = [critics, setCritics] = useState([]);

  useEffect(() =>{
    fetch(CRITIC_API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCritics(data);
    })

    
  })
  return <div>{critics.length > 0 && critics
    .map((critic) => 
      <Critic />
      

  )}
  <Helmet defaultTitle="Everyone's a critic">
      <meta name="description" content="React Movie Reviews" />
    </Helmet>

    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/home" component={HomePage} />
    </Switch>
  </div>
  
}

  export default App;
