import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <section className='relative overflow-hidden'>
      {/* Banner Image - taller on homepage, shorter on other pages */}
      <div
        className={cn(
          'absolute inset-0 z-0',
          isHomePage ? 'h-full' : 'h-56 md:h-64' // Fixed height for interior pages
        )}
      >
        <Image
          src='/images/banners/HeroSectionBanner.webp'
          alt='Car Detailing Banner'
          fill
          priority
          className='object-cover'
        />
      </div>

      {/* Dark overlay */}
      <div
        className={cn(
          'absolute bg-black/50 z-10',
          isHomePage ? 'inset-0' : 'inset-0 h-56 md:h-64' // Match height for interior pages
        )}
      ></div>

      {/* Content container with dynamic height */}
      <div
        className={cn(
          'relative z-20 container mx-auto px-4 sm:px-6 lg:px-8',
          isHomePage ? 'py-24 md:py-32' : 'py-6 md:py-8' // Much shorter padding for interior
        )}
      >
        {/* Breadcrumbs - only shown on non-homepage */}
        {!isHomePage && breadcrumbs.length > 0 && (
          <div className='text-white/80 mb-2 flex items-center space-x-2 text-sm'>
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
          </div>
        )}

        {/* Page title - larger on homepage */}
        <h1
          className={cn(
            'font-bold text-white',
            isHomePage
              ? 'text-4xl md:text-6xl mb-6'
              : 'text-xl md:text-3xl mb-1' // Smaller text for interior
          )}
        >
          {title}
        </h1>

        {/* Subtitle - only if provided */}
        {subtitle && (
          <p
            className={cn(
              'text-white/90',
              isHomePage
                ? 'text-lg md:text-xl max-w-4xl mx-auto text-center'
                : 'text-xs md:text-sm max-w-2xl' // Smaller text for interior
            )}
          >
            {subtitle}
          </p>
        )}

        {/* Child content slot - to allow custom content per page */}
        <div className={cn('mt-8', isHomePage ? 'block' : 'hidden')}>
          {isHomePage ? (
            <div className='flex justify-center'>
              <Link
                href='/contact'
                className='bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors'
              >
                Schedule Detailing
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
