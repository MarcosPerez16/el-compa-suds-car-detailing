import React from 'react';

export default function HeroSection() {
  return (
    <section className='relative bg-[#1a365d] text-white text-center py-24 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
          Premium Car Detailing Services
        </h1>
        <p className='text-lg md:text-xl mb-8 opacity-90'>
          Restore your cars showroom finish with our expert detailing
        </p>
        <button className='bg-[#d4af37] text-[#1a365d] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all'>
          Schedule Detailing
        </button>
      </div>
    </section>
  );
}
