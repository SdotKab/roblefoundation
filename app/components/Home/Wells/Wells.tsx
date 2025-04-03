"use client"

import { motion } from 'framer-motion';
import { LocationType } from '@/types/types';
import { CiLocationOn } from 'react-icons/ci';

import Location from './Location';

const locations: Array<LocationType> = [
  {
      icon: <CiLocationOn className="h-5 w-5" />,
      title: "Yufleh:",
      description:
          "With a population of 6,000, this is the largest village in the project, underscoring the urgent need for improved water resources to support its growing community."
  },
  {
      icon: <CiLocationOn className="h-5 w-5" />,
      title: "Dagaar:",
      description:
          "With 5,000 residents, this village is the second-largest in the initiative. It faces similar water challenges, though slightly smaller than the largest village. It’s 10 miles west of Erigavo."
  },
  {
      icon: <CiLocationOn className="h-5 w-5" />,
      title: "Marawade:",
      description:
          "This village, home to 4,000 residents, is one of the smaller yet equally important communities benefiting from the project. It lies 15 miles east of Erigavo."
  },
  {
    icon: <CiLocationOn className="h-5 w-5" />,
    title: "Hurgufato:",
    description:
        "With 4,000 residents, this village matches Marawade in size and need, highlighting the importance of equitable access to resources across all targeted villages. It’s 8 miles east of Erigavo."
  },
];

type Props = {}

const Wells = (props: Props) => {
  return (
    <section id="wells" className="flex-row items-center pt-16 pb-32">

      <motion.div
        className="px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}  
      >
        <div className="text-center mt-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]">
          <span>HELP BUILD LIFE-SUSTAINING {" "}</span>
            <span className="text-blue-500">BOREHOLES</span>
          </h1>
        </div>

        <div className="items-center justify-center mt-5">
          {/* GRAPHICS AND DESCRIPTION */}
            {/* GRAPHIC */}
            <div className="hidden md:flex basis-2/3 justify-center px-5 ">
              <img 
                  className="rounded-3xl shadow-2xl"
                  alt="map"
                  src="/SomalilandMap.png"
              />
            </div>

            {/* LOCATIONS */}
            <div className="flex basis-1/3 mt-10">
              <div className="grid grid-cols-1 gap-8 p-2 md:px-5 md:grid-cols-2">
              {locations.map((location: LocationType) => (
                <Location 
                  icon={location.icon}
                  key={location.title}
                  title={location.title}
                  description={location.description}
                />
              ))}
              </div>
            </div>
        </div>
      </motion.div>

    </section>
  )
}

export default Wells