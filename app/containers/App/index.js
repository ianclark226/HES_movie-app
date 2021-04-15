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
import Posts from './components/posts'
import Critic from './components/critics';
import { Helmet } from 'react-helmet' // Header Generator
import { Switch, Route } from 'react-router-dom'
import PostList from './components/post_list';


import HomePage from 'containers/HomePage/HomePage'

// const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

import '../../styles/styles.scss'
import { get } from 'lodash';

function App() {
 const [users, setUsers] = useState(JsonData.slice(0, 50));
 const [pageNumber, setPageNumber] = useState([0]);

const usersPerPage = 10;

const pagesVisited = pageNumber * usersPerPage;

const displayUsers = users
.slice(pagesVisited, pagesVisited + usersPerPage)
.map((user) => {
  return (
    <div className="user">
      <h3>{user.display_name}</h3>
      <h3>{user.sort_name}</h3>
      <h3>{user.status}</h3>
      <h3>{user.bio}</h3>
      <h3>{user.seo_name}</h3>

      
      </div>
  )
})

const pageCount = Math.ceil(users.length / usersPerPage);

const changePage = ({selected}) => {
setPageNumber(selected)
}

  
//   const [critics, setCritics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     getCritics(FEATURED_API);

//   },[]);

//     const getCritics = (API) => {
//     fetch(API)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       setCritics(data.results);
//     })

    
// }

 
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
getCritics(SEARCH_API + searchTerm);
    
    
    setSearchTerm('');
  }

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

//GET CURRENT POSTS

  return (

    <div className="App">
      <header>
      <form onSubmit={handleOnSubmit}>
      <input 
      className="search" 
      type="search" 
      placeholder="search critic" 
      value={searchTerm} 
      onChange={handleOnChange}/>
      </form>
    </header>
    {displayUsers} <ReactPaginate
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
          </div>
      )
  }
  







  // <div>
    // <header>
    //   <form onSubmit={handleOnSubmit}>
    //   <input 
    //   className="search" 
    //   type="search" 
    //   placeholder="search critic" 
    //   value={searchTerm} 
    //   onChange={handleOnChange}/>
    //   </form>
    // </header>
  //   <div className="critic-container">
  //   {critics.length > 0 && critics
  //   .map((critic) => 
  //     <Critic key ={critic.id} {...critic} />
      

  // )}
  
  // </div>
  // <Helmet defaultTitle="Everyone's a critic">
  //     <meta name="description" content="React Movie Reviews" />
  //   </Helmet>

  //   <Switch>
  //     <Route path="/" component={HomePage} exact />
  //     <Route path="/home" component={HomePage} />
  //   </Switch>
  // </div>
 

  export default App;
