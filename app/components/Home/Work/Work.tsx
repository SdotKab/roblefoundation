"use client"

import { motion } from 'framer-motion';

import H2Text from '../../Helper/H2Text';
import MyCarousel from '../../Helper/MyCarousel';
import MyCarousel from '../../Helper/MyCarousel';
import { WorkType } from '@/types/types';

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
        className="mx-auto w-5/6 pt-24 pb-32"
      >

      <motion.div
        className="w-4/5 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }}  
      >
        <div className="w-4/5">
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

      <BootstrapCarousel />
      
      {/* <div id="default-carousel" className="relative w-2/5" data-carousel="slide">
        <div className="relative h-96 rounded-lg lg:h-96">
          {works.map((item: WorkType, index) => (
            <MyCarousel 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
          <div className="duration-700 ease-in-out" data-carousel-item>
              <img src="/4Sincaro.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>

        </div>
        
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                <span className="sr-only"> Previousspan </span>
              </span>
        </button>

        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
            <span className="sr-only">Nextspan</span>
          </span>
        </button>
        
      </div> */}
    </section>
  )
}

export default Work