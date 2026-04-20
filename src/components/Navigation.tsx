import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/img/logo/IEEE-CS_LOGO_TM_ORANGE.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);


  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#events', label: 'Events' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#team', label: 'Our Team' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`absolute top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-full glass border border-white/10 py-3`}
    >
      <div className="px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="IEEE CS Logo"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-300 hover:text-goldcs transition-colors duration-200 font-normal text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#membership"
              onClick={(e) => scrollToSection(e, '#membership')}
              className="px-6 py-2.5 text-base font-bold bg-gradient-to-r from-goldcs to-goldcsdark text-white rounded-full transition-all duration-300 hover:scale-105"
            >
              Onboard
            </a>
          </div>

          <button
            className="md:hidden text-white hover:text-goldcs transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10 absolute w-full">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-gray-300 hover:text-goldcs hover:bg-white/5 px-3 py-2 rounded-lg transition-colors duration-200 font-normal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#membership"
              onClick={(e) => scrollToSection(e, '#membership')}
              className="block text-center mt-4 bg-gradient-to-r from-goldcs to-goldcsdark text-white hover:brightness-110 px-3 py-2 rounded-lg font-bold transition-all duration-300"
            >
              Become a Member
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
