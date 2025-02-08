// src/components/sections/FooterSection.jsx
import React from 'react';

export default function FooterSection() {
  return (
    <footer className='mt-auto py-12 bg-gray-900 text-gray-300'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <div className='flex flex-wrap justify-center gap-6 mb-8'>
          <a href='/about' className='hover:text-[#d4af37] transition-colors'>
            About Us
          </a>
          <a href='/contact' className='hover:text-[#d4af37] transition-colors'>
            Contact
          </a>
        </div>
        <p className='text-sm opacity-75'>
          © 2024 Premium Auto Detailing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
