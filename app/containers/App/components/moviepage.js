import React, { useEffect, useState } from 'react'
import MovieData from '../../../public/movie-reviews.json'
import CriticData from '../../../public/critics.json'
import ReactPaginate from 'react-paginate'
import Modal from './modal'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBalanceScale, faHome, faPersonBooth, faCreditCard, faDna } from '@fortawesome/free-solid-svg-icons';

import '../../../styles/styles.scss'
import { get, includes } from 'lodash'

function MoviePage() {
  const [users, setUsers] = useState(MovieData.slice(0, 50))
  const [pageNumber, setPageNumber] = useState([0])
  const [isOpen, setIsOpen] = useState(false)

  const usersPerPage = 20

  const pagesVisited = pageNumber * usersPerPage

  const pageCount = Math.ceil(users.length / usersPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const [searchTerm, setSearchTerm] = useState('')

  let movieName;

  //GET CURRENT POSTS

  return (
    <div className="App">
      <header>
        <h1> Movies</h1>
      </header>

      <input
        type="text"
        placeholder="search movie"
        onChange={e => {
          setSearchTerm(e.target.value)
        }}
      />
      <div className="topics">
                  <ul>
                      <li>Name</li>
                      <li>Rating</li>
                      <li>Publish Date</li>
                      <li>Critics Choice</li>
                  </ul>
                  </div>
      {MovieData.filter(val => {
        if (searchTerm === '') {
          return val
        } else if (
          val.critics_pick, val.publication_date, val.display_title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val
        
        }
      })

        .slice(pagesVisited, pagesVisited + usersPerPage)

        .map((val, key) => {
          return (
              
                  
            <div className="user" key={key}>
                
                
              <p>{val.display_title}</p>
              <p>{val.mpaa_rating}</p>
              <p>{val.publication_date}</p>
              <p>{val.critics_pick}</p>
              <div className="model-btn">
                <div onClick={() => console.log('clicked')}>
                  <button onClick={() => setIsOpen(true)}>Review</button>
                </div>
              </div>
            </div>
            
          )
        })}
        
        

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal-container" id="modal">
          <div className="modal">
            <div className="modal-content">
              {MovieData.map((val, key) => {
                  return (
                      
                    <div className="info" key={key}>
                        
                        
                        {/* <p>{val.id[0]}</p> */}
                      <p>{val.display_name}</p>
                      <p>{val.multimedia.src}</p>
                      <p>{val.mpaa_rating}</p>
                      <p>{val.critics_pick}</p>
                      <p>{val.headline}</p>
                      <p>{val.summary_short}</p>
                      <p>{val.byline}</p>
                      <p>{val.link.url}</p>
                      
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </Modal>

      {/*  ADD PAGES FOR USERS */}

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />

    </div>
  )
}

export default MoviePage
