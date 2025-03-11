import React, { JSX } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const childVariant = {
  hidden: {opacity:0, scale:0.9},
  visible: {opacity:1, scale:1}
}
type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
}

const Location = ({ icon, title, description }: Props) => {
  return (
    <motion.div 
      variants={childVariant}    
    >
      <div className="rounded-md border-2 border-gray-100 px-3 py-3">
        
        <p className="font-bold">{title}</p>
        <p className="my-3">{description}</p>
        <Link
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          href="#"
        >
            <p>Learn More</p>
        </Link>
      </div>
    </motion.div>
  )
}

export default Location