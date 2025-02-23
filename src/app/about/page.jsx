import React from 'react';
import PageBanner from '@/components/ui/PageBanner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  WhyChooseUsSection,
  TestimonialSection,
  CTASection,
} from '@/components/sections';

import { teamMembers, milestones, faqItems } from './aboutUsPageData';

const AboutUsPage = () => {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
  ];

  return (
    <main>
      <PageBanner
        title='About Us'
        subtitle=''
        breadcrumbs={breadcrumbs}
        isHomePage={false}
      />

      {/* Our Story and Values Section with Images */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Our Story */}
          <div className='grid md:grid-cols-2 gap-10 items-center mb-16'>
            {/* Image column */}
            <div className='order-2 md:order-1'>
              <div className='relative'>
                <div className='rounded-xl overflow-hidden shadow-lg border-8 border-white'>
                  <img
                    src='/images/about/our-story.jpg'
                    alt="team working on a client's vehicle"
                    className='w-full h-auto object-cover rounded-lg'
                  />
                </div>
                {/* Decorative element */}
                <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-lg -z-10'></div>
                <div className='absolute -top-4 -right-4 w-32 h-32 bg-amber-500/10 rounded-lg -z-10'></div>
              </div>
            </div>

            {/* Content column */}
            <div className='space-y-6 order-1 md:order-2'>
              <h2 className='text-3xl md:text-4xl font-bold text-black'>
                Our Story
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-80'></div>
              <p className='text-lg text-black leading-relaxed'>
                At El Compa Suds, our story is one of passion and dedication to
                providing exceptional car care services. We've always believed
                that a well-maintained vehicle is a reflection of its owner. Our
                journey began with a vision to create an auto wash that combines
                the convenience of express services with the quality and
                attention to detail you'd expect from a professional car wash.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className='grid md:grid-cols-2 gap-10 items-center'>
            {/* Content column */}
            <div className='space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-black'>
                Our Values
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-80'></div>
              <p className='text-lg text-black leading-relaxed'>
                We believe in delivering excellence with every service. Our
                certified detailers are trained to use the latest techniques and
                premium products that not only clean your vehicle but protect it
                for the long term. We respect your time and your investment in
                your vehicle, which is why we offer efficient service without
                compromising on quality.
              </p>
            </div>

            {/* Image column */}
            <div>
              <div className='relative'>
                <div className='rounded-xl overflow-hidden shadow-lg border-8 border-white'>
                  <img
                    src='/images/about/our-values.jpg'
                    alt='Premium car detailing products and tools'
                    className='w-full h-auto object-cover rounded-lg'
                  />
                </div>
                {/* Decorative element */}
                <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-lg -z-10'></div>
                <div className='absolute -top-4 -left-4 w-32 h-32 bg-amber-500/10 rounded-lg -z-10'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Meet Our Team Section */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-black text-center mb-12'>
            Meet Our Team
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-white/70 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-amber-500/50 transform hover:-translate-y-2'
              >
                <div className='h-80 overflow-hidden'>
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.position}`}
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-1 text-black'>
                    {member.name}
                  </h3>
                  <p className='text-amber-500 mb-3'>{member.position}</p>
                  <p className='text-black'>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-black text-center mb-12'>
            Our Journey
          </h2>

          <div className='relative'>
            {/* Vertical line */}
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-amber-500'></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className='w-5/12'></div>
                <div className='w-2/12 flex justify-center'>
                  <div className='w-8 h-8 bg-amber-500 rounded-full z-10 flex items-center justify-center'>
                    <div className='w-4 h-4 bg-white rounded-full'></div>
                  </div>
                </div>
                <div className='w-5/12'>
                  <div className='bg-white/70 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-border/50 hover:border-amber-500/50 transform hover:-translate-y-1'>
                    <h3 className='text-lg font-bold text-amber-500 mb-2'>
                      {milestone.year}
                    </h3>
                    <p className='text-black'>{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <section className='py-16 px-4'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-black text-center mb-12'>
            Frequently Asked Questions
          </h2>

          <Accordion type='single' collapsible className='w-full'>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-b border-gray-200'
              >
                <AccordionTrigger className='text-left text-lg font-medium py-4 text-black hover:text-amber-500'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className='text-black pb-4'>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default AboutUsPage;
