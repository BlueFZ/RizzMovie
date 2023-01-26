import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/movielist.css'

function Trending() {
  const [list, setList]= useState([])
  const [load, setLoad]= useState(true)
  const [time, setTime]= useState('day')

  function getType(show) {
    if(show.media_type === 'movie') return show.title
    else return show.name
  }

  function getRelease(show) {
    if(show.media_type === 'movie') return show.release_date
    else return show.first_air_date
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/${time}?api_key=9e89dc1810e00461d6f59011e04175ed`).then((movies) => {
      setList(movies.data.results)
      setTimeout(() => setLoad(false), 1000)
      console.log(movies.data.results)
    })
  }, [time])

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
                setTime('day')
                setLoad(true)
              }}
              >
                Day     
              </li>
              <li
              onClick={() => {
                setTime('week')
                setLoad(true)
              }}
              >
                Week
              </li>
            </ul>
          </nav>
          <h1>Movie Lists</h1>
          <div className="card-container">
            {
              list.map((show) => {
                return (
                 <div className='card'>
                  <img className='thumbnail' src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt="" />
                  <p className='info'>
                      <span>⭐ {(show.vote_average).toFixed(1)}</span> <span>📅 {getRelease(show)}</span> <span>👁️ {show.popularity}</span>
                  </p>
                  <h3 className='judul-card'>{getType(show)}</h3>
                  <p className='card-txt'>{show.overview}</p>
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

export default Trending