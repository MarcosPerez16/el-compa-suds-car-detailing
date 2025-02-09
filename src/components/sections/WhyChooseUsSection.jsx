import { Medal, Clock, Banknote } from 'lucide-react';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Medal,
      title: 'Expertise',
      description:
        'Our certified detailing experts bring years of experience and advanced techniques to every vehicle, ensuring premium results that exceed expectations.',
    },
    {
      icon: Clock,
      title: 'Efficiency',
      description:
        'We respect your time with our streamlined process, delivering thorough and professional detailing services without unnecessary delays.',
    },
    {
      icon: Banknote,
      title: 'Affordability',
      description:
        'Premium quality does not have to break the bank. We offer competitive prices while maintaining the highest standards in car detailing.',
    },
  ];

  return (
    <section className='py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left side - Content */}
          <div className='space-y-8 sm:space-y-12'>
            <div className='space-y-4'>
              <h2 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent'>
                Why Choose Us
              </h2>
              <p className='text-lg sm:text-xl text-muted-foreground'>
                Experience the perfect blend of precision, passion, and
                professionalism in every detail.
              </p>
            </div>

            <div className='grid gap-6 sm:gap-8'>
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className='flex gap-4 group hover:transform hover:scale-102 transition-all duration-300'
                >
                  <div className='flex-shrink-0'>
                    <div className='w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300'>
                      <reason.icon className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent'>
                      {reason.title}
                    </h3>
                    <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className='relative aspect-square w-full max-w-[500px] lg:max-w-none rounded-3xl overflow-hidden shadow-xl mx-auto group'>
            <div className='absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none z-10'></div>
            <video
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
              autoPlay
              muted
              loop
              playsInline
            >
              <source src='/videos/car-detailing.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
