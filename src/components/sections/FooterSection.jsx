import React from 'react';
import { Mail, Phone, Home, Facebook, Instagram } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className='relative bg-[#121212] text-white py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20'>
          {/* Column 1 - About */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold mb-4'>
              Stay connected with Premium Auto Detailing to enjoy exclusive
              benefits and offers.
            </h3>

            <div className='flex items-start space-x-3 text-sm'>
              <Home className='w-5 h-5 mt-0.5 flex-shrink-0' />
              <span>123 Washington Ave. Manchester, Kentucky 40962</span>
            </div>

            <div className='flex items-center space-x-3 text-sm'>
              <Phone className='w-5 h-5 flex-shrink-0' />
              <span>(406) 555-0123</span>
            </div>

            <div className='flex items-center space-x-3 text-sm'>
              <Mail className='w-5 h-5 flex-shrink-0' />
              <span>contact@premiumautodetailing.com</span>
            </div>

            {/* Social Media Icons */}
            <div className='flex space-x-4 pt-2'>
              <a
                href='#'
                className='text-white hover:text-amber-400 transition-colors'
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-white hover:text-amber-400 transition-colors'
              >
                <Instagram className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Column 2 - Pages */}
          <div className='flex justify-center'>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Pages</h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='/'
                    className='text-white hover:text-amber-400 transition-colors'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='/about'
                    className='text-white hover:text-amber-400 transition-colors'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='/services'
                    className='text-white hover:text-amber-400 transition-colors'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='/gallery'
                    className='text-white hover:text-amber-400 transition-colors'
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    className='text-white hover:text-amber-400 transition-colors'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Instagram */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Instagram Photos</h3>
            <div className='grid grid-cols-3 gap-2'>
              {[...Array(6)].map((_, index) => (
                <a
                  key={index}
                  href={`/instagram/image${index + 1}.jpg`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block aspect-square bg-gray-800 rounded-sm overflow-hidden hover:opacity-90 transition-opacity'
                >
                  <img
                    src={`/instagram/image${index + 1}.jpg`}
                    alt={`Instagram photo ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className='border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400'>
          <p>© 2025 Premium Auto Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
