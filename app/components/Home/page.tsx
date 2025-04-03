import React from 'react'

import Hero from './Hero/Hero'
import About from './About/About'
import Wells from './Wells/Wells'
import Work from './Work/Work'

const Home = () => {

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Wells />
      <Work />
    </div>
  )
}

export default Home