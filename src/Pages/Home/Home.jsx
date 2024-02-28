import React from 'react'
import '../Home/home.scss'
const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Plan Your Trip With Trippy store 
          </h1>
          <p className="subTitle">
        Discover our new game trading market place , join us !
          </p>
          <button className="btn">
            <a href="#" className="Explore Now">
              Explore Now
            </a>
          </button>
        </div>

        <div className="homeCard grid">
          
          <div className="nameDiv">
            <label htmlFor="category" >Category</label><br />
            <input type="text" placeholder='category' />
          </div>
          
          <button className="btn">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
