import React from 'react'

import Hero from './Hero/Hero'
import Wells from './Wells/Wells'
import Work from './Work/Work'
import Contact from './Contact/Contact'
import Impact from './Impact/Impact'
import Mission from './Mission/Mission'

const Home = () => {

  return (
    <div className="overflow-hidden">
      <Hero />
      <Mission />
      <Wells />
      <Work />
      <Impact />
      <Contact />
    </div>
  )
}

export default Home