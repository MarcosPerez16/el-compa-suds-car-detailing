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

      {/* Gallery Preview Section */}
      <section className='py-20 px-4 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a365d]'>
            Our Work
          </h2>
          <p className='text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto'>
            Browse through some of our recent detailing transformations
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Gallery Item 1 */}
            <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
              <Image
                src='/images/gallery/paint-correction.jpeg'
                alt='Exterior Detail Transformation'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-white font-semibold'>Paint Correction</h3>
                  <p className='text-white/90 text-sm'>Exterior Detail</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
              <Image
                src='/images/gallery/Interior-revival.jpg'
                alt='Interior Detail Transformation'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-white font-semibold'>Interior Revival</h3>
                  <p className='text-white/90 text-sm'>
                    Full Interior Restoration
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
              <Image
                src='/images/gallery/ceramic-coating.jpg'
                alt='Ceramic Coating Application'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-white font-semibold'>Ceramic Coating</h3>
                  <p className='text-white/90 text-sm'>Paint Protection</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
              <Image
                src='/images/gallery/wheel-restoration.jpg'
                alt='Wheel Detail'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-white font-semibold'>
                    Wheel Restoration
                  </h3>
                  <p className='text-white/90 text-sm'>Wheel & Tire Detail</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
              <Image
                src='/images/gallery/engine-bay.jpg'
                alt='Engine Bay Detail'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-white font-semibold'>
                    Engine Bay Detail
                  </h3>
                  <p className='text-white/90 text-sm'>Engine Cleaning</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
              <Image
                src='/images/gallery/complete-detail.jpg'
                alt='Full Detail Package'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-white font-semibold'>Complete Package</h3>
                  <p className='text-white/90 text-sm'>
                    Full Vehicle Transformation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-12'>
            <a
              href='/gallery'
              className='inline-flex items-center justify-center px-8 py-3 bg-[#1a365d] text-white rounded-full hover:bg-opacity-90 transition-all'
            >
              View Full Gallery
            </a>
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
