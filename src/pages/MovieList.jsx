import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/movielist.css'

function MovieList() {
  const [list, setList]= useState([])
  const [page, setPage]= useState(1)
  const [load, setLoad]= useState(true)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/4/list/1?page=${page}&api_key=9e89dc1810e00461d6f59011e04175ed`).then((movies) => {
      setList(movies.data.results)
      setTimeout(() => setLoad(false), 1000)
      console.log(movies.data.results)
    })
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
                console.log(page)
              }}
              >
                Page 1              
              </li>
              <li
              onClick={() => {
                setPage(2)
                console.log(page)
              }}
              >
                Page 2
              </li>
              <li
              onClick={() => {
                setPage(3)
                console.log(page)
              }}
              >
                Page 3
              </li>
            </ul>
          </nav>
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
                  <p className='card-txt'>{movie.overview}</p>
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