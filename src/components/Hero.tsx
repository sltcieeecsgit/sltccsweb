import { ArrowRight, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements removed - now handled globally */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-gradient-gold">IEEE Computer Society</span>
            <span className="block text-gray-100 mt-2 text-3xl md:text-5xl font-medium">Student Branch Chapter</span>
            <span className="block text-gray-100 mt-2 text-3xl md:text-5xl font-medium tracking-wide">of SLTC</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering students through <span className="text-goldcs">technology</span>, <span className="text-goldcs">innovation</span>, and <span className="text-goldcs">computing excellence</span>.
            Join us in shaping the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#membership"
              className="group px-8 py-4 bg-gradient-to-r from-goldcs to-goldcsdark text-white rounded-xl font-bold hover:shadow-lg hover:shadow-goldcs/20 transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
            >
              <Users size={20} />
              Join Us
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#events"
              className="px-8 py-4 glass text-goldcs border border-goldcs/30 rounded-xl font-bold hover:bg-goldcs/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
