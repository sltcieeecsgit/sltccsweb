import { Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import aboutUsImg from '../assets/img/aboutus/AboutUs.png';
import award2021 from '../assets/img/aboutus/awards/best_student_branch_chapter_2021.png';
import award2022 from '../assets/img/aboutus/awards/darrel_chong_student _activity_award_2022.png';
import award2023 from '../assets/img/aboutus/awards/darrel_chong_student _activity_award_2023.png';
import Skeleton from './Skeleton';

export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const awards = [
    {
      img: award2021,
      year: 2021,
      title: "Best Student Branch Chapter"
    },
    {
      img: award2022,
      year: 2022,
      title: "Darrel Chong Student Activity Award"
    },
    {
      img: award2023,
      year: 2023,
      title: "Darrel Chong Student Activity Award"
    },
  ].sort((a, b) => a.year - b.year);

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-20 top-40 w-96 h-96 bg-goldcs/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-1/3" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ) : (
              <div className="transition-colors duration-300">
                <h3 className="text-2xl font-bold text-goldcs mb-4">
                  Who We Are
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  The IEEE Computer Society student branch chapter of SLTC, which was established on 13th December 2020, is dedicated to empowering the students with an interest in Computer Science and Information Technology. Through active participation in events, initiatives and volunteer activities, the chapter provides valuable opportunities to build the technical knowledge, leadership capabilities and professional skills. Over time, the chapter has organized numerous programs that strongly support innovation, collaboration and continuous learning among its members.
                </p>

                {/* Awards Section */}
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-goldcs" />
                    Our Achievements
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {awards.map((award, index) => (
                      <div key={index} className="space-y-2 group/award">
                        <div className="relative aspect-square glass rounded-xl p-3 flex items-center justify-center animate-shine group-hover/award:border-goldcs/50 transition-colors duration-300">
                          <img
                            src={award.img}
                            alt={award.title}
                            className="max-h-full max-w-full object-contain filter group-hover/award:brightness-110 transition-all duration-300"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-goldcs font-bold text-sm">{award.year}</p>
                          <p className="text-[10px] text-gray-400 leading-tight line-clamp-2">{award.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          <div className="relative group h-full">
            {isLoading ? (
              <div className="relative rounded-2xl overflow-hidden glass h-[500px]">
                <Skeleton className="w-full h-full" />
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-goldcs/30 transition-colors duration-300 h-full min-h-[500px]">
                <img
                  src={aboutUsImg}
                  alt="IEEE Computer Society"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>
            )}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-goldcs rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-orange-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
