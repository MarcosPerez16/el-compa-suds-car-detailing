// src/components/sections/CTASection.jsx
import React from 'react';

export default function CTASection() {
  return (
    <section className='relative py-20 px-4 bg-[#1a365d] text-white'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          Ready for a Spotless Car?
        </h2>
        <p className='text-lg mb-8 opacity-90'>
          Book your appointment now and get 10% off your first detailing
        </p>
        <button className='bg-[#d4af37] text-[#1a365d] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all'>
          Get Started Now
        </button>
      </div>
    </section>
  );
}
