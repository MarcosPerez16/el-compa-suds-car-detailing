'use client';

import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// EmailJS configuration
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const form = useRef();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Map form field names to match EmailJS template variables
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        phone: data.phone || 'Not provided',
        service: data.service || 'Not specified',
        message: data.message,
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitSuccess ? (
        <div className='bg-green-50 border border-green-200 text-black rounded-lg p-6 text-center'>
          <h3 className='font-bold text-xl mb-2'>Message Sent!</h3>
          <p>Thank you for reaching out. We'll get back to you shortly.</p>
          <Button
            className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full mt-4'
            onClick={() => setSubmitSuccess(false)}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-4'
        >
          {submitError && (
            <div className='bg-red-50 border border-red-200 text-red-700 rounded-lg p-4'>
              {submitError}
            </div>
          )}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label htmlFor='name' className='font-medium text-black'>
                Name
              </label>
              <Input
                id='name'
                name='name'
                placeholder='Your Name'
                className='placeholder:text-black text-black'
                {...register('name', {
                  required: 'Name is required',
                })}
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name.message}</p>
              )}
            </div>

            <div className='space-y-2'>
              <label htmlFor='email' className='font-medium text-black'>
                Email
              </label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='your.email@example.com'
                className='placeholder:text-black text-black'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className='space-y-2'>
            <label htmlFor='phone' className='font-medium text-black'>
              Phone (Optional)
            </label>
            <Input
              id='phone'
              name='phone'
              placeholder='(123) 456-7890'
              className='placeholder:text-black text-black'
              {...register('phone')}
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='service' className='font-medium text-black'>
              Service Interested In
            </label>
            <select
              id='service'
              name='service'
              className='w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background text-black'
              style={{ color: 'black' }}
              {...register('service')}
            >
              <option value=''>Select a service</option>
              <option value='Basic Exterior'>Basic Exterior</option>
              <option value='Premium Exterior'>Premium Exterior</option>
              <option value='Ultimate Exterior'>Ultimate Exterior</option>
              <option value='Basic Interior'>Basic Interior</option>
              <option value='Premium Interior'>Premium Interior</option>
              <option value='Ultimate Interior'>Ultimate Interior</option>
              <option value='Ceramic Coating'>Ceramic Coating</option>
              <option value='Paint Protection Film'>
                Paint Protection Film
              </option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div className='space-y-2'>
            <label htmlFor='message' className='font-medium text-black'>
              Message
            </label>
            <Textarea
              id='message'
              name='message'
              placeholder='Tell us about your vehicle and what you need...'
              className='placeholder:text-black text-black'
              rows={5}
              {...register('message', {
                required: 'Message is required',
              })}
            />
            {errors.message && (
              <p className='text-red-500 text-sm'>{errors.message.message}</p>
            )}
          </div>

          <Button
            type='submit'
            className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </>
  );
}
