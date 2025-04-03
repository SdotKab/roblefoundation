import React from 'react'

type Props = {
  name: string;
  description?:string;
  image:string;
}

const MyCarousel = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex 
  h-[250px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transistion duration-500 hover:opacity-90`;

  return (
      <div className="duration-700 ease-in-out" data-carousel-item>
          {/* <div className={overlayStyles}> */}
          <div>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
          </div>
        <img 
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
          alt={`${image}`} 
          src={image} />
      </div>
  )
}

export default MyCarousel