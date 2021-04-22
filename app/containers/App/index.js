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
import { Switch, Route, Link } from 'react-router-dom'



import HomePage from 'containers/HomePage/HomePage'


import '../../styles/styles.scss'
import { get, includes } from 'lodash';
import { render } from 'react-testing-library';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

function App() {

  return (
    

    <Route>


<Navbar className="border-bottom" bg="transparent" expand="lg">
          <NavbarBrand>Ian Clark</NavbarBrand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className= "ml-auto" >
              <Link className="nav-link" to="/">CriticPage</Link>
              <Link className="nav-link" to="/moviepage">MoviePage</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
    <Switch>
          {/* <Route path="/" component={HomePage} exact /> */}
          <Route path="/" exact render={() => <CriticPage /> } />
          <Route path="/moviepage" exact render={() => <MoviePage /> } />
        </Switch>
        </Route>
        

  )

 

       
}

export default App;