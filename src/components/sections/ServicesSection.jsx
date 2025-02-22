import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { featuredServices } from './servicesHomeData';

export default function ServicesSection() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-black'>
          Our Top Services
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group relative'
            >
              {service.badge && (
                <div
                  className={`absolute top-4 right-4 ${service.badge.color} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}
                >
                  {service.badge.text}
                </div>
              )}
              <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='flex items-center justify-between mb-3'>
                <h3 className='text-xl font-semibold text-black'>
                  {service.title}
                </h3>
                <span className='text-amber-500 font-medium'>
                  {service.price}
                </span>
              </div>
              <p className='text-black'>{service.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-12 flex justify-center w-full'>
          <Link href='/services' className='w-full sm:w-auto'>
            <Button
              size='lg'
              className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full'
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
