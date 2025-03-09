import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import DonateButtonLg from '../../Buttons/DonateButtonLg'

type Props = {
  openNav:() => void;
}

const Navbar = ({openNav}: Props) => {

  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          {/* <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-col">
            Logo
          </div> */}
          <h1 className="text-xl md:text-2xl text-blue-800 font-bold">Roble Foundation</h1>
        </div>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
            <Link href={link.url} key={link.id} className='text-black hover:text-rose-500 font-semibold transition-all duration-200'>
              <p>{link.label}</p>
            </Link>
            )}    
          )}
        </div>
        {/* Button */}
        <div className="hidden lg:flex items-center space-x-10">
          <DonateButtonLg />
        </div>
        {/* Burger Menu */}
        <HiBars3BottomRight 
          className="w-8 h-8 cursor-pointer text-black lg:hidden"
          onClick={openNav}
        />
      </div>
    </div>
  )
}

export default Navbar