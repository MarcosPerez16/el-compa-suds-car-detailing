'use client';

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import { testimonials } from './testimonialsData';
import { motion, useInView } from 'framer-motion';

function StarRating({ rating }) {
  return (
    <div className='flex items-center gap-1 mt-2'>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

function Avatar({ src, name, role }) {
  return (
    <div className='flex flex-col items-center'>
      <img
        src={src}
        alt={name}
        className='w-16 h-16 rounded-full object-cover mb-2'
      />
      <h3 className='font-semibold text-lg text-black'>{name}</h3>
      <p className='text-sm text-black'>{role}</p>
    </div>
  );
}

export default function TestimonialSection() {
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
        delay: 0.4 + index * 0.15, // Increased from 0.2 + index * 0.1
        duration: 0.9, // Increased from 0.5
        ease: 'easeOut',
      },
    }),
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.2,
      scale: 1,
      transition: {
        duration: 0.8, // Increased from 0.5
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className='py-16' ref={ref}>
      <div className='container mx-auto px-4 text-center'>
        <motion.h2
          className='text-4xl font-bold mb-12 text-black'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          What Our Customers Say
        </motion.h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              custom={index}
              variants={cardVariants}
            >
              <Card className='group bg-white/70 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-amber-500/50 overflow-hidden h-full'>
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                    },
                  }} // Decreased stiffness from 300 for slower movement
                  className='h-full'
                >
                  <CardHeader className='flex flex-col items-center pb-4 bg-gray-50/50 transition-colors duration-300'>
                    <Avatar
                      src={testimonial.image}
                      name={testimonial.name}
                      role={testimonial.role}
                    />
                    <StarRating rating={testimonial.rating} />
                  </CardHeader>
                  <CardContent className='relative pt-6 pb-8 px-6'>
                    <motion.div
                      initial='hidden'
                      animate={isInView ? 'visible' : 'hidden'}
                      variants={quoteVariants}
                      className='absolute top-0 left-0'
                    >
                      <Quote className='w-8 h-8 text-black opacity-20' />
                    </motion.div>
                    <p className='text-black italic text-base leading-relaxed relative z-10 pl-8 transition-colors duration-300'>
                      "{testimonial.review}"
                    </p>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
