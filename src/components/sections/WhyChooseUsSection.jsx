'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { reasons } from './whyChooseUsData';

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -200px 0px', // Trigger earlier when scrolling
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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9, // Increased from 0.6
        ease: 'easeOut',
      },
    },
  };

  const reasonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.15, // Increased from 0.1
        duration: 0.8, // Increased from 0.5
        ease: 'easeOut',
      },
    }),
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4, // Increased from 0.2
        duration: 1.2, // Increased from 0.8
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className='py-12 sm:py-16 lg:py-20' ref={ref}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-center'>
          {/* Content Section */}
          <motion.div
            className='space-y-6 sm:space-y-8'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <div className='space-y-3 sm:space-y-4'>
              <motion.h2
                className='text-3xl sm:text-4xl font-bold text-black'
                variants={headingVariants}
              >
                Why Choose Us
              </motion.h2>
              <motion.p
                className='text-lg sm:text-xl text-black leading-relaxed'
                variants={headingVariants}
              >
                Experience the perfect blend of precision, passion, and
                <span className='hidden sm:inline'> professionalism</span>
                <span className='sm:hidden'> pro</span> in every detail.
              </motion.p>
            </div>

            <div className='grid gap-5 sm:gap-6'>
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={reasonVariants}
                  whileHover={{ x: 10, transition: { duration: 0.4 } }} // Increased from 0.2
                  className='flex gap-4 group'
                >
                  <div className='flex-shrink-0'>
                    <motion.div
                      className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-500 hover:bg-amber-600 flex items-center justify-center transition-all'
                      whileHover={{ rotate: 15, transition: { duration: 0.5 } }} // Added transition duration
                    >
                      <reason.icon className='w-5 h-5 sm:w-6 sm:h-6 text-black transition-transform' />
                    </motion.div>
                  </div>
                  <div className='space-y-1.5'>
                    <h3 className='text-lg font-semibold text-black'>
                      {reason.title}
                    </h3>
                    <p className='text-sm sm:text-[15px] text-black leading-relaxed'>
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className='relative w-full max-w-[560px] xl:max-w-[580px] rounded-xl lg:rounded-2xl overflow-hidden shadow-lg mx-auto border-[7px] border-white/90 bg-white self-center'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={videoVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.6 } }} // Added transition duration
          >
            <div className='aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/12]'>
              <video
                className='w-full h-full object-cover'
                autoPlay
                muted
                loop
                playsInline
              >
                <source src='/videos/car-detailing.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent' />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
