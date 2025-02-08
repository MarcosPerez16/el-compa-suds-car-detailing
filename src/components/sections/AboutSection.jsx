// src/components/sections/AboutSection.jsx
import React from 'react';

export default function AboutSection() {
  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6 text-[#1a365d]'>
          Why Choose Us
        </h2>
        <p className='text-lg text-gray-600 leading-relaxed'>
          Our certified detailers use premium products and cutting-edge
          techniques to deliver unmatched results for your vehicle.
        </p>
      </div>
    </section>
  );
}
