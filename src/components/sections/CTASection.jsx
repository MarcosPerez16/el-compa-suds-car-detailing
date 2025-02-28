'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px', // Trigger earlier when scrolling
  });

  // Animation variants with slower transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className='py-20 px-4' ref={ref}>
      <motion.div
        className='max-w-3xl mx-auto text-center'
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-12 text-black'
          variants={titleVariants}
        >
          Ready for a Spotless Car?
        </motion.h2>
        <motion.p className='text-lg mb-8 text-black' variants={textVariants}>
          Book your appointment now and get 10% off your first detailing
        </motion.p>
        <motion.div variants={buttonVariants}>
          <Link href='/contact' className='w-full sm:w-auto inline-block'>
            <Button
              size='lg'
              className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full sm:w-auto'
              transition={{ duration: 0.5 }} // Override the transition duration
              whileHover={{ scale: 1.1 }} // Override the hover scale
              whileTap={{ scale: 0.95 }} // Override the tap scale
            >
              Get Started Now
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
