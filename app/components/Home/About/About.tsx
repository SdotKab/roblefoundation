"use client"

import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const About = (props: Props) => {

  return (
    <section id="about" className="mx-auto w-5/6 pt-8 pb-6">
      <motion.div 
        className="mt-5 items-center justify-around gap-6 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >

        <motion.div className="px-5 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]">
            <span className="text-blue-500">Our </span>Mission:
          </h1>
          <p className="my-3">

          Our mission at the Roble Foundation is to address water scarcity in the Sanag Region by providing sustainable solutions that empower communities, enhance health, and support long-term development. We are committed to creating a future where every individual has access to clean, safe water and the tools to thrive.
          </p>
      </motion.div>
    
      {/* {isAboveMediumScreens ? (
      <div className="inline-block h-[350px] min-h-[1em] w-0.5 self-stretch bg-gray-400"></div>
      ) :
      (
        <hr className="my-6 h-0.5 border-t-0 bg-gray-400" />
      )} */}

      <motion.div className="px-5 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]">
          <span className="text-blue-500">Our </span>Vision:
        </h1>
        <p className="my-3">
          We envision a future where no one in the Sanag Region suffers from a lack of clean and safe water. Our goal is to eliminate the daily struggles caused by water scarcity through sustainable water infrastructure and community empowerment. With reliable access to clean water, we aim to improve health outcomes, enhance educational opportunities, boost agricultural productivity, and reduce poverty. By fostering social and economic growth, we strive to create thriving, self-reliant communities and a future marked by resilience, dignity, and prosperity for all.
        </p>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default About