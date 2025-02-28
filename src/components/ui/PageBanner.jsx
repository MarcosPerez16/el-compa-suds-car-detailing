import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Utility function for combining classNames conditionally
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function PageBanner({
  title,
  subtitle,
  isHomePage = false,
  breadcrumbs = [],
}) {
  // Animation variants
  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: 'easeOut',
      },
    },
  };

  const contentContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.5,
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
        duration: 1.2,
        delay: 0.8,
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
        duration: 1.2,
        delay: 1.1,
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
        delay: 1.4,
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

  const breadcrumbsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className='relative overflow-hidden'>
      {/* Banner Image - taller on homepage, shorter on other pages */}
      <motion.div
        className={cn(
          'absolute inset-0 z-0',
          isHomePage ? 'h-full' : 'h-56 md:h-64' // Fixed height for interior pages
        )}
        initial='hidden'
        animate='visible'
        variants={bannerVariants}
      >
        <Image
          src='/images/banners/HeroSectionBanner.webp'
          priority
          alt='Car Detailing Banner'
          fill
          className='object-cover'
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className={cn(
          'absolute bg-black/50 z-10',
          isHomePage ? 'inset-0' : 'inset-0 h-56 md:h-64' // Match height for interior pages
        )}
        initial='hidden'
        animate='visible'
        variants={bannerVariants}
      ></motion.div>

      {/* Content container with dynamic height */}
      <motion.div
        className={cn(
          'relative z-20 container mx-auto px-4 sm:px-6 lg:px-8',
          isHomePage ? 'py-24 md:py-32' : 'py-6 md:py-8' // Much shorter padding for interior
        )}
        initial='hidden'
        animate='visible'
        variants={contentContainerVariants}
      >
        {/* Breadcrumbs - only shown on non-homepage */}
        {!isHomePage && breadcrumbs.length > 0 && (
          <motion.div
            className='text-white/80 mb-2 flex items-center space-x-2 text-sm'
            variants={breadcrumbsVariants}
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                {index > 0 && <span className='mx-1'>/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className='font-medium'>{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.path}
                    className='hover:text-white transition-colors'
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}

        {/* Page title - larger on homepage */}
        <motion.h1
          className={cn(
            'font-bold text-white',
            isHomePage
              ? 'text-4xl md:text-6xl mb-6'
              : 'text-xl md:text-3xl mb-1' // Smaller text for interior
          )}
          variants={titleVariants}
        >
          {title}
        </motion.h1>

        {/* Subtitle - only if provided */}
        {subtitle && (
          <motion.p
            className={cn(
              'text-white/90',
              isHomePage
                ? 'text-lg md:text-xl max-w-4xl mx-auto text-center'
                : 'text-xs md:text-sm max-w-2xl' // Smaller text for interior
            )}
            variants={subtitleVariants}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Child content slot - to allow custom content per page */}
        <motion.div
          className={cn('mt-8', isHomePage ? 'block' : 'hidden')}
          variants={buttonVariants}
        >
          {isHomePage ? (
            <div className='flex justify-center'>
              <motion.div whileHover='hover' whileTap='tap'>
                <Link
                  href='/contact'
                  className='bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors'
                >
                  Schedule Detailing
                </Link>
              </motion.div>
            </div>
          ) : null}
        </motion.div>
      </motion.div>
    </section>
  );
}
