'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function AboutSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants with slower transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased from 0.2
        delayChildren: 0.2, // Increased from 0.1
      },
    },
  };

  const itemVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2, // Increased from 0.8
        ease: 'easeOut',
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3 + 0.9, // Increased from i * 0.2 + 0.6
        duration: 0.9, // Increased from 0.6
        ease: 'easeOut',
      },
    }),
  };

  const gradientLineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '6rem', // w-24
      opacity: 0.8,
      transition: {
        duration: 1.2, // Increased from 0.8
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className='py-20 px-4'
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={containerVariants}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Content Side */}
          <div className='space-y-6'>
            <motion.h2
              className='text-3xl md:text-4xl font-bold text-black'
              variants={itemVariants}
            >
              About El Compa Suds
            </motion.h2>
            <motion.div
              className='h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80'
              variants={gradientLineVariants}
            ></motion.div>
            <motion.p
              className='text-lg text-black leading-relaxed'
              variants={itemVariants}
            >
              Our certified detailers use premium products and cutting-edge
              techniques to deliver unmatched results for your vehicle.
            </motion.p>
            <motion.p
              className='text-lg text-black leading-relaxed'
              variants={itemVariants}
            >
              Founded in 2018, El Compa Suds has quickly become the region's
              most trusted name in automotive detailing. We combine passion for
              cars with technical expertise to restore your vehicle to showroom
              condition.
            </motion.p>
            <motion.div
              className='grid grid-cols-2 gap-4 mt-8'
              variants={containerVariants}
            >
              <motion.div
                className='bg-white p-4 rounded-lg shadow-sm'
                custom={0}
                variants={statsVariants}
                whileHover={{ y: -5, transition: { duration: 0.4 } }} // Increased from 0.2
              >
                <p className='font-bold text-3xl text-amber-500'>500+</p>
                <p className='text-gray-700'>Happy Customers</p>
              </motion.div>
              <motion.div
                className='bg-white p-4 rounded-lg shadow-sm'
                custom={1}
                variants={statsVariants}
                whileHover={{ y: -5, transition: { duration: 0.4 } }} // Increased from 0.2
              >
                <p className='font-bold text-3xl text-amber-500'>5★</p>
                <p className='text-gray-700'>Average Rating</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            className='relative h-96 md:h-full rounded-xl overflow-hidden shadow-lg'
            variants={imageVariants}
          >
            <Image
              src='/images/about/image1.jpg'
              alt='El Compa Suds Detailing Team'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover'
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
