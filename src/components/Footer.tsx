import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from './common/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo className="text-white" size="lg" />
            <p className="mt-4 text-gray-400">
              Empowering businesses through innovative technology solutions.
              Let's build the future together.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://www.instagram.com/synergeek_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/synergeektechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/synergeek-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61567770323517"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Contact Info
              </h4>
              <div className="space-y-2 text-gray-300">
                <p>Call: </p>
                <p>+91 96777 41597</p>
                <p>+91 97867 63705</p>
                <p>+91 81487 76604</p>
                <p className="mt-2">Email: synergeektechnologies@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Synergeek Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
