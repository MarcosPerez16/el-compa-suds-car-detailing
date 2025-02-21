import React from 'react';

export default function CTASection() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-black'>
          Ready for a Spotless Car?
        </h2>
        <p className='text-lg mb-8 text-black'>
          Book your appointment now and get 10% off your first detailing
        </p>
        <button className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full sm:w-auto'>
          Get Started Now
        </button>
      </div>
    </section>
  );
}
