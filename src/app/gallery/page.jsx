'use client';

import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { galleryItems } from './galleryData';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/button';

// Create a motion button component
const MotionButton = motion(Button);

export default function GalleryPage() {
  // Create breadcrumbs for the Gallery page
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
  ];

  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Get unique categories for filter buttons
  const categories = [
    'All',
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  // Filter gallery items based on active filter
  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: 'easeOut',
      },
    },
  };

  const filterButtonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const filterButtonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.2,
      },
    },
  };

  const galleryItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.5 + index * 0.15,
        ease: 'easeOut',
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: 0.5,
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
        duration: 0.8,
        delay: 0.7,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Create refs for each section
  const headingRef = React.useRef(null);
  const filterRef = React.useRef(null);
  const galleryRef = React.useRef(null);
  const ctaRef = React.useRef(null);

  // Track when sections enter viewport
  const headingInView = useInView(headingRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const filterInView = useInView(filterRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const galleryInView = useInView(galleryRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const ctaInView = useInView(ctaRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });

  return (
    <main>
      {/* Add the PageBanner at the top */}
      <PageBanner
        title='Gallery'
        subtitle=''
        isHomePage={false}
        breadcrumbs={breadcrumbs}
      />

      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='mb-12 text-center'
            ref={headingRef}
            initial='hidden'
            animate={headingInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
          >
            <motion.h2
              className='text-3xl md:text-4xl font-bold mb-4 text-black'
              variants={headerVariants}
            >
              Our Work Showcase
            </motion.h2>
            <motion.p
              className='text-lg text-black max-w-3xl mx-auto'
              variants={headerVariants}
            >
              Browse through our portfolio of detailing transformations and see
              the quality of our work. Each project represents our commitment to
              excellence.
            </motion.p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            className='flex flex-wrap gap-2 justify-center mb-10'
            ref={filterRef}
            initial='hidden'
            animate={filterInView ? 'visible' : 'hidden'}
            variants={filterButtonsContainerVariants}
          >
            {categories.map((category) => (
              <motion.div
                key={category}
                variants={filterButtonVariants}
                whileHover='hover'
                whileTap='tap'
              >
                <Button
                  variant={activeFilter === category ? 'solid' : 'outline'} // Change variant to 'solid' for active state
                  className={`rounded-full ${
                    activeFilter === category
                      ? 'bg-black text-white'
                      : 'border-black text-black'
                  }`} // Add custom styles for active/inactive buttons
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            ref={galleryRef}
            initial='hidden'
            animate={galleryInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
          >
            <AnimatePresence mode='sync'>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${activeFilter}-${item.src}-${index}`} // Include filter in key to ensure re-rendering
                  className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'
                  custom={index}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  variants={galleryItemVariants}
                  layout
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={activeFilter === 'All' && index < 6} // Prioritize first visible items in default view
                    loading={
                      activeFilter === 'All' && index < 6 ? 'eager' : 'lazy'
                    }
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <div className='absolute bottom-0 left-0 right-0 p-4'>
                      <h3 className='text-white font-semibold'>{item.title}</h3>
                      <p className='text-white/90 text-sm'>{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className='text-center mt-16'
            ref={ctaRef}
            initial='hidden'
            animate={ctaInView ? 'visible' : 'hidden'}
            variants={ctaVariants}
          >
            <motion.h3
              className='text-2xl font-bold text-black mb-4'
              variants={headerVariants}
            >
              Ready to experience our detailing services?
            </motion.h3>
            <motion.p
              className='text-lg text-black mb-6'
              variants={headerVariants}
            >
              Schedule your appointment today and let us transform your vehicle
            </motion.p>
            <motion.div
              className='flex justify-center w-full'
              variants={buttonVariants}
            >
              <Link href='/contact' className='w-full sm:w-auto'>
                <motion.div whileHover='hover' whileTap='tap'>
                  <Button
                    size='lg'
                    className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full'
                  >
                    Request A Quote
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
