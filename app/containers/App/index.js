/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */


import MoviePage from './components/moviepage';
import React from 'react';




import { Switch, Route, Link } from 'react-router-dom'






import '../../styles/styles.scss'

import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';

function App() {

  return (
    

    <Route>


<Navbar className="border-bottom" bg="transparent" expand="lg">
       

          
          <Navbar.Collapse id="navbar-toggle">
            <Nav className= "ml-auto" >
              <Link className="nav-link" to="/">MoviePage</Link>
              <Link className="nav-link" to="/history">History</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
    <Switch>
      
          <Route path="/" exact render={() => <MoviePage /> } />
          <Route path="/history" exact render={() => <MoviePage /> } />
        </Switch>
        </Route>
        

  )

 

       
}

export default App;