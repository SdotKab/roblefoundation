import React from 'react'

import Hero from './Hero/Hero'
import About from './About/About'
import Wells from './Wells/Wells'
import Work from './Work/Work'
import Contact from './Contact/Contact'

const Home = () => {

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Wells />
      <Work />
      <Contact />
    </div>
  )
}

export default Home