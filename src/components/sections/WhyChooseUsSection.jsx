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
    <section className='py-12 sm:py-16 lg:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-center'>
          {/* Content Section */}
          <div className='space-y-6 sm:space-y-8'>
            <div className='space-y-3 sm:space-y-4'>
              <h2 className='text-3xl sm:text-4xl font-bold text-black'>
                Why Choose Us
              </h2>
              <p className='text-lg sm:text-xl text-black leading-relaxed'>
                Experience the perfect blend of precision, passion, and
                <span className='hidden sm:inline'> professionalism</span>
                <span className='sm:hidden'> pro</span> in every detail.
              </p>
            </div>

            <div className='grid gap-5 sm:gap-6'>
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className='flex gap-4 group hover:transform hover:translate-x-1 transition-all duration-250 ease-out'
                >
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-500 hover:bg-amber-600 flex items-center justify-center transition-all group-hover:rotate-[15deg]'>
                      <reason.icon className='w-5 h-5 sm:w-6 sm:h-6 text-black transition-transform' />
                    </div>
                  </div>
                  <div className='space-y-1.5'>
                    <h3 className='text-lg font-semibold text-black'>
                      {reason.title}
                    </h3>
                    <p className='text-sm sm:text-[15px] text-black leading-relaxed'>
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='relative w-full max-w-[560px] xl:max-w-[580px] rounded-xl lg:rounded-2xl overflow-hidden shadow-lg mx-auto border-[7px] border-white/90 bg-white self-center'>
            <div className='aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/12]'>
              <video
                className='w-full h-full object-cover transition-transform duration-300 hover:scale-[1.015]'
                autoPlay
                muted
                loop
                playsInline
              >
                <source src='/videos/car-detailing.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent' />
          </div>
        </div>
      </div>
    </section>
  );
}
