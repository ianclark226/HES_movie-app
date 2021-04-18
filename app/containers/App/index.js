/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, useState } from 'react'
import JsonData from '../../public/critics.json'
import ReactPaginate from 'react-paginate'


import { Helmet } from 'react-helmet' // Header Generator
import { Switch, Route } from 'react-router-dom'



import HomePage from 'containers/HomePage/HomePage'


import '../../styles/styles.scss'
import { get, includes } from 'lodash';

function App() {
 const [users, setUsers] = useState(JsonData.slice(0, 50));
 const [pageNumber, setPageNumber] = useState([0]);

const usersPerPage = 20;

const pagesVisited = pageNumber * usersPerPage;



const pageCount = Math.ceil(users.length / usersPerPage);

const changePage = ({selected}) => {
setPageNumber(selected)
}

  

  const [searchTerm, setSearchTerm] = useState('');



//GET CURRENT POSTS

  return (

    <div className="App">
      <header>
     
      <input 
      type="text" 
      placeholder="search critic" onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      {JsonData
      .filter((val) => {
        if(searchTerm === "") {
          return val;
        } else if (val.display_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      })
       
      .slice(pagesVisited, pagesVisited + usersPerPage)

      .map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.display_name}</p>
            <p>{val.sort_name}</p>
            <p>{val.status}</p>
            <p>{val.bio}</p>
            <p>{val.seo_name}</p>
            </div>
        )
      })}

      {/*  ADD PAGES FOR USERS */}

     <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    /> 
    </header>
    <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/home" component={HomePage} />
        </Switch>
    
          </div>
      )
  }
 

  export default App;
