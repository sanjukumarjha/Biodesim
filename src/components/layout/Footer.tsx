import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: 'Home', path: '/' },
      { name: 'Lifecycle', path: '/lifecycle' },
      { name: 'Materials', path: '/materials' },
      { name: 'Impact', path: '/impact' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'Research Papers', path: '#' },
      { name: 'Educational Resources', path: '#' },
      { name: 'FAQ', path: '#' },
      { name: 'Glossary', path: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: '#' },
    { name: 'Twitter', icon: <Twitter size={18} />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: '#' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:info@biodegradablesim.com' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-primary-500 mr-2" />
                <span className="font-bold text-lg text-gray-900">BioDeSim</span>
              </Link>
              <p className="text-gray-600 mb-6">
                An interactive 3D simulation platform exploring the complete lifecycle of biodegradable plastics and their environmental impact.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-gray-500 hover:text-primary-500 transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {footerLinks.main.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Biodegradable Plastic Lifecycle Simulation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
