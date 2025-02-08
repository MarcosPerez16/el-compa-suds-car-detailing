// src/app/page.js
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen font-[var(--font-geist-sans)]'>
      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Services Section */}
      <section className='py-20 px-4 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a365d]'>
            Our Services
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
              <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
                <Image
                  src='/images/services/service1.jpg'
                  alt='Exterior Detailing'
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Exterior Detailing</h3>
              <p className='text-gray-600'>
                Paint correction, ceramic coating, and wheel restoration
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
              <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
                <Image
                  src='/images/services/service2.jpg'
                  alt='Interior Detailing'
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Interior Detailing</h3>
              <p className='text-gray-600'>
                Deep cleaning, odor removal, and leather conditioning
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
              <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
                <Image
                  src='/images/services/service3.jpg'
                  alt='Full Detailing'
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Complete Package</h3>
              <p className='text-gray-600'>
                Full interior/exterior restoration with paint protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 px-4 bg-white'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a365d]'>
            Client Experiences
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-gray-50 p-6 rounded-xl border-l-4 border-[#d4af37]'>
              <blockquote className='text-gray-600 italic mb-4'>
                Transformed my 10-year-old car into looking brand new.
                Absolutely worth every penny!
              </blockquote>
              <p className='font-semibold text-[#1a365d]'>– Sarah Johnson</p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl border-l-4 border-[#d4af37]'>
              <blockquote className='text-gray-600 italic mb-4'>
                Professional service with attention to detail Ive never seen
                before
              </blockquote>
              <p className='font-semibold text-[#1a365d]'>– Michael Chen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className='mt-auto py-12 bg-gray-900 text-gray-300'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <div className='flex flex-wrap justify-center gap-6 mb-8'>
            <a href='/about' className='hover:text-[#d4af37] transition-colors'>
              About Us
            </a>
            <a
              href='/contact'
              className='hover:text-[#d4af37] transition-colors'
            >
              Contact
            </a>
          </div>
          <p className='text-sm opacity-75'>
            © 2024 Premium Auto Detailing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
