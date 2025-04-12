"use client"

import { motion } from 'framer-motion';

import H2Text from '../../Helper/H2Text';
import WorkCarousel from './WorkCarousel';

const Work = () => {
  return (
      <section
        id="work"
        className="mx-auto w-5/6 pt-10"
      >

      <motion.div
        className="mt-2 p-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }}  
      >
        <div className="flex flex-col p-4 items-center lg:p-20">
          <H2Text>
            Our Work: Why Water Matters
          </H2Text>
          <ul className="mt-5">
            <li className="py-3">
            Water is the essence of life, playing an indispensable role in both biological and social systems. It is the foundation of human survival and well-being, enabling critical bodily functions such as nutrient absorption, waste removal, and temperature regulation.
            </li>
            <li className="py-3">
            Beyond its physiological importance, water is vital for maintaining ecosystems, supporting biodiversity, fostering plant growth, and ensuring agricultural productivity.
            </li>

            <li className="py-3">
            However, for communities in the Sanag Region, the scarcity of clean and reliable water creates severe challenges that ripple through every aspect of life.
            </li>
          </ul>
        </div>
      </motion.div>
      <p className="text-xs text-right mr-10">Photographed by Pablo Tosco</p>
        <WorkCarousel />

    </section>
  )
}

export default Work