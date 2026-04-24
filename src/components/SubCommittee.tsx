import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

import ravishkaImg from '../assets/img/subcom/RAVISHKA.png';
import dhanujaImg from '../assets/img/subcom/DHANUJA.png';
import nipuniImg from '../assets/img/subcom/NIPUNI.png';
import nadilImg from '../assets/img/subcom/NADIL.png';
import sandeepaImg from '../assets/img/subcom/SANDEEP.png';
import anuhasImg from '../assets/img/subcom/ANUHAS.png';

const subCommitteeMembers = [
  {
    id: 1,
    name: 'Ravishka Rahnayaka',
    position: 'Membership Development Sub Committee',
    image: ravishkaImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/ravishkarathnayaka/',
      facebook: 'https://web.facebook.com/ravishkaprabhathrathnayaka/',
      instagram: 'https://www.instagram.com/ravishka._/',
    },
  },
  {
    id: 2,
    name: 'Dhanuja Balasooriya',
    position: 'Volunteer Engagement Sub committee',
    image: dhanujaImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/dhanuja-balasooriya',
      facebook: 'https://web.facebook.com/dhanuja.bimsara.2025',
      instagram: '#',
    },
  },
  {
    id: 3,
    name: 'Nipuni Senarathna',
    position: 'Editorial Sub Committee Head',
    image: nipuniImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/nipuni-senarathna-ab37b1315',
      facebook: 'https://www.facebook.com/share/1AdHeHeQdh/',
      instagram: 'https://www.instagram.com/nipuni_ayodhya_?igsh=MWhrNnMzbWFrNzg1MA==',
    },
  },
  {
    id: 4,
    name: 'Nadil Kularathne',
    position: 'Finance Sub Committee Head',
    image: nadilImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/nadil-4str0j?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      facebook: 'https://www.facebook.com/share/1HnfAYofnL/',
      instagram: 'https://www.instagram.com/_astro_j_?igsh=MXU2NWdnM204YWF5ZQ==',
    },
  },
  {
    id: 5,
    name: 'Sandeepa Wimalasiri',
    position: 'Logistics Sub Committee Head',
    image: sandeepaImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/sandeepa-wimalasiri/',
      facebook: 'https://www.facebook.com/sandeepa.vimukthi.12',
      instagram: 'https://www.instagram.com/_p_a_t_h_f_i_n_d_e_r_/',
    },
  },
  {
    id: 6,
    name: 'Manura Anuhas',
    position: 'Public Visibility Sub Committee Head',
    image: anuhasImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/amanuhas/',
      facebook: 'https://www.facebook.com/manura.anuhas.2025',
      instagram: 'https://www.instagram.com/andi.ma_xd/',
    },
  },
];

export default function SubCommittee() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="subcommittee" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sub Committee
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-card flex flex-col items-center p-6 rounded-2xl space-y-4">
                <Skeleton className="w-32 h-32 rounded-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="w-8 h-8 rounded-lg" />
                  <Skeleton className="w-8 h-8 rounded-lg" />
                  <Skeleton className="w-8 h-8 rounded-lg" />
                </div>
              </div>
            ))
          ) : (
            subCommitteeMembers.map((member) => (
              <div
                key={member.id}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl glass-card hover:border-goldcs/30 transition-all duration-300"
              >
                <div className="relative w-32 h-32 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-goldcslight to-goldcs p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#1a1b1e] p-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-goldcs transition-colors">
                  {member.name}
                </h3>
                <p className="text-goldcslight font-medium text-sm mb-6 uppercase tracking-wider whitespace-pre-line">
                  {member.position.replace(/(Sub\s+committee)/i, '\n$1')}
                </p>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-goldcs transition-colors transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-goldcs transition-colors transform hover:scale-110"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-goldcs transition-colors transform hover:scale-110"
                  >
                    <Instagram size={20} />
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
