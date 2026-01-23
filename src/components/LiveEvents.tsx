import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

import codemaniasoonImg from '../assets/img/upcoming/codemaniasoon.png';
import cloudspacesoonImg from '../assets/img/upcoming/cloudspacesoon.png';

const liveEvents = [
  {
    id: 1,
    title: 'Codemania v6.0',
    description: `Codemania is an exciting coding competition organized by IEEE Computer Society SBC of SLTC, where students compete in teams, solve challenging algorithmic problems, enhance programming skills, win prizes, and foster a collaborative, tech-focused community together annually.
`,
    image: codemaniasoonImg,
    link: 'https://codemania-v5.vercel.app/',
  },
  {
    id: 2,
    title: 'CloudSpace v2.0',
    description:
      `CloudSpace is a cloud computing event organized by IEEE Computer Society SBC of SLTC, where students explore multiple cloud platforms including AWS, Microsoft Azure, Google Cloud, and others, gaining practical experience, enhancing skills, and building industry-relevant knowledge.`,
    image: cloudspacesoonImg,
    link: 'https://cloudspacev1.online/',
  },
];

export default function LiveEvents() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="live-events" className="py-20 bg-transparent relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-goldcs/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live & Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="glass-card w-full max-w-md overflow-hidden rounded-2xl p-6 space-y-4">
                <Skeleton className="aspect-[4/3] w-full rounded-xl" />
                <Skeleton className="h-8 w-3/4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            ))
          ) : (
            liveEvents.map((event) => (
              <div
                key={event.id}
                className="glass-card w-full max-w-md overflow-hidden rounded-2xl
                           hover:shadow-goldcs/10 hover:border-goldcs/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                {/* Upcoming Label */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white
                 bg-black/50 backdrop-blur-md border border-white/10 rounded-full"
                  >
                    {/* Radar Dot Container */}
                    <span className="relative flex justify-center items-center w-3 h-3">
                      {/* Animated ping circle behind */}
                      <span className="absolute inline-flex w-3 h-3 rounded-full bg-goldcs opacity-75 animate-ping"></span>
                      {/* Small static dot on top */}
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-goldcs"></span>
                    </span>
                    UPCOMING
                  </span>
                </div>


                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col relative">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-goldcs transition-colors">{event.title}</h3>
                  <p className="text-sm text-gray-400 text-justify mb-6 leading-relaxed">{event.description}</p>

                  {/* Visit Button as a Link */}
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-gradient-to-r from-goldcs to-goldcsdark text-white font-bold rounded-xl shadow-lg hover:shadow-goldcs/20 transition-all duration-300 flex items-center justify-center gap-2 hover:brightness-110"
                  >
                    VISIT
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}