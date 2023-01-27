import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/movielist.css'
import Magnify from '../../public/search.svg'

function MovieList() {
  const [list, setList]= useState([])
  const [page, setPage]= useState(1)
  const [expand, setExpand]= useState(0)
  const [load, setLoad]= useState(true)

  function getData() {
    axios.get(`https://api.themoviedb.org/4/list/1?page=${page}&api_key=9e89dc1810e00461d6f59011e04175ed`).then((movies) => {
      console.log(movies.data.results)
      setTimeout(() => setLoad(false), 1000)
      setList(movies.data.results)
    })
  }

  function getSearched(value) {
   
    if (value !== '') {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&&api_key=9e89dc1810e00461d6f59011e04175ed`).then((filter) => {
      setList(filter.data.results)
      console.log(filter.data.results)
      })
    }
    else if (value.length === 0) {
      getData()
    }
  }

  useEffect(() => {
    console.log(expand)
  },[expand])

  useEffect(() => {
    getData()
  }, [page])
  return (
   <>
    {load ? (
      <div className="container-svg">
        <svg className='svg' viewBox='0 0 50 50'>
          <circle
            cx={25}
            cy={25}
            r={20}
          />
        </svg>
      </div>
    ) 
    : 
    (
      <>
        <div className="content">
          <nav>
            <ul>
              <li>
                <Link className='link' to='/'>
                  Home
                </Link>
              </li>
              <li
              onClick={() => {
                setPage(1)
                setLoad(true)
              }}
              >
                Page 1              
              </li>
              <li
              onClick={() => {
                setPage(2)
                setLoad(true)
              }}
              >
                Page 2
              </li>
              <li
              onClick={() => {
                setPage(3)
                setLoad(true)
              }}
              >
                Page 3
              </li>
            </ul>
          </nav>
          <div className='search-box'>
            <img src={Magnify} alt="" />
            <input 
              className='search'
              onChange={(input) => getSearched(input.target.value)}
            />
          </div>
          <h1>Movie Lists</h1>
          <div className="card-container">
            {
              list.map((movie) => {
                return (
                 <div className='card'>
                  <img className='thumbnail' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                  <p className='info'>
                      <span>⭐ {movie.vote_average}</span> <span>📅 {movie.release_date}</span> <span>👁️ {movie.popularity}</span>
                  </p>
                  <h3 className='judul-card'>{movie.title}</h3>
                  <button
                  onClick={() => {
                    setExpand(movie.id)
                  }}
                  >expand</button>
                  {
                    expand === movie.id &&
                    (
                      <p className='card-txt'>{movie.overview}</p>
                    )
                  }
                 </div>
                )
              })
            }
            </div>
        </div>
      </>
    )}
   </>
  )
}

export default MovieList