// src/components/sections/AboutSection.jsx
import React from 'react';

export default function AboutSection() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-3xl mx-auto text-center space-y-8'>
        <div className='space-y-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-black'>
            About El Compa Suds
          </h2>
          <p className='text-lg text-black leading-relaxed'>
            Our certified detailers use premium products and cutting-edge
            techniques to deliver unmatched results for your vehicle.
          </p>
        </div>

        {/* Kept the decorative element to tie in with the logo colors */}
        <div className='w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80'></div>
      </div>
    </section>
  );
}
