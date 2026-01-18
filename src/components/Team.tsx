import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

import kithminiImg from '../assets/img/team/Kithmini.png';
import geethImg from '../assets/img/team/Geeth.png';
import durekshaImg from '../assets/img/team/Dureksha.png';
import ridmikaImg from '../assets/img/team/Ridmika.png';
import binaraImg from '../assets/img/team/Binara.png';
import chalaniImg from '../assets/img/team/Chalani.png';
import irushiImg from '../assets/img/team/Irushi.png';
import thaminduImg from '../assets/img/team/Thamindu.png';

const teamMembers = [
  {
    id: 1,
    name: 'Vimarshana Kithmini',
    position: 'Chairperson',
    image: kithminiImg,
    socials: {
      linkedin: 'https://lk.linkedin.com/in/vimarshana-kithmini-ab395331b',
      facebook: 'https://web.facebook.com/people/Vimarshana-Kithmini',
      instagram: 'https://www.instagram.com/vimu_kith_',
    },
  },
  {
    id: 2,
    name: 'Geeth Rangika',
    position: 'Vice Chairperson',
    image: geethImg,
    socials: {
      linkedin: 'https://lk.linkedin.com/in/geeth-rangika-pelpola-072a772b5',
      facebook: 'https://www.facebook.com/share/1GjiedYPDQ/?mibextid=wwXIfr',
      instagram: 'https://www.instagram.com/_im.geeth_',
    },
  },
  {
    id: 3,
    name: 'Dureksha Arangala',
    position: 'Secretary',
    image: durekshaImg,
    socials: {
      linkedin: 'https://lk.linkedin.com/in/dureksha-arangala-03668019a',
      facebook: 'https://www.facebook.com/share/14W1jzJhL1L/',
      instagram: 'https://www.instagram.com/_dureksha_arangala_',
    },
  },
  {
    id: 4,
    name: 'Ridmika Ekanayake',
    position: 'Treasurer',
    image: ridmikaImg,
    socials: {
      linkedin: 'https://lk.linkedin.com/in/ridmika-ekanayaka',
      facebook: 'https://www.facebook.com/share/GWifxhKa2oQ8bFSj/?mibextid=LQQJ4d',
      instagram: 'https://www.instagram.com/ridmika_ekanayaka',
    },
  },
  {
    id: 5,
    name: 'Binara Wijewickrama',
    position: 'Webmaster',
    image: binaraImg,
    socials: {
      linkedin: 'https://lk.linkedin.com/in/binara-wijewickrama',
      facebook: 'https://www.facebook.com/share/1CB9BSAenA/',
      instagram: 'https://www.instagram.com/y_a_s_a_s._',
    },
  },
  {
    id: 6,
    name: 'Chalani Kavindya',
    position: 'Asst. Secretary',
    image: chalaniImg,
    socials: {
      linkedin: 'https://lk.linkedin.com/in/chalani-kavindya-45a6a3277',
      facebook: '#',
      instagram: 'https://www.instagram.com/kavindya_jc',
    },
  },
  {
    id: 7,
    name: 'Irushi Perera',
    position: 'Asst. Treasurer',
    image: irushiImg,
    socials: {
      linkedin: 'https://lk.linkedin.com/in/irushi-perera-6b1a482a8',
      facebook: 'https://www.facebook.com/share/1BADXEm47q/',
      instagram: 'https://www.instagram.com/irushi_02_perera',
    },
  },
  {
    id: 8,
    name: 'Thamindu Kavinda',
    position: 'Asst. Webmaster',
    image: thaminduImg,
    socials: {
      linkedin: 'https://lk.linkedin.com/in/thamindu-kavinda-ba6b22321',
      facebook: 'https://www.facebook.com/share/17qQPd5hoL/?mibextid=wwXIfr',
      instagram: 'https://www.instagram.com/dinujaya_herath_507',
    },
  },
];

export default function Team() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="team" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
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
            teamMembers.map((member) => (
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
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-goldcs transition-colors">
                  {member.name}
                </h3>
                <p className="text-goldcslight font-medium text-sm mb-6 uppercase tracking-wider">
                  {member.position}
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
