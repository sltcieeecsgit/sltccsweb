import { Facebook, Linkedin, Instagram, Mail, Github } from 'lucide-react';
import logoImg from '../assets/img/logo/IEEE-CS_LOGO_TM_ORANGE.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-md text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logoImg}
                alt="IEEE CS Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering students through technology, innovation, and computing excellence. Building the next generation of tech leaders.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-goldcs transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-goldcs rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-goldcs transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-goldcs rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-goldcs transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-goldcs rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Events
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-goldcs transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-goldcs rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/sltcieeecs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-xl hover:bg-goldcs hover:text-white transition-all duration-300 group border border-white/10"
              >
                <Facebook size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/sltcieeecs/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-xl hover:bg-goldcs hover:text-white transition-all duration-300 group border border-white/10"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/sltcieeecs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-xl hover:bg-goldcs hover:text-white transition-all duration-300 group border border-white/10"
              >
                <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://medium.com/@sltcieeecs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-xl hover:bg-goldcs hover:text-white transition-all duration-300 group border border-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sltcieeecs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-xl hover:bg-goldcs hover:text-white transition-all duration-300 group border border-white/10"
              >
                <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:sltcieeecs@gmail.com"
                className="bg-white/5 p-3 rounded-xl hover:bg-goldcs hover:text-white transition-all duration-300 group border border-white/10"
              >
                <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <Mail size={16} className="text-goldcs" />
              <a href="mailto:sltcieeecs@gmail.com" className="hover:text-goldcs transition-colors">
                sltcieeecs@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2026 IEEE Computer Society Student Branch Chapter of SLTC. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Designed & Developed by : <a href="https://lk.linkedin.com/in/binara-wijewickrama" target="_blank" rel="noopener noreferrer" className='text-goldcs hover:text-gray-500 transition-colors'>Binara Wijewickrama</a></p>
        </div>
      </div>
    </footer>
  );
}
