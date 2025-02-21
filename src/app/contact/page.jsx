'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';

export default function ContactPage() {
  // Create breadcrumbs for the Contact page
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real app, you would send this data to your backend
      console.log('Form data:', data);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

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
            <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent'>
              Get In Touch
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
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
                    <PhoneIcon className='h-6 w-6 text-blue-700 mt-1 flex-shrink-0' />
                    <div>
                      <h3 className='font-medium text-lg'>Phone</h3>
                      <p className='text-muted-foreground'>(684) 555-0102</p>
                      <p className='text-sm text-muted-foreground mt-1'>
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
                    <MailIcon className='h-6 w-6 text-blue-700 mt-1 flex-shrink-0' />
                    <div>
                      <h3 className='font-medium text-lg'>Email</h3>
                      <p className='text-muted-foreground'>
                        info@elcompasuds.com
                      </p>
                      <p className='text-sm text-muted-foreground mt-1'>
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='pt-6'>
                  <div className='flex items-start space-x-4'>
                    <MapPinIcon className='h-6 w-6 text-blue-700 mt-1 flex-shrink-0' />
                    <div>
                      <h3 className='font-medium text-lg'>Location</h3>
                      <p className='text-muted-foreground'>
                        8502 Preston Rd.
                        <br />
                        Inglewood, Maine 98380
                      </p>
                      <a
                        href='https://maps.google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-700 text-sm hover:underline mt-1 inline-block'
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
                    <ClockIcon className='h-6 w-6 text-blue-700 mt-1 flex-shrink-0' />
                    <div>
                      <h3 className='font-medium text-lg'>Business Hours</h3>
                      <p className='text-sm text-muted-foreground mt-1'>
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
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitSuccess ? (
                    <div className='bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center'>
                      <h3 className='font-bold text-xl mb-2'>Message Sent!</h3>
                      <p>
                        Thank you for reaching out. We'll get back to you
                        shortly.
                      </p>
                      <Button
                        className='mt-4'
                        onClick={() => setSubmitSuccess(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className='space-y-4'
                    >
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                          <label htmlFor='name' className='font-medium'>
                            Name
                          </label>
                          <Input
                            id='name'
                            placeholder='Your Name'
                            {...register('name', {
                              required: 'Name is required',
                            })}
                          />
                          {errors.name && (
                            <p className='text-red-500 text-sm'>
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div className='space-y-2'>
                          <label htmlFor='email' className='font-medium'>
                            Email
                          </label>
                          <Input
                            id='email'
                            type='email'
                            placeholder='your.email@example.com'
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                              },
                            })}
                          />
                          {errors.email && (
                            <p className='text-red-500 text-sm'>
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <label htmlFor='phone' className='font-medium'>
                          Phone (Optional)
                        </label>
                        <Input
                          id='phone'
                          placeholder='(123) 456-7890'
                          {...register('phone')}
                        />
                      </div>

                      <div className='space-y-2'>
                        <label htmlFor='service' className='font-medium'>
                          Service Interested In
                        </label>
                        <select
                          id='service'
                          className='w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background'
                          {...register('service')}
                        >
                          <option value=''>Select a service</option>
                          <option value='Basic Exterior'>Basic Exterior</option>
                          <option value='Premium Exterior'>
                            Premium Exterior
                          </option>
                          <option value='Ultimate Exterior'>
                            Ultimate Exterior
                          </option>
                          <option value='Basic Interior'>Basic Interior</option>
                          <option value='Premium Interior'>
                            Premium Interior
                          </option>
                          <option value='Ultimate Interior'>
                            Ultimate Interior
                          </option>
                          <option value='Ceramic Coating'>
                            Ceramic Coating
                          </option>
                          <option value='Paint Protection Film'>
                            Paint Protection Film
                          </option>
                          <option value='Other'>Other</option>
                        </select>
                      </div>

                      <div className='space-y-2'>
                        <label htmlFor='message' className='font-medium'>
                          Message
                        </label>
                        <Textarea
                          id='message'
                          placeholder='Tell us about your vehicle and what you need...'
                          rows={5}
                          {...register('message', {
                            required: 'Message is required',
                          })}
                        />
                        {errors.message && (
                          <p className='text-red-500 text-sm'>
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type='submit'
                        className='w-full'
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className='mt-16'>
            <div className='bg-gray-200 rounded-xl h-96 overflow-hidden'>
              {/* Replace with actual Google Maps embed */}
              <div className='w-full h-full flex items-center justify-center bg-gray-100'>
                <p className='text-gray-500'>Google Maps Embed Would Go Here</p>
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
