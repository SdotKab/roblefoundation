import React from 'react'
import H2Text from '../../Helper/H2Text'
import profile1 from "@/public/NoPic.png";
import profile2 from "@/public/Mina.jpg";
import Image from 'next/image';



const Profiles = () => {
  return (
        <section id="profiles" className="mx-auto w-5/6 pt-5 pb-5 mt-10">
            <div className="md:w-3/5 p-10">
                <H2Text>
                    Who we are
                </H2Text>
            </div>

            <div className="flex flex-col items-center ">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 gap-10 w-full max-w-5xl">
                {/* First Profile */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg space-y-4">
                    <Image 
                        src={profile1} 
                        alt="No Profile Picture" 
                        className="w-36 h-36 rounded-full object-cover border-4 border-gray-300"
                    />
                    <h2 className="text-xl font-semibold">Egal Roble</h2>
                    <p className="text-gray-600">Founder</p>
                </div>

                {/* Second Profile */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg space-y-4">
                    <Image 
                        src={profile2} 
                        alt="Amina Egal-Stähli" 
                        className="w-36 h-36 rounded-full object-cover border-4 border-gray-300"
                    />
                    <h2 className="text-xl font-semibold">Amina Egal-Stähli</h2>
                    <p className="text-gray-600">Project Manager</p>
                </div>
            </div>
            </div>

</section>

  )
}

export default Profiles