"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
interface ImageData {
  src: StaticImageData;
  name: string;  
  desc: string;  
}

// Image data array
const images: ImageData[] = [
  {
    src: image1,
    name: "Health Crises",
    desc: "Clean water is crucial for preventing diseases in Sanag Region, saving lives and reducing health crises.",
  },
  {
    src: image2,
    name: "Economic Impact",
    desc: "Water scarcity limits economic opportunities, forces long walks for unreliable sources, hinders education, employment, agriculture, and income generation.",
  },
  {
    src: image3,
    name: "Environmental Strain",
    desc: "Overuse and mismanagement of water resources strain the environment, threatening agriculture, food security, and biodiversity without sustainable solutions.",
  },
  {
    src: image4,
    name: "The Importance of Action",
    desc: "Water sustains health, drives development, and nurtures the environment; addressing scarcity fosters thriving communities, improved health, and opportunities.",
  },
];

const ImageCarousel = () => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto mt-4 p-2">
      <div
        className="relative h-[460px] mx-12 group hover:-translate-y-2"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image with Text Overlay */}
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
        
        {/* Text Overlay - Only visible on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ease-in-out 
            ${isHovered ? "bg-gray-600 bg-opacity-50" : "bg-transparent opacity-0"}
          `}
        >
          <h2 className="text-lg font-bold">{images[currentIndex].name}</h2>
          <h3 className="text-md">{images[currentIndex].desc}</h3>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-secondary-500 mx-1 -mt-[10px] -translate-y-1/2 bg-[#284475] text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-secondary-500 mx-1 -mt-[10px] -translate-y-1/2 bg-[#284475] text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button>

      {/* Carousel Indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#284475] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-900 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
