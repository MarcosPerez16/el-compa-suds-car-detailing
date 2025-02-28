'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { featuredServices } from './servicesHomeData';
import { motion, useInView } from 'framer-motion';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -200px 0px', // Trigger earlier when scrolling
  });

  // Animation variants with slower transitions
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0, // Increased from 0.6
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15, // Increased from 0.1
        duration: 1.0, // Increased from 0.6
        ease: 'easeOut',
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9, // Increased from 0.6
        duration: 0.8, // Increased from 0.5
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className='py-20 px-4' ref={ref}>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-12 text-black'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          Our Top Services
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.5 } }} // Added transition duration
              className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group relative'
            >
              {service.badge && (
                <div
                  className={`absolute top-4 right-4 ${service.badge.color} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}
                >
                  {service.badge.text}
                </div>
              )}
              <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover group-hover:scale-105 transition-transform duration-700' // Increased from 500
                />
              </div>
              <div className='flex items-center justify-between mb-3'>
                <h3 className='text-xl font-semibold text-black'>
                  {service.title}
                </h3>
                <span className='text-amber-500 font-medium'>
                  {service.price}
                </span>
              </div>
              <p className='text-black'>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='mt-12 flex justify-center w-full'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={buttonVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }} // Added transition duration
        >
          <Link href='/services' className='w-full sm:w-auto'>
            <Button
              size='lg'
              className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full'
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
