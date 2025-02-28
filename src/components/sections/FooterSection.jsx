'use client';

import React, { useRef } from 'react';
import { Mail, Phone, Home, Facebook, Instagram } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
  });

  // Animation variants with slower transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Increased from 0.1
        delayChildren: 0.2, // Increased from 0.1
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9, // Increased from 0.6
        ease: 'easeOut',
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08, // Increased from i * 0.05
        duration: 0.7, // Increased from 0.4
        ease: 'easeOut',
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.08, // Increased from i * 0.05
        duration: 0.7, // Increased from 0.4
        ease: 'easeOut',
      },
    }),
  };

  const copyrightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.9, // Increased from 0.6
        duration: 0.9, // Increased from 0.6
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className='relative bg-[#121212] text-white py-16' ref={ref}>
      <motion.div
        className='container mx-auto px-4 sm:px-6 lg:px-8'
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20'>
          {/* Column 1 - About */}
          <motion.div className='space-y-4' variants={columnVariants}>
            <h3 className='text-lg font-semibold mb-4'>
              Stay connected with Premium Auto Detailing to enjoy exclusive
              benefits and offers.
            </h3>

            <motion.div
              className='flex items-start space-x-3 text-sm'
              variants={listItemVariants}
              custom={0}
            >
              <Home className='w-5 h-5 mt-0.5 flex-shrink-0' />
              <span>123 Washington Ave. Manchester, Kentucky 40962</span>
            </motion.div>

            <motion.div
              className='flex items-center space-x-3 text-sm'
              variants={listItemVariants}
              custom={1}
            >
              <Phone className='w-5 h-5 flex-shrink-0' />
              <span>(406) 555-0123</span>
            </motion.div>

            <motion.div
              className='flex items-center space-x-3 text-sm'
              variants={listItemVariants}
              custom={2}
            >
              <Mail className='w-5 h-5 flex-shrink-0' />
              <span>contact@premiumautodetailing.com</span>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              className='flex space-x-4 pt-2'
              variants={listItemVariants}
              custom={3}
            >
              <motion.a
                href='#'
                className='text-white hover:text-amber-400 transition-colors'
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.4 },
                }} // Added transition duration
              >
                <Facebook className='w-5 h-5' />
              </motion.a>
              <motion.a
                href='#'
                className='text-white hover:text-amber-400 transition-colors'
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.4 },
                }} // Added transition duration
              >
                <Instagram className='w-5 h-5' />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Column 2 - Pages */}
          <motion.div className='flex justify-center' variants={columnVariants}>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Pages</h3>
              <ul className='space-y-2'>
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/services', label: 'Services' },
                  { href: '/gallery', label: 'Gallery' },
                  { href: '/contact', label: 'Contact' },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    custom={index}
                    whileHover={{ x: 5, transition: { duration: 0.4 } }} // Added transition duration
                  >
                    <a
                      href={link.href}
                      className='text-white hover:text-amber-400 transition-colors'
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 3 - Instagram */}
          <motion.div variants={columnVariants}>
            <h3 className='text-xl font-semibold mb-4'>Instagram Photos</h3>
            <div className='grid grid-cols-3 gap-2'>
              {[...Array(6)].map((_, index) => (
                <motion.a
                  key={index}
                  href={`/instagram/image${index + 1}.jpg`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block aspect-square bg-gray-800 rounded-sm overflow-hidden hover:opacity-90 transition-opacity'
                  variants={imageVariants}
                  custom={index}
                  whileHover={{ scale: 1.1, transition: { duration: 0.4 } }} // Added transition duration
                >
                  <img
                    src={`/instagram/image${index + 1}.jpg`}
                    alt={`Instagram photo ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright Bar */}
        <motion.div
          className='border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400'
          variants={copyrightVariants}
        >
          <p>© 2025 Premium Auto Detailing. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
