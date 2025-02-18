import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos M.',
    role: 'Car Owner',
    review:
      'Absolutely the best service! My car has never been this clean before. Highly recommend!',
    image: '/images/testimonials/carlos.jpg',
    rating: 5,
  },
  {
    name: 'Sophia R.',
    role: 'Business Professional',
    review:
      'Great attention to detail and excellent customer service. Will be coming back!',
    image: '/images/testimonials/sophia.jpg',
    rating: 5,
  },
  {
    name: 'Michael T.',
    role: 'Local Resident',
    review: 'Fast, friendly, and professional. My car looks brand new again!',
    image: '/images/testimonials/michael.jpg',
    rating: 4,
  },
  {
    name: 'James L.',
    role: 'Luxury Car Owner',
    review:
      'Their ceramic coating service is outstanding. The results exceeded my expectations!',
    image: '/images/testimonials/james.jpg',
    rating: 5,
  },
  {
    name: 'Emma W.',
    role: 'Classic Car Enthusiast',
    review:
      'They handled my vintage car with exceptional care. True professionals who understand classic vehicles.',
    image: '/images/testimonials/emma.jpg',
    rating: 5,
  },
  {
    name: 'David K.',
    role: 'Regular Customer',
    review:
      'Monthly maintenance package keeps my car looking showroom fresh. Worth every penny!',
    image: '/images/testimonials/david.jpg',
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className='flex items-center gap-1 mt-2'>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

function Avatar({ src, name, role }) {
  return (
    <div className='flex flex-col items-center'>
      <img
        src={src}
        alt={name}
        className='w-16 h-16 rounded-full object-cover mb-2'
      />
      <h3 className='font-semibold text-lg'>{name}</h3>
      <p className='text-sm text-muted-foreground'>{role}</p>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold mb-12 bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent'>
          What Our Customers Say
        </h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='group bg-white/70 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 transform hover:-translate-y-2 overflow-hidden'
            >
              <CardHeader className='flex flex-col items-center pb-4 bg-gray-50/50 transition-colors duration-300'>
                <Avatar
                  src={testimonial.image}
                  name={testimonial.name}
                  role={testimonial.role}
                />
                <StarRating rating={testimonial.rating} />
              </CardHeader>
              <CardContent className='relative pt-6 pb-8 px-6'>
                <Quote className='absolute top-0 left-0 w-8 h-8 text-muted-foreground opacity-20' />
                <p className='text-muted-foreground italic text-base leading-relaxed relative z-10 pl-8 transition-colors duration-300 group-hover:text-foreground'>
                  "{testimonial.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
