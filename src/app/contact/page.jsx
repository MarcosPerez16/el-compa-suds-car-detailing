'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import PageBanner from '@/components/ui/PageBanner';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import ContactForm from '@/components/contactform/ContactForm';

// Create motion components
const MotionCard = motion(Card);

export default function ContactPage() {
  // Create breadcrumbs for the Contact page
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
  ];

  // Animation variants
  const headingVariants = {
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

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const infoCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + index * 0.15,
        ease: 'easeOut',
      },
    }),
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  // Create refs and check when elements are in view
  const headerRef = React.useRef(null);
  const infoCardsRef = React.useRef(null);
  const formRef = React.useRef(null);
  const mapRef = React.useRef(null);

  const headerInView = useInView(headerRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const infoCardsInView = useInView(infoCardsRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const formInView = useInView(formRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const mapInView = useInView(mapRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });

  return (
    <main>
      <PageBanner
        title='Contact'
        subtitle=''
        isHomePage={false}
        breadcrumbs={breadcrumbs}
      />

      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='mb-12 text-center'
            ref={headerRef}
            initial='hidden'
            animate={headerInView ? 'visible' : 'hidden'}
            variants={cardContainerVariants}
          >
            <motion.h2
              className='text-3xl md:text-4xl font-bold mb-4 text-black'
              variants={headingVariants}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className='text-lg text-black max-w-3xl mx-auto'
              variants={headingVariants}
            >
              Have questions about our services or want to schedule an
              appointment? We're here to help! Reach out to us using any of the
              methods below.
            </motion.p>
          </motion.div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Contact Info Cards */}
            <motion.div
              className='lg:col-span-1 space-y-6'
              ref={infoCardsRef}
              initial='hidden'
              animate={infoCardsInView ? 'visible' : 'hidden'}
              variants={cardContainerVariants}
            >
              <MotionCard custom={0} variants={infoCardVariants}>
                <CardContent className='pt-6'>
                  <div className='flex items-start space-x-4'>
                    <motion.div variants={iconVariants}>
                      <PhoneIcon className='h-6 w-6 text-black mt-1 flex-shrink-0' />
                    </motion.div>
                    <div>
                      <h3 className='font-medium text-lg text-black'>Phone</h3>
                      <p className='text-black'>(684) 555-0102</p>
                      <p className='text-sm text-black mt-1'>
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>

              <MotionCard custom={1} variants={infoCardVariants}>
                <CardContent className='pt-6'>
                  <div className='flex items-start space-x-4'>
                    <motion.div variants={iconVariants}>
                      <MailIcon className='h-6 w-6 text-black mt-1 flex-shrink-0' />
                    </motion.div>
                    <div>
                      <h3 className='font-medium text-lg text-black'>Email</h3>
                      <p className='text-black'>info@elcompasuds.com</p>
                      <p className='text-sm text-black mt-1'>
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>

              <MotionCard custom={2} variants={infoCardVariants}>
                <CardContent className='pt-6'>
                  <div className='flex items-start space-x-4'>
                    <motion.div variants={iconVariants}>
                      <MapPinIcon className='h-6 w-6 text-black mt-1 flex-shrink-0' />
                    </motion.div>
                    <div>
                      <h3 className='font-medium text-lg text-black'>
                        Location
                      </h3>
                      <p className='text-black'>
                        8502 Preston Rd.
                        <br />
                        Inglewood, Maine 98380
                      </p>
                      <motion.a
                        href='https://maps.google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black text-sm hover:underline mt-1 inline-block'
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.3 },
                        }}
                      >
                        Get Directions
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>

              <MotionCard custom={3} variants={infoCardVariants}>
                <CardContent className='pt-6'>
                  <div className='flex items-start space-x-4'>
                    <motion.div variants={iconVariants}>
                      <ClockIcon className='h-6 w-6 text-black mt-1 flex-shrink-0' />
                    </motion.div>
                    <div>
                      <h3 className='font-medium text-lg text-black'>
                        Business Hours
                      </h3>
                      <p className='text-sm text-black mt-1'>
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 5:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className='lg:col-span-2'
              ref={formRef}
              initial='hidden'
              animate={formInView ? 'visible' : 'hidden'}
              variants={formVariants}
            >
              <MotionCard variants={cardVariants}>
                <CardHeader>
                  <CardTitle className='text-black'>
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className='text-black'>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </MotionCard>
            </motion.div>
          </div>
          {/* Map Section */}
          <motion.div
            className='mt-16'
            ref={mapRef}
            initial='hidden'
            animate={mapInView ? 'visible' : 'hidden'}
            variants={mapVariants}
          >
            <div className='bg-gray-200 rounded-xl h-96 overflow-hidden'>
              {/* Replace with actual Google Maps embed */}
              <div className='w-full h-full flex items-center justify-center bg-gray-100'>
                <p className='text-black'>Google Maps Embed Would Go Here</p>
                {/* To add a Google Map:
                <iframe
                  src='https://www.google.com/maps/embed?pb=...'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
