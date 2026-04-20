import logo99x from '../assets/img/partners/99x-logo.png';
import aqcellorLogo from '../assets/img/partners/aqcellor-logo.png';
import virtusaLogo from '../assets/img/partners/virtusa-logo.png';
import awsLogo from '../assets/img/partners/aws-user-group.png';
import mediaSltcLogo from '../assets/img/partners/mediauni-sltc-logo.png';
import mdLogo from '../assets/img/partners/md-beverages-logo.png';
import atosLogo from '../assets/img/partners/atos-logo.png';
import vitalhubLogo from '../assets/img/partners/vitalhub-logo.png';

export default function Partners() {
  const partners = [
    { name: '99x', logo: logo99x },
    { name: 'Aqcellor', logo: aqcellorLogo },
    { name: 'Virtusa', logo: virtusaLogo },
    { name: 'AWS User Group Colombo', logo: awsLogo },
    { name: 'Media SLTC', logo: mediaSltcLogo },
    { name: 'MD', logo: mdLogo },
    { name: 'Atos', logo: atosLogo },
    { name: 'Vitalhub', logo: vitalhubLogo },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full"></div>
        </div>

        <div className="relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 transition-all duration-300"
                >
                  <div className="w-40 h-40 flex items-center justify-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}