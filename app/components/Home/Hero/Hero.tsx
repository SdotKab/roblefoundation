"use client"
import React from 'react'

import { motion } from 'framer-motion'


type Props = {}

const Hero = (props: Props) => {

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 bg-cover bg-no-repeat before: z-[-1] bg-[url('/3Maryam.jpg')] md:h-full md:pb-20">
    {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-start justify-start md:flex md:h-5/6"
      >
          
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-2/5">
          {/* HEADINGS */}
          <motion.div
            className="md: mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
          >

            <div className="relative">
              <h1 className="flex text-6xl font-extrabold text-white">
                The Roble Foundation
              </h1>
              <h2 className="flex justify-center text-3xl font-medium text-white mt-3">
                Drill Boreholes for Sanaag Region, Somaliland
              </h2>
            </div>
                  
            {/* <p className="mt-4 text-md text-white">
              Sixty-nine year old Maryam Hussein spent countless hours walking long distances to retrieve small amount of unclean water. Despite the water's impurity, this was the only option for Jama's family.
            </p> */}

            <p className="mt-4 text-md text-white">
              The Roble Foundation is a non-profit organization dedicated to tackling the critical issue of water scarcity in the Sanaag Region of Somaliland. Clean and safe water is essential for health, agriculture, and economic being. Yet, for many communities in this region, accessing water is a daily struggle that profoundaly affects their quality of like and opportunities for sustenance.
            </p>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero