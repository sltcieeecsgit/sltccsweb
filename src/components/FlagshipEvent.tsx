import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

import codemaniaImg from '../assets/img/flagshipevents/codemania.jpg';
import cloudspacevvImg from '../assets/img/flagshipevents/cloudspacevv.jpg';
import idianixImg from '../assets/img/flagshipevents/idianix.jpg';

const flagshipEvents = [
  {
    id: 1,
    title: 'Codemania',
    category: 'Annual Hackathon',
    description:
      'Codemania is an exciting coding competition organized by IEEE Computer Society SBC of SLTC, where students compete in teams, solve challenging algorithmic problems, enhance programming skills, win prizes, and foster a collaborative, tech focused community.',
    image: codemaniaImg,
    link: 'https://codemania.live',
  },
  {
    id: 2,
    title: 'CloudSpace',
    category: 'Cloud Workshop Series',
    description:
      'CloudSpace is a cloud computing event by IEEE Computer Society SBC of SLTC, where students explore various cloud platforms like AWS, Microsoft Azure, and Google Cloud, gaining hands-on experience, improving skills, and building industry-relevant knowledge.',
    image: cloudspacevvImg,
    link: 'https://cloudspacev1.online/',
  },
  {
    id: 3,
    title: 'IdeaniX',
    category: 'Annual Ideathon',
    description:
      'Ideanix is an innovation and entrepreneurship event by IEEE Computer Society SBC of SLTC that helps students turn creative tech ideas into real projects or startup concepts through guidance, ideathons, mentorship, and development challenges.',
    image: idianixImg,
    link: 'https://ideanix.vercel.app/',
  },
];

export default function FlagshipEvent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="events" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flagship Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full"></div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden p-6 space-y-4">
                <Skeleton className="h-64 w-full rounded-xl" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-8 w-3/4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            ))
          ) : (
            flagshipEvents.map((event, index) => (
              <div
                key={event.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-card rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:border-goldcs/30 h-full flex flex-col">
                  {/* Glow background */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-goldcs rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity"></div>

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

                    {/* Featured Label with Animated Star */}
                    <div className="absolute top-4 right-4 z-10">
                      <span
                        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white
                        bg-black/50 backdrop-blur-md border border-white/10 rounded-full uppercase"
                      >
                        {/* Animated Star */}
                        <span className="relative flex justify-center items-center w-4 h-4">
                          {/* Pulsing star behind */}
                          <span className="absolute w-4 h-4 animate-ping opacity-50 text-goldcs">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          </span>
                          {/* Solid star on top */}
                          <span className="relative w-3 h-3 text-goldcs">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-3 h-3"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          </span>
                        </span>
                        FEATURED
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="inline-block bg-goldcs/10 border border-goldcs/20 text-goldcs px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                      {event.category}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-goldcs transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-gray-400 text-sm text-justify mb-6 leading-relaxed flex-grow">
                      {event.description}
                    </p>

                    {/* Explore Button with Link */}
                    <a
                      href={event.link}
                      className="w-full group/btn bg-gradient-to-r from-goldcs to-goldcsdark text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-goldcs/20 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                    >
                      EXPLORE
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}