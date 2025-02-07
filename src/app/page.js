// src/app/page.js

import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      {/* Hero Section */}
      <section className='hero bg-blue-500 text-white text-center py-20'>
        <h1 className='text-4xl font-bold'>Get Your Car Detailed Today!</h1>
        <p className='text-xl mt-4'>
          Quality car detailing services at your doorstep
        </p>
        <button className='mt-6 px-8 py-3 bg-gold-500 rounded-full'>
          Book Now
        </button>
      </section>

      {/* About Section */}
      <section className='about py-20'>
        <h2 className='text-3xl text-center'>About Us</h2>
        <p className='text-lg text-center mt-4'>
          We specialize in premium car detailing services to make your car shine
          inside and out!
        </p>
      </section>

      {/* Services Overview */}
      <section className='services py-20'>
        <h2 className='text-3xl text-center'>Our Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8'>
          {/* Add individual services here */}
          <div className='service-item text-center'>
            <Image
              src='/service1.jpg'
              alt='Service 1'
              width={200}
              height={200}
            />
            <h3 className='mt-4'>Exterior Detailing</h3>
            <p>Complete wash, wax, and polish for your cars exterior.</p>
          </div>
          <div className='service-item text-center'>
            <Image
              src='/service2.jpg'
              alt='Service 2'
              width={200}
              height={200}
            />
            <h3 className='mt-4'>Interior Detailing</h3>
            <p>Deep cleaning and conditioning for your cars interior.</p>
          </div>
          <div className='service-item text-center'>
            <Image
              src='/service3.jpg'
              alt='Service 3'
              width={200}
              height={200}
            />
            <h3 className='mt-4'>Full Detail Package</h3>
            <p>
              Combination of exterior and interior detailing for a full
              restoration.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='testimonials py-20 bg-gray-100'>
        <h2 className='text-3xl text-center'>What Our Customers Say</h2>
        <div className='mt-8'>
          {/* Add customer testimonials here */}
          <p>Best detailing service Ive ever used! My car looks brand new</p>
          <p>
            Excellent customer service and the results were fantastic. Highly
            recommend
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className='contact py-20 text-center'>
        <h2 className='text-3xl'>Contact Us</h2>
        <p className='mt-4'>
          Ready to get your car detailed? Book a service today!
        </p>
        <button className='mt-6 px-8 py-3 bg-blue-500 rounded-full'>
          Contact Us
        </button>
      </section>

      {/* Footer Section */}
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/about'
        >
          About
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/contact'
        >
          Contact
        </a>
      </footer>
    </div>
  );
}
