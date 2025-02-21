import React from 'react';
import PageBanner from '@/components/ui/PageBanner';

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

      <section className='py-20 px-4'>
        <div className='max-w-3xl mx-auto text-center space-y-8'>
          <div className='space-y-6'>
            <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent'>
              Our Story
            </h2>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              At El Compa Suds, our story is one of passion and dedication to
              providing exceptional car care services. We've always believed
              that a well-maintained vehicle is a reflection of its owner. Our
              journey began with a vision to create a auto wash that combines
              the convenience of express services with the quality and attention
              to detail you'd expect from a professional car wash.
            </p>
          </div>

          {/* Decorative element */}
          <div className='w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80'></div>

          <div className='space-y-6 pt-8'>
            <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent'>
              Our Values
            </h2>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              We believe in delivering excellence with every service. Our
              certified detailers are trained to use the latest techniques and
              premium products that not only clean your vehicle but protect it
              for the long term. We respect your time and your investment in
              your vehicle, which is why we offer efficient service without
              compromising on quality.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
