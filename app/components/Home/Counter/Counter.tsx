"use client"

import React from 'react'
import CountUp from 'react-countup'

const Counter = () => {
  return (
<section id="counter" className="mx-auto w-full flex items-center justify-center">
    <div className="flex flex-col mt-5 items-center justify-around gap-6 md:flex-row">
        <div className="mx-auto grid w-full grid-cols-3 gap-6 md:max-w-[800px] md:p-8">
            {/* First Column */}
            <div className="flex flex-col items-center justify-center p-8 space-y-4">
                <p className="text-sm font-bold sm:text-lg md:text-3xl text-center">
                    <CountUp 
                        start={0}
                        end={4}
                        duration={2.75}
                    />
                </p>
                <h1 className="sm:text-md text-xs md:text-lg text-center">Boreholes</h1>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center justify-center p-8 space-y-4">
                <p className="text-sm font-bold sm:text-lg md:text-3xl text-center">
                    <CountUp 
                        start={0}
                        end={54}
                        suffix="+"
                        duration={2.75}
                    />
                </p>
                <h1 className="sm:text-md text-xs md:text-lg text-center">Fundraisers</h1>
            </div>

            {/* Third Column */}
            <div className="flex flex-col items-center justify-center p-8 space-y-4">
                <p className="text-sm font-bold sm:text-lg md:text-3xl text-center">
                    <CountUp 
                        start={0}
                        end={150000}
                        suffix="+"
                        duration={2.75}
                    />
                </p>
                <h1 className="sm:text-md text-xs md:text-lg text-center">Beneficiaries</h1>
            </div>
        </div>
    </div>
</section>



  )
}

export default Counter