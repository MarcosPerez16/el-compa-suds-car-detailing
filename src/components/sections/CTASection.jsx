import React from 'react';

export default function CTASection() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent'>
          Ready for a Spotless Car?
        </h2>
        <p className='text-lg mb-8 text-muted-foreground'>
          Book your appointment now and get 10% off your first detailing
        </p>
        <button className='bg-white text-primary px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 font-semibold'>
          Get Started Now
        </button>
      </div>
    </section>
  );
}
