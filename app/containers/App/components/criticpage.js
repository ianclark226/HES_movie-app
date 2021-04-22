import React, { useEffect, useState } from 'react'
import JsonData from '../../../public/critics.json';
import ReactPaginate from 'react-paginate'


import { Helmet } from 'react-helmet' // Header Generator
import { Switch, Route } from 'react-router-dom'



import HomePage from 'containers/HomePage/HomePage'
// import MoviePage from './moviepage';


import '../../../styles/styles.scss'
import { get, includes } from 'lodash';


function CriticPage() {
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
          <h1> Critics</h1>
      </header>
     
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
    
    
        {/* SUDO CODE FOR STUFF I DID NOT COMPLETE */}

        {/* -IMPORT MOVIE REVIEWS THE SAME WAY I DID WITH CRITICS */}

        {/* -MAKE AN ONCLICK EVENT FOR THE CRITIC THAT REVIEWED THE SPECIFIC MOVIE */}

        {/* USE THE FILTER MORE FUNCTIONALBE WITH SPECIFIC DETAILS WITHIN THE REQUIREMENTS IN THE EXISTING CODE FOR NAME OF CRITIC */}

    
          </div>
      )
  }
 

  export default CriticPage;