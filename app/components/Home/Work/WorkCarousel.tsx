"use client";

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/legacy/image";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpg";

// Image data
const images = [
  {
    src: image1,
    name: "Health Crises",
    desc: "Clean water is crucial for preventing diseases in Sanag Region, saving lives and reducing health crises.",
  },
  {
    src: image2,
    name: "Economic Impact",
    desc: "Water scarcity limits economic opportunities, forces long walks, and hinders education, jobs, and agriculture.",
  },
  {
    src: image3,
    name: "Environmental Strain",
    desc: "Overuse and mismanagement of water harm the environment, threatening agriculture, food security, and biodiversity.",
  },
  {
    src: image4,
    name: "The Importance of Action",
    desc: "Water supports health, development, and the environment; addressing scarcity improves communities and opportunities.",
  },
];

// Responsive breakpoints
const responsive = {
  0: { items: 1 },
  768: { items: 1 },
  1024: { items: 1 },
};

// Carousel item renderer
const items = images.map((img, index) => (
  <div
    key={index}
    className="relative h-[460px] mx-4 group rounded-xl overflow-hidden shadow-md"
  >
    <Image
      src={img.src}
      alt={img.name}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-100 transition-opacity duration-300">
      <h2 className="text-lg font-bold">{img.name}</h2>
      <p className="text-sm">{img.desc}</p>
    </div>
  </div>
));

// Final Carousel Component
const WorkCarousel = () => {
  return (
    <div className="w-full px-4 py-6">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableDotsControls={false}
        disableButtonsControls={false}
      />
    </div>
  );
};

export default WorkCarousel;
