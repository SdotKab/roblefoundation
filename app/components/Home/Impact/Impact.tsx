"use client"

import React from 'react'
import { motion } from "framer-motion";
import image5 from "@/public/image5.jpg";
import image6 from "@/public/image6.jpg";
import H2Text from '../../Helper/H2Text';
import Image from "next/legacy/image";

const Impact = () => {
  return (
    <section id="impact" className="mx-auto w-5/6 pt-24 pb-5 mt-10">
        {/* HEADER */}
            <motion.div 
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <H2Text>
                    <span className="text-primary-500">Our </span>Impact
                </H2Text>
            </motion.div>

            {/*  */}
            <div className="mt-5 justify-between gap-8 md:flex mb-16">
                <motion.div
                    className="mt-10 basis-1/2 p-5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <p className="my-6 text-lg">
                        <b>Laying the Groundwork for Sustainability</b>
                    </p>
                    <p className="my-4">
                        These initiatives are not just about providing immediate relief; they are about creating lasting change. By improving water infrastructure, introducing sustainable practices, and empowering communities with knowledge and resources, we aim to build a foundation for long-term resilience in the Sanag Region.
                    </p>
                    <p className="my-4">
                        These projects will reduce waterborne diseases, boost agricultural productivity, and unlock opportunities for economic and social development, ensuring that access to clean water becomes a cornerstone of a brighter future for all.
                    </p>
                </motion.div>
                <motion.div
                    className="mt-10 basis-1/2 p-5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <Image 
                        className="w-full rounded-lg"
                        alt="contact-us-page-graphic"
                        src={image5}
                    />
                </motion.div>
            </div>
            {/*  */}
            <div className="mt-5 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-1/2 p-5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                <Image 
                    className="w-full rounded-lg"
                    alt="contact-us-page-graphic"
                    src={image6}
                />
                </motion.div>
                <motion.div
                    className="mt-10 basis-1/2 p-5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <p className="my-8 text-xl">
                    <b>Planned Interventions</b>    
                    </p>
                    <ul className="list-disc text-lg">
                        <li className="my-8">
                            <b>Borehole Drilling and Maintenance:</b> Create sustainable water sources with long-term operational plans.
                        </li>
                        <li className="my-8">
                            <b>Construction of Water Distribution Systems:</b> Build infrastructure to ensure efficient and equitable water delivery.
                        </li>
                        <li className="my-8">
                            <b>Community Training:</b> Educate local populations on water conservation, hygiene, and effective management.
                        </li>
                    </ul>
                </motion.div>
            </div>
    </section>

  )
}

export default Impact