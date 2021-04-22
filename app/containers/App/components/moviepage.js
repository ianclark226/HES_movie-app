import React, { useEffect, useState } from 'react'
import JsonData from '../../../public/movie-reviews.json';
import ReactPaginate from 'react-paginate'








import '../../../styles/styles.scss'
import { get, includes } from 'lodash';


function MoviePage() {
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
          <h1> Movies</h1>
      </header>
     
      <input 
      type="text" 
      placeholder="search movie" onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      {JsonData
      .filter((val) => {
        if(searchTerm === "") {
          return val;
        } else if (val.publication_date.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      })
       
      .slice(pagesVisited, pagesVisited + usersPerPage)

      .map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.display_title}</p>
            <p>{val.mpaa_rating}</p>
            <p>{val.critics_pick}</p>
            <p>{val.byline}</p>
            <p>{val.headline}</p>
            <p>{val.summary_short}</p>
            <p>{val.publication_date}</p>
            <p>{val.opening_date}</p>
            <p>{val.date_updated}</p>
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
 

  export default MoviePage;