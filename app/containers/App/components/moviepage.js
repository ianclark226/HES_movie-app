import React, { useEffect, useState } from 'react'
import JsonData from '../../../public/movie-reviews.json'
import ReactPaginate from 'react-paginate'
import Modal from './modal'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBalanceScale, faHome, faPersonBooth, faCreditCard, faDna } from '@fortawesome/free-solid-svg-icons';

import '../../../styles/styles.scss'
import { get, includes } from 'lodash'

function MoviePage() {
  const [users, setUsers] = useState(JsonData.slice(0, 50))
  const [pageNumber, setPageNumber] = useState([0])
  const [isOpen, setIsOpen] = useState(false)

  const usersPerPage = 20

  const pagesVisited = pageNumber * usersPerPage

  const pageCount = Math.ceil(users.length / usersPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const [searchTerm, setSearchTerm] = useState('')

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
      {JsonData.filter(val => {
        if (searchTerm === '') {
          return val
        } else if (
          val.display_title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val
        } else if (
          val.mpaa_rating.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val
        } else if (
          val.publication_date.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val
        } else if (
          val.critics_pick.toLowerCase().includes(searchTerm.toLowerCase())
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
              <h2>What was Collected?</h2>
              <div className="data">
                <div className="data-menu">
                  <li className="item">
                    <a href="#" className="menu-btn">
                      {/* <FontAwesomeIcon icon={faBalanceScale} /><span>Account Balance</span> */}
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="menu-btn">
                      {/* <FontAwesomeIcon icon={faHome} /><span>Address</span> */}
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="menu-btn">
                      {/* <FontAwesomeIcon icon={faPersonBooth} /><span>Agent Number</span> */}
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="menu-btn">
                      {/* <FontAwesomeIcon icon={faCreditCard} /><span>Credit or Debit Card Number</span> */}
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="menu-btn">
                      {/* <FontAwesomeIcon icon={faDna} /><span>DNA- deoxyribonucleic acid profile</span> */}
                    </a>
                  </li>
                  <h3> Total Data Elements: 5</h3>
                  <button className="action">Privacy Statement</button>

                  <button className="action">Action Your Rights</button>
                </div>
              </div>
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

      {/* SUDO CODE FOR STUFF I DID NOT COMPLETE */}

      {/* -IMPORT MOVIE REVIEWS THE SAME WAY I DID WITH CRITICS */}

      {/* -MAKE AN ONCLICK EVENT FOR THE CRITIC THAT REVIEWED THE SPECIFIC MOVIE */}

      {/* USE THE FILTER MORE FUNCTIONALBE WITH SPECIFIC DETAILS WITHIN THE REQUIREMENTS IN THE EXISTING CODE FOR NAME OF CRITIC */}
    </div>
  )
}

export default MoviePage
