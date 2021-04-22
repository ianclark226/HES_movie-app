/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import CriticPage from './components/criticpage';
import MoviePage from './components/moviepage';
import React, { useEffect, useState } from 'react'


import ReactPaginate from 'react-paginate'


import { Helmet } from 'react-helmet' // Header Generator
import { Switch, Route } from 'react-router-dom'



import HomePage from 'containers/HomePage/HomePage'


import '../../styles/styles.scss'
import { get, includes } from 'lodash';
import { render } from 'react-testing-library';

function App() {

  return (
    

    <Route>
      
    <Switch>
          {/* <Route path="/" component={HomePage} exact /> */}
          <Route path="/" exact render={() => <CriticPage /> } />
          <Route path="/moviepage" exact render={() => <MoviePage /> } />
        </Switch>
        </Route>
        

  )

 
  
       
}

export default App;