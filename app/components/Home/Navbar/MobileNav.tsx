import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import DonateButtonSm from '../../Buttons/DonateButtonSm'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav:boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav?'translate-x-0': 'translate-x-[-100%]'

  return (
    <div className="">
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-95 w-full h-screen`}>
        {/* NavLinks */}
        
          <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#284475] space-y-6 z-[1050]`}>
          {navLinks.map((link) => {
            return (
            <Link href={link.url} key={link.id} className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
              <p>{link.label}</p>
            </Link>
            )}    
          )}
          
          <Link 
            className="text-gray-500 rounded-md bg-secondary-500 px-5 py-2 w-fit text-[20px] ml-12 pb-1 border-white sm:text-[30px] hover:bg-primary-500 hover:text-white"
            href="/#contact"  
          >
            Donate
          </Link>
          {/* Close Icon */}
          <CgClose 
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
            onClick={closeNav}
          />
          </div>

      </div>
    </div>
  )
}

export default MobileNav