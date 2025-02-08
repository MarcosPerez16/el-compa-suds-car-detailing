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
    <div className='flex justify-center text-yellow-500 mb-2'>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'fill-current' : 'stroke-current'
          }`}
        />
      ))}
    </div>
  );
}

function Avatar({ src, name, role }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-24 h-24 mb-3 rounded-full overflow-hidden border-4 border-primary/50 transition-all duration-300 group-hover:border-primary'>
        <img
          src={src}
          alt={name}
          className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110'
        />
      </div>
      <div className='text-center'>
        <h3 className='text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary'>
          {name}
        </h3>
        <p className='text-sm text-muted-foreground'>{role}</p>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className='py-16 bg-background'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold text-foreground mb-12 animate-fade-in'>
          What Our Customers Say
        </h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='group shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 transform hover:-translate-y-2 overflow-hidden'
            >
              <CardHeader className='flex flex-col items-center pb-4 bg-gray-50/50 group-hover:bg-primary/5 transition-colors duration-300'>
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
