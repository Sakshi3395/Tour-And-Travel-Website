import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/Hero1.jpg';
import banner2 from '../assets/Hero3.jpg';
import banner3 from '../assets/Hero4.jpg';
import { Search } from 'lucide-react';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const banners = [
    {
      image: banner1,
      title: "Discover Your Next Adventure",
      subtitle:
        "Explore breathtaking destinations, create unforgettable memories and embark on the journey of a lifetime.",
    },
    {
      image: banner2,
      title: "Travel Beyond Boundaries",
      subtitle:
        "Find hidden gems, exotic locations and unique experiences tailored just for you.",
    },
    {
      image: banner3,
      title: "Experience the World Differently",
      subtitle:
        "From mountains to beaches, explore every corner of the world with comfort and style.",
    },
  ];

  return (
    <div className="slider-container -mt-32 overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <div
              className="h-[650px] lg:h-[800px] relative"
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>

              {/* Hero Content */}
              <div className="relative max-w-7xl mx-auto flex h-[650px] justify-center items-center">
                <div className="flex flex-col space-y-6 justify-center items-center text-center px-5 md:px-0 -mt-10">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl drop-shadow-md">
                    {banner.title}
                  </h1>
                  <p className="text-white lg:text-lg lg:w-[700px] drop-shadow-sm">
                    {banner.subtitle}
                  </p>
                  <div style={{ height: '2.5rem' }}></div>
                  <button className="bg-red-500 px-5 py-3 text-white rounded-md font-semibold hover:bg-red-600 transition-all shadow-lg">
                    Start Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Enhanced Search Box */}
      <div className="bg-white/90 border border-gray-200 shadow-2xl rounded-2xl z-20 left-1/2 -translate-x-1/2 absolute hidden lg:flex bottom-[8%] w-[1100px] mx-auto py-8 px-10 items-center gap-6">
        <div className="grid grid-cols-4 gap-8 flex-grow">
          <div className="flex flex-col gap-2">
            <label className="flex font-semibold gap-1 items-center text-gray-700">
              <Search className="w-4 h-4 text-red-500" /> Location
            </label>
            <select className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-200 outline-none transition-all">
              <option>Select Options</option>
              <option>Bali</option>
              <option>India</option>
              <option>Tokyo</option>
              <option>Venice</option>
              <option>Paris</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Check In</label>
            <input type="date" className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-200 outline-none transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Check Out</label>
            <input type="date" className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-200 outline-none transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex font-semibold gap-1 items-center text-gray-700">
              <Search className="w-4 h-4 text-red-500" /> Guest
            </label>
            <select className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-200 outline-none transition-all">
              <option>Select Options</option>
              <option>2 Guests 1 Child</option>
              <option>3 Guests 2 Children</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col justify-end h-full">
          <button className="bg-red-500 text-white hover:bg-black px-8 h-12 rounded-xl transition-all font-bold shadow-lg text-lg mt-4 lg:mt-0">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
