'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
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

  // Create animations with staggered children
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

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const decorVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.0,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const teamCardVariants = {
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
    hover: {
      y: -8,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? 20 : -20) },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.3 + index * 0.15,
        ease: 'easeOut',
      },
    }),
    hover: {
      y: -4,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const accordionVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.5 + index * 0.08,
        ease: 'easeOut',
      },
    }),
  };

  const headingVariants = {
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

  const dividerVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 0.8,
      width: 96,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  // Create InView refs for each section using Framer Motion's useInView
  const storyRef = React.useRef(null);
  const valuesRef = React.useRef(null);
  const teamRef = React.useRef(null);
  const timelineRef = React.useRef(null);
  const faqRef = React.useRef(null);

  const storyInView = useInView(storyRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const valuesInView = useInView(valuesRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const teamInView = useInView(teamRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const timelineInView = useInView(timelineRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });
  const faqInView = useInView(faqRef, {
    once: true,
    amount: 0.1,
    margin: '-100px 0px',
  });

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
          <motion.div
            className='grid md:grid-cols-2 gap-10 items-center mb-16'
            ref={storyRef}
            initial='hidden'
            animate={storyInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
          >
            {/* Image column */}
            <div className='order-2 md:order-1'>
              <motion.div
                className='relative'
                variants={imageContainerVariants}
              >
                <motion.div className='rounded-xl overflow-hidden shadow-lg border-8 border-white'>
                  <img
                    src='/images/about/our-story.jpg'
                    alt="team working on a client's vehicle"
                    className='w-full h-auto object-cover rounded-lg'
                  />
                </motion.div>
                {/* Decorative element */}
                <motion.div
                  className='absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-lg -z-10'
                  variants={decorVariants}
                ></motion.div>
                <motion.div
                  className='absolute -top-4 -right-4 w-32 h-32 bg-amber-500/10 rounded-lg -z-10'
                  variants={decorVariants}
                ></motion.div>
              </motion.div>
            </div>

            {/* Content column */}
            <motion.div
              className='space-y-6 order-1 md:order-2'
              variants={contentVariants}
            >
              <motion.h2
                className='text-3xl md:text-4xl font-bold text-black'
                variants={headingVariants}
              >
                Our Story
              </motion.h2>
              <motion.div
                className='w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-80'
                variants={dividerVariants}
              ></motion.div>
              <motion.p className='text-lg text-black leading-relaxed'>
                At El Compa Suds, our story is one of passion and dedication to
                providing exceptional car care services. We've always believed
                that a well-maintained vehicle is a reflection of its owner. Our
                journey began with a vision to create an auto wash that combines
                the convenience of express services with the quality and
                attention to detail you'd expect from a professional car wash.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            className='grid md:grid-cols-2 gap-10 items-center'
            ref={valuesRef}
            initial='hidden'
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
          >
            {/* Content column */}
            <motion.div className='space-y-6' variants={contentVariants}>
              <motion.h2
                className='text-3xl md:text-4xl font-bold text-black'
                variants={headingVariants}
              >
                Our Values
              </motion.h2>
              <motion.div
                className='w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-80'
                variants={dividerVariants}
              ></motion.div>
              <motion.p className='text-lg text-black leading-relaxed'>
                We believe in delivering excellence with every service. Our
                certified detailers are trained to use the latest techniques and
                premium products that not only clean your vehicle but protect it
                for the long term. We respect your time and your investment in
                your vehicle, which is why we offer efficient service without
                compromising on quality.
              </motion.p>
            </motion.div>

            {/* Image column */}
            <motion.div variants={imageContainerVariants}>
              <motion.div className='relative'>
                <motion.div className='rounded-xl overflow-hidden shadow-lg border-8 border-white'>
                  <img
                    src='/images/about/our-values.jpg'
                    alt='Premium car detailing products and tools'
                    className='w-full h-auto object-cover rounded-lg'
                  />
                </motion.div>
                {/* Decorative element */}
                <motion.div
                  className='absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-lg -z-10'
                  variants={decorVariants}
                ></motion.div>
                <motion.div
                  className='absolute -top-4 -left-4 w-32 h-32 bg-amber-500/10 rounded-lg -z-10'
                  variants={decorVariants}
                ></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Meet Our Team Section */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-black text-center mb-12'
            ref={teamRef}
            initial='hidden'
            animate={teamInView ? 'visible' : 'hidden'}
            variants={headingVariants}
          >
            Meet Our Team
          </motion.h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className='bg-white/70 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-amber-500/50 transform hover:-translate-y-2'
                custom={index}
                initial='hidden'
                animate={teamInView ? 'visible' : 'hidden'}
                whileHover='hover'
                variants={teamCardVariants}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-black text-center mb-12'
            ref={timelineRef}
            initial='hidden'
            animate={timelineInView ? 'visible' : 'hidden'}
            variants={headingVariants}
          >
            Our Journey
          </motion.h2>

          <div className='relative'>
            {/* Vertical line */}
            <motion.div
              className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-amber-500'
              initial={{ scaleY: 0, originY: 0 }}
              animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            ></motion.div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
                custom={index}
                initial='hidden'
                animate={timelineInView ? 'visible' : 'hidden'}
                variants={timelineItemVariants}
              >
                <div className='w-5/12'></div>
                <div className='w-2/12 flex justify-center'>
                  <motion.div
                    className='w-8 h-8 bg-amber-500 rounded-full z-10 flex items-center justify-center'
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      timelineInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  >
                    <div className='w-4 h-4 bg-white rounded-full'></div>
                  </motion.div>
                </div>
                <div className='w-5/12'>
                  <motion.div
                    className='bg-white/70 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-border/50 hover:border-amber-500/50 transform hover:-translate-y-1'
                    whileHover='hover'
                  >
                    <h3 className='text-lg font-bold text-amber-500 mb-2'>
                      {milestone.year}
                    </h3>
                    <p className='text-black'>{milestone.event}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <section className='py-16 px-4'>
        <div className='max-w-3xl mx-auto'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-black text-center mb-12'
            ref={faqRef}
            initial='hidden'
            animate={faqInView ? 'visible' : 'hidden'}
            variants={headingVariants}
          >
            Frequently Asked Questions
          </motion.h2>

          <Accordion type='single' collapsible className='w-full'>
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial='hidden'
                animate={faqInView ? 'visible' : 'hidden'}
                variants={accordionVariants}
              >
                <AccordionItem
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
              </motion.div>
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
