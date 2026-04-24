import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LiveEvents from './components/LiveEvents';
import AboutUs from './components/AboutUs';
import Partners from './components/Partners';
import FlagshipEvent from './components/FlagshipEvent';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import Merchandise from './components/Merchandise';
import ExCommittee from './components/ExCommittee';
import SubCommittee from './components/SubCommittee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
import ScrollReveal from './components/ScrollReveal';
import Aurora from './components/Aurora';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time for the experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-goldcs/30 relative">
      {/* Background Aurora Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <Aurora
          colorStops={['#FAA41A', '#F2C94C', '#FAA41A']}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative z-10">
        <Navigation />

        <main>
          <ScrollReveal>
            <Hero />
          </ScrollReveal>

          <ScrollReveal>
            <LiveEvents />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <AboutUs />
          </ScrollReveal>

          <ScrollReveal>
            <Partners />
          </ScrollReveal>

          <ScrollReveal>
            <FlagshipEvent />
          </ScrollReveal>

          <ScrollReveal>
            <Events />
          </ScrollReveal>

          <ScrollReveal>
            <Gallery />
          </ScrollReveal>

          <ScrollReveal>
            <Membership />
          </ScrollReveal>

          <ScrollReveal>
            <Merchandise />
          </ScrollReveal>

          <ScrollReveal>
            <ExCommittee />
          </ScrollReveal>

          <ScrollReveal>
            <SubCommittee />
          </ScrollReveal>

          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
