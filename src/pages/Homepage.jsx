import React from 'react'
import '../styles/home.css'
import Arrow from '../../public/arrow.png'
import Anim from '../../public/animate.png'
import Movie from '../../public/movie.png'
import Tv from '../../public/tv.png'
import Trend from '../../public/trend.png'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
   <>
    <div className="judul-container">
    <div className='judul'>
      <h1>
      Rizz Movies and TV Shows
      </h1>
      <p className='judul-txt'>
        This website will privide you with the lists of Movies and TV Shows you've ever heard. So you'll be able to view a whole bunch of our lists. Feel free to explore to your heart content
      </p>
      <div className='btn-container'>
        <a href="#list">
          <button>
            Our Lists
            {/* <img src={Arrow}/> */}
          </button>
        </a>
      </div>
    </div>
    <div className='anim'>
      <img src={Anim} className='pict' />
    </div>
    </div>
    <div id='list' className="content">
      <h2>Our Lists</h2>
      <div className="card-container">
        <div className="card">
          <h3>Movies</h3>
          <img src={Movie} alt="" />
          <p className='card-desc'>
            Here we Provide you with our movie lists based on our data base. Cli ck the button below to check out our movie lists.
          </p>
          <div className="btn-movie-container">
            <Link to='/movie'>
              <button className='btn-movie'>
                <p className='btn-txt'>Movie Lists</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h3>TV Shows</h3>
          <img src={Tv} alt="" />
          <p className=''>
            Here we Provide you with our tv show lists based on our data base. Click the button below to check out our tv show lists.
          </p>
          <div className="btn-movie-container">
            <Link to='/tv'>
              <button className='btn-movie'>
                <p className='btn-txt'>TV Show Lists</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h3>Trending</h3>
          <img src={Trend} alt="" />
          <p className=''>
            Here we Provide you with our trending shows based on our data base. Click the button below to check out our trending shows.
          </p>
          <div className="btn-movie-container">
            <Link to='/trend'>
              <button className='btn-movie'>
                <p className='btn-txt'>Trending Shows</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Homepage