"use client"

import { motion } from 'framer-motion';

import H2Text from '../../Helper/H2Text';
import { WorkType } from '@/types/types';
import ImageCarousel from '../../Helper/ImageCarousel';

const works: Array<WorkType> = [
  {
    name: "Health Crises",
    description: "Clean water is crucial for preventing diseases in Sanag Region, saving lives and reducing health crises.",
    image: "/1Ali.jpg",
  },
  {
    name: "Economic Impact",
    description: "Water scarcity limits economic opportunities, forces long walks for unreliable sources, hinders education, employment, agriculture, and income generation.",
    image: "/2Saed.jpg",
  },
  {
    name: "Environmental Strain",
    description: "Overuse and mismanagement of water resources strain the environment, threatening agriculture, food security, and biodiversity without sustainable solutions.",
    image: "/9Fatouma.jpg",
  },
  {
    name: "The Importance of Action",
    description: "Water sustains health, drives development, and nurtures the environment; addressing scarcity fosters thriving communities, improved health, and opportunities.",
    image: "/4Sincaro.jpg",
  },
]

type Props = {}

const Work = (props: Props) => {
  return (
      <section
        id="work"
        className="mx-auto w-5/6 pt-24 pb-32 px-10"
      >

      <motion.div
        className="w-4/5 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }}  
      >
        <div className="w-4/5 ml-20">
          <H2Text>
            Our Work: Why Water Matters
          </H2Text>
          <ul>
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

        <ImageCarousel />

    </section>
  )
}

export default Work