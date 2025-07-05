"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { ProcessCard } from './shared/ProcessCard';
import { CustomNextArrow, CustomPrevArrow } from './shared/CustomeArrows';

const processSteps = [
  {
    step: 1,
    duration: '15 minutes',
    title: 'Intro Call',
    description: "We discuss your requirements and check we're well-suited to deliver your project.",
    icon: '📞',
    gradientFrom: 'from-slate-700',
    gradientTo: 'to-slate-900'
  },
  {
    step: 2,
    duration: '90 minutes',
    title: 'Discover',
    description: 'Run over the finer details of your project, including the marketing objectives, target audience, site structure and functionality. We\'ll follow up with a full written proposal outlining all of the detail.',
    icon: '🔍',
    gradientFrom: 'from-purple-700',
    gradientTo: 'to-indigo-900'
  },
  {
    step: 3,
    duration: '2 weeks',
    title: 'Concept',
    description: 'We create and send you a homepage design concept to demonstrate our vision.',
    icon: '🎨',
    gradientFrom: 'from-slate-600',
    gradientTo: 'to-slate-800'
  },
  {
    step: 4,
    duration: '3-4 weeks',
    title: 'Homepage',
    description: 'We listen to your feedback and make iterations until you\'re completely happy with the homepage design.',
    icon: '🏠',
    gradientFrom: 'from-blue-700',
    gradientTo: 'to-cyan-900'
  }
];

export const OurProcess = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-8">
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white/30 rounded-full hover:bg-white/60 transition-all duration-300 cursor-pointer"></div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-white/70 text-lg">
            We follow a structured approach to deliver exceptional results for every project
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {processSteps.map((step, index) => (
              <ProcessCard key={index} {...step} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
