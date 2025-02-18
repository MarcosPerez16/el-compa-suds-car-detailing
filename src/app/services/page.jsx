'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

const ServicesDetailPage = () => {
  const services = {
    exterior: {
      title: 'Exterior Detailing',
      description: 'Complete exterior restoration and protection',
      tiers: {
        basic: {
          name: 'Basic Exterior',
          price: '$149',
          services: [
            'Hand wash and dry',
            'Wheel cleaning',
            'Tire dressing',
            'Basic paint decontamination',
            'Spray wax protection',
          ],
        },
        premium: {
          name: 'Premium Exterior',
          price: '$249',
          services: [
            'All Basic services',
            'Clay bar treatment',
            'Paint correction (minor)',
            'Ceramic coating (6 months)',
            'Wheel ceramic coating',
            'Premium tire dressing',
          ],
        },
        ultimate: {
          name: 'Ultimate Exterior',
          price: '$449',
          services: [
            'All Premium services',
            'Full paint correction',
            'Premium ceramic coating (2 years)',
            'Paint protection film (PPF)',
            'Headlight restoration',
            'Chrome treatment',
          ],
        },
      },
    },
    interior: {
      title: 'Interior Detailing',
      description: 'Deep cleaning and interior restoration',
      tiers: {
        basic: {
          name: 'Basic Interior',
          price: '$129',
          services: [
            'Vacuum all surfaces',
            'Wipe down surfaces',
            'Basic carpet cleaning',
            'Window cleaning',
            'Air freshener',
          ],
        },
        premium: {
          name: 'Premium Interior',
          price: '$229',
          services: [
            'All Basic services',
            'Deep carpet extraction',
            'Leather cleaning',
            'Stain removal',
            'UV protection application',
            'Steam cleaning',
          ],
        },
        ultimate: {
          name: 'Ultimate Interior',
          price: '$399',
          services: [
            'All Premium services',
            'Leather conditioning',
            'Headliner cleaning',
            'Ozone treatment',
            'Fabric protection coating',
            'Complete sanitization',
          ],
        },
      },
    },
  };

  const additionalServices = [
    {
      name: 'Engine Bay Detailing',
      price: '$89',
      description: 'Deep cleaning and dressing of engine compartment',
    },
    {
      name: 'Paint Protection Film',
      price: 'From $499',
      description: 'Premium protection for high-impact areas',
    },
    {
      name: 'Headlight Restoration',
      price: '$129',
      description: 'Restore clarity to oxidized headlights',
    },
    {
      name: 'Ceramic Coating',
      price: 'From $699',
      description: 'Long-term paint protection and gloss enhancement',
    },
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

  // Animation variants for initial page load header
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // Increased duration
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for sections entering from left
  const fromLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5, // Increased duration
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for sections entering from right
  const fromRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5, // Increased duration
        ease: 'easeOut',
      },
    },
  };

  // Variants for service cards sliding up
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // Increased duration
        ease: 'easeOut',
      },
    },
  };

  // Image hover animation
  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className='container mx-auto py-8 space-y-8 overflow-hidden'>
      {/* Header Section - Animates on initial load */}
      <motion.div
        className='text-center space-y-4'
        initial='hidden'
        animate='visible'
        variants={headerVariants}
      >
        <h1 className='text-4xl font-bold text-blue-900'>
          Our Detailing Services
        </h1>
        <p className='text-lg text-gray-600'>
          Choose from our carefully curated packages designed to restore and
          protect your vehicle
        </p>
      </motion.div>

      {/* Service Sections - Alternate sliding from left and right */}
      {Object.values(services).map((service, index) => (
        <motion.section
          key={service.title}
          className='mt-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={index % 2 === 0 ? fromLeftVariants : fromRightVariants}
        >
          <Card className='w-full'>
            <CardHeader>
              <CardTitle className='text-2xl text-blue-900'>
                {service.title}
              </CardTitle>
              <p className='text-gray-600'>{service.description}</p>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {Object.values(service.tiers).map((tier, tierIndex) => (
                  <motion.div
                    key={tier.name}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    transition={{ delay: tierIndex * 0.2 }}
                  >
                    <Card className='relative overflow-hidden h-full'>
                      <motion.div
                        className='w-full aspect-[4/3] relative bg-gray-200 overflow-hidden'
                        initial='rest'
                        whileHover='hover'
                        animate='rest'
                      >
                        <motion.div
                          className='w-full h-full relative'
                          variants={imageVariants}
                        >
                          <Image
                            src={getImagePath(service.title, tier.name)}
                            alt={`${tier.name} service`}
                            fill
                            className='object-cover'
                            priority
                          />
                        </motion.div>
                      </motion.div>
                      <CardHeader className='border-b bg-gray-50'>
                        <CardTitle className='text-xl'>{tier.name}</CardTitle>
                        <p className='text-2xl font-bold text-blue-900'>
                          {tier.price}
                        </p>
                      </CardHeader>
                      <CardContent className='pt-6'>
                        <ul className='space-y-3'>
                          {tier.services.map((item, index) => (
                            <motion.li
                              key={index}
                              className='flex items-start'
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
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
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      ))}

      {/* Additional Services Section - Slides in from right */}
      <motion.section
        className='mt-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fromRightVariants}
      >
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl text-blue-900'>
              Additional Services
            </CardTitle>
            <p className='text-gray-600'>
              Customize your detailing package with these add-on services
            </p>
          </CardHeader>
          <CardContent>
            <Table className='block'>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {additionalServices.map((service, index) => (
                  <motion.tr
                    key={service.name}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }} // Increased delay
                  >
                    <TableCell className='font-medium'>
                      {service.name}
                    </TableCell>
                    <TableCell>{service.price}</TableCell>
                    <TableCell>{service.description}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.section>

      {/* Call to Action Section - Slides up */}
      <motion.section
        className='mt-12 text-center space-y-4'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <h2 className='text-3xl font-bold text-blue-900'>
          Ready to Transform Your Vehicle?
        </h2>
        <p className='text-lg text-gray-600'>
          Book your appointment now and get 10% off your first detailing
        </p>
        <motion.button
          className='bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Detailing
        </motion.button>
      </motion.section>
    </div>
  );
};

export default ServicesDetailPage;
