'use client';

import React from 'react';
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

export default function ContactPage() {
  // Create breadcrumbs for the Contact page
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
  ];

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
          <div className='mb-12 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-black'>
              Get In Touch
            </h2>
            <p className='text-lg text-black max-w-3xl mx-auto'>
              Have questions about our services or want to schedule an
              appointment? We're here to help! Reach out to us using any of the
              methods below.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Contact Info Cards */}
            <div className='lg:col-span-1 space-y-6'>
              <Card>
                <CardContent className='pt-6'>
                  <div className='flex items-start space-x-4'>
                    <PhoneIcon className='h-6 w-6 text-black mt-1 flex-shrink-0' />
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
              </Card>

              <Card>
                <CardContent className='pt-6'>
                  <div className='flex items-start space-x-4'>
                    <MailIcon className='h-6 w-6 text-black mt-1 flex-shrink-0' />
                    <div>
                      <h3 className='font-medium text-lg text-black'>Email</h3>
                      <p className='text-black'>info@elcompasuds.com</p>
                      <p className='text-sm text-black mt-1'>
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='pt-6'>
                  <div className='flex items-start space-x-4'>
                    <MapPinIcon className='h-6 w-6 text-black mt-1 flex-shrink-0' />
                    <div>
                      <h3 className='font-medium text-lg text-black'>
                        Location
                      </h3>
                      <p className='text-black'>
                        8502 Preston Rd.
                        <br />
                        Inglewood, Maine 98380
                      </p>
                      <a
                        href='https://maps.google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black text-sm hover:underline mt-1 inline-block'
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='pt-6'>
                  <div className='flex items-start space-x-4'>
                    <ClockIcon className='h-6 w-6 text-black mt-1 flex-shrink-0' />
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
              </Card>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-2'>
              <Card>
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
              </Card>
            </div>
          </div>
          {/* Map Section */}
          <div className='mt-16'>
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
          </div>
        </div>
      </section>
    </main>
  );
}
