import { Check, Star } from 'lucide-react';

export default function Membership() {
  const freeBenefits = [
    'Access to basic workshops',
    'Event notifications',
    'Community forum access',
    'Monthly newsletter',
    'Networking opportunities',
  ];

  const premiumBenefits = [
    'All Free benefits included',
    'Priority event registration',
    'Exclusive technical workshops',
    'Mentorship program access',
    'Career development resources',
    'IEEE digital library access',
    'Certificate of membership',
    'Industry networking events',
  ];

  return (
    <section id="membership" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Membership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-goldcs/20 flex flex-col group/free">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Free</h3>
              <p className="text-gray-400 text-sm">Perfect for getting started</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-white">$0</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {freeBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-white/5 p-1 rounded-full flex-shrink-0 group-hover/free:bg-goldcs/10 transition-colors">
                    <Check className="text-goldcs" size={14} />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://forms.gle/3EYhJJ1gyUsFas9j7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/5 text-white py-4 rounded-xl font-semibold hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 inline-block text-center"
            >
              Get Started
            </a>
          </div>

          {/* Premium Tier */}
          <div className="relative group/prem">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-goldcs to-goldcsdark rounded-2xl blur opacity-25 group-hover/prem:opacity-50 transition duration-500"></div>

            <div className="relative rounded-2xl p-px bg-gradient-to-br from-goldcs to-goldcsdark shadow-2xl h-full flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-goldcs to-goldcsdark text-white px-6 py-1 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl whitespace-nowrap">
                  <Star size={14} fill="currentColor" />
                  Most Popular
                </div>
              </div>

              <div className="bg-gray-950 rounded-2xl p-8 h-full flex flex-col relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-goldcs/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                <div className="text-center mb-8 mt-4 relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">Premium</h3>
                  <p className="text-goldcslight text-sm">Full access to all exclusive benefits</p>
                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white">$25</span>
                    <span className="text-gray-400 text-lg">/year</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  {premiumBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-goldcs/10 p-1 rounded-full flex-shrink-0">
                        <Check className="text-goldcs" size={14} />
                      </div>
                      <span className="text-gray-200 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.ieee.org/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-goldcs to-goldcsdark text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-goldcs/30 transition-all duration-300 relative z-10 transform hover:-translate-y-0.5 inline-block text-center"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
