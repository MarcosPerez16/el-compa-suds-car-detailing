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
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left side - Content */}
          <div className='space-y-12'>
            <div className='space-y-4'>
              <h2 className='text-4xl font-bold text-foreground'>
                Why Choose Us
              </h2>
              <p className='text-xl text-muted-foreground'>
                Experience the perfect blend of precision, passion, and
                professionalism in every detail.
              </p>
            </div>

            <div className='grid gap-8'>
              {reasons.map((reason, index) => (
                <div key={index} className='flex gap-4 group'>
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300'>
                      <reason.icon className='w-6 h-6 text-primary' />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-xl font-semibold text-foreground'>
                      {reason.title}
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className='relative w-[500px] h-[500px] rounded-3xl overflow-hidden shadow-xl mx-auto'>
            <video
              className='w-full h-full object-cover'
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
