'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  // Animation variants with slower transitions
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.8, // Increased from 1.2
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // Increased from 0.3
        duration: 1.2, // Increased from 0.8
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8, // Increased from 0.5
        duration: 1.2, // Increased from 0.8
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.1, // Increased from 0.7
        duration: 1.2, // Increased from 0.8
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.4, // Increased from 0.9
        duration: 1.2, // Increased from 0.8
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5, // Increased from 0.3
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className='relative overflow-hidden'>
      {/* Banner Image */}
      <motion.div
        className='absolute inset-0 z-0'
        initial='hidden'
        animate='visible'
        variants={imageVariants}
      >
        <Image
          src='/images/banners/HeroSectionBanner.webp'
          alt='Car Detailing Banner'
          fill
          priority
          className='object-cover brightness-50'
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24'
        initial='hidden'
        animate='visible'
        variants={contentVariants}
      >
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h1
            className='text-4xl md:text-6xl font-bold mb-6 text-primary-foreground'
            variants={titleVariants}
          >
            Premium Car Detailing Services
          </motion.h1>
          <motion.p
            className='text-lg md:text-xl mb-8 text-primary-foreground/90'
            variants={subtitleVariants}
          >
            Restore your car's showroom finish with our expert detailing
          </motion.p>
          <motion.div variants={buttonVariants} whileHover='hover'>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full sm:w-auto'
              >
                Schedule Detailing
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
