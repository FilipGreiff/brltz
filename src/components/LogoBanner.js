import { useEffect, useState } from 'react';

export default function LogoBanner() {
  const logos = [
    '/lev1.jpg',
    '/lev2.gif',
    '/lev3.jpg',
    '/lev4.jpg',
    '/lev5.png',
    '/lev6.png',
    '/lev7.png',
    '/lev8.png',
    '/lev9.png',
    '/lev10.png',
    '/lev11.jpg',
    '/lev12.jpg',
    '/lev13.jpg',
    '/lev14.jpg',
  ];

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="relative">
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 