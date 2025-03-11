import React from 'react'

import Hero from './Hero/Hero'
import About from './About/About'
import Wells from './Wells/Wells'

const Home = () => {


  return (
    <div className="overflow-hidden ">
      <Hero />
      <About />
      <Wells />
    </div>
  )
}

export default Home