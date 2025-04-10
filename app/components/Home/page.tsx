import React from 'react'

import Hero from './Hero/Hero'
import Wells from './Wells/Wells'
import Work from './Work/Work'
import Contact from './Contact/Contact'
import Impact from './Impact/Impact'
import Mission from './Mission/Mission'
import Counter from './Counter/Counter'
// import Profiles from './Profiles/Profiles'

const Home = () => {

  return (
    <div className="overflow-hidden">
      <Hero />
      <Counter />
      <Mission />
      <Wells />
      <Work />
      <Impact />
      {/* <Profiles /> */}
      <Contact />
    </div>
  )
}

export default Home