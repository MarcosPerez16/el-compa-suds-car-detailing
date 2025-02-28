'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { services, additionalServices } from './servicesData';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import PageBanner from '@/components/ui/PageBanner';

// Create animated versions of UI components
const MotionCard = motion(Card);
const MotionTableRow = motion(TableRow);

const ServicesDetailPage = () => {
  // Create breadcrumbs for the Services page
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
  ];

  const getImagePath = (serviceType, tierType) => {
    const serviceFolder = serviceType.toLowerCase().includes('exterior')
      ? 'exterior'
      : 'interior';
    const imageNumber = tierType.toLowerCase().includes('basic')
      ? '1'
      : tierType.toLowerCase().includes('premium')
      ? '2'
      : '3';
    return `/images/services/${serviceFolder}/${
      serviceFolder.charAt(0).toUpperCase() + serviceFolder.slice(1)
    }${imageNumber}.jpg`;
  };

  // Animation variants
  const sectionVariants = {
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

  const cardVariants = {
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

  const serviceCardVariants = {
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
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.3 + index * 0.08,
        ease: 'easeOut',
      },
    }),
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
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
        delay: 0.3,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.97,
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.3 + index * 0.08,
        ease: 'easeOut',
      },
    }),
  };

  // Create refs for each section
  const serviceSectionRefs = Object.values(services).map(() =>
    React.useRef(null)
  );
  const serviceSectionInView = serviceSectionRefs.map((ref) =>
    useInView(ref, { once: true, amount: 0.1, margin: '-100px 0px' })
  );

  const additionalSectionRef = React.useRef(null);
  const additionalSectionInView = useInView(additionalSectionRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });

  const ctaSectionRef = React.useRef(null);
  const ctaSectionInView = useInView(ctaSectionRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });

  return (
    <>
      {/* Add the PageBanner at the top */}
      <PageBanner
        title='Services'
        subtitle=''
        isHomePage={false}
        breadcrumbs={breadcrumbs}
      />
      <div className='container mx-auto py-8 space-y-8 overflow-hidden'>
        {/* Service Sections */}
        {Object.values(services).map((service, index) => (
          <motion.section
            key={service.title}
            className='mt-12'
            ref={serviceSectionRefs[index]}
            initial='hidden'
            animate={serviceSectionInView[index] ? 'visible' : 'hidden'}
            variants={sectionVariants}
          >
            <MotionCard className='w-full' variants={cardVariants}>
              <CardHeader>
                <CardTitle className='text-2xl text-black'>
                  {service.title}
                </CardTitle>
                <p className='text-black'>{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {Object.values(service.tiers).map((tier, tierIndex) => (
                    <motion.div
                      key={tier.name}
                      className='group'
                      custom={tierIndex}
                      variants={serviceCardVariants}
                    >
                      <Card className='relative overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1'>
                        <div className='w-full aspect-[4/3] relative bg-gray-200 overflow-hidden'>
                          <div className='w-full h-full relative transition-transform duration-300 group-hover:scale-105'>
                            <Image
                              src={getImagePath(service.title, tier.name)}
                              alt={`${tier.name} service`}
                              fill
                              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              className='object-cover'
                              priority
                            />
                          </div>
                        </div>
                        <CardHeader className='border-b bg-gray-50'>
                          <CardTitle className='text-xl text-black'>
                            {tier.name}
                          </CardTitle>
                          <p className='text-2xl font-bold text-black'>
                            {tier.price}
                          </p>
                        </CardHeader>
                        <CardContent className='pt-6'>
                          <ul className='space-y-3'>
                            {tier.services.map((item, serviceIndex) => (
                              <motion.li
                                key={serviceIndex}
                                className='flex items-start'
                                custom={serviceIndex}
                                variants={listItemVariants}
                              >
                                <svg
                                  className='h-6 w-6 mr-2 text-green-500 flex-shrink-0'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M5 13l4 4L19 7'
                                  />
                                </svg>
                                <span className='text-black'>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </MotionCard>
          </motion.section>
        ))}

        {/* Additional Services Section */}
        <motion.section
          className='mt-12'
          ref={additionalSectionRef}
          initial='hidden'
          animate={additionalSectionInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <MotionCard variants={cardVariants}>
            <CardHeader>
              <CardTitle className='text-2xl text-black'>
                Additional Services
              </CardTitle>
              <p className='text-black'>
                Customize your detailing package with these add-on services
              </p>
            </CardHeader>
            <CardContent>
              <Table className='block'>
                <TableHeader>
                  <TableRow>
                    <TableHead className='text-black'>Service</TableHead>
                    <TableHead className='text-black'>Price</TableHead>
                    <TableHead className='text-black'>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {additionalServices.map((service, index) => (
                    <MotionTableRow
                      key={service.name}
                      custom={index}
                      variants={tableRowVariants}
                    >
                      <TableCell className='font-medium text-black'>
                        {service.name}
                      </TableCell>
                      <TableCell className='text-black'>
                        {service.price}
                      </TableCell>
                      <TableCell className='text-black'>
                        {service.description}
                      </TableCell>
                    </MotionTableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </MotionCard>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className='mt-12 text-center space-y-6 px-4'
          ref={ctaSectionRef}
          initial='hidden'
          animate={ctaSectionInView ? 'visible' : 'hidden'}
          variants={ctaVariants}
        >
          <motion.h2
            className='text-3xl font-bold text-black'
            variants={cardVariants}
          >
            Ready to Transform Your Vehicle?
          </motion.h2>
          <motion.p
            className='text-lg text-black mx-auto max-w-2xl'
            variants={cardVariants}
          >
            Book your appointment now and get 10% off your first detailing
          </motion.p>
          <motion.div className='mt-6' variants={buttonVariants}>
            <Link href='/contact' className='w-full sm:w-auto inline-block'>
              <motion.div whileHover='hover' whileTap='tap'>
                <Button
                  size='lg'
                  className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full'
                >
                  Schedule Detailing
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default ServicesDetailPage;
