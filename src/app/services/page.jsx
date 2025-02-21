'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
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

const ServicesDetailPage = () => {
  // Create breadcrumbs for the Services page
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
  ];

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
          <section key={service.title} className='mt-12'>
            <Card className='w-full'>
              <CardHeader>
                <CardTitle className='text-2xl text-black'>
                  {service.title}
                </CardTitle>
                <p className='text-black'>{service.description}</p>{' '}
                {/* Changed to text-black */}
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {Object.values(service.tiers).map((tier, tierIndex) => (
                    <div key={tier.name} className='group'>
                      <Card className='relative overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1'>
                        <div className='w-full aspect-[4/3] relative bg-gray-200 overflow-hidden'>
                          <div className='w-full h-full relative transition-transform duration-300 group-hover:scale-105'>
                            <Image
                              src={getImagePath(service.title, tier.name)}
                              alt={`${tier.name} service`}
                              fill
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
                            {tier.services.map((item, index) => (
                              <li key={index} className='flex items-start'>
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
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        ))}

        {/* Additional Services Section */}
        <section className='mt-12'>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl text-black'>
                Additional Services
              </CardTitle>
              <p className='text-black'>
                Customize your detailing package with these add-on services{' '}
                {/* Changed to text-black */}
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
                    <TableRow key={service.name}>
                      <TableCell className='font-medium text-black'>
                        {service.name}
                      </TableCell>
                      <TableCell className='text-black'>
                        {service.price}
                      </TableCell>
                      <TableCell className='text-black'>
                        {service.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action Section */}
        <section className='mt-12 text-center space-y-6 px-4'>
          <h2 className='text-3xl font-bold text-black'>
            Ready to Transform Your Vehicle?
          </h2>
          <p className='text-lg text-black mx-auto max-w-2xl'>
            Book your appointment now and get 10% off your first detailing
          </p>
          <div className='mt-6'>
            <Link href='/contact' className='w-full sm:w-auto inline-block'>
              <Button
                size='lg'
                className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full'
              >
                Schedule Detailing
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesDetailPage;
