import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Clock, BookOpen, LineChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              <span className="text-primary-600">Biodegradable</span> Plastic Lifecycle Simulation
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Explore the complete lifecycle of biodegradable plastics through interactive 3D simulations and discover their environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/lifecycle" 
                className="btn btn-primary gap-2"
              >
                <Play size={18} />
                Launch Simulation
              </Link>
              <Link 
                to="/about" 
                className="btn btn-secondary gap-2"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square relative h-full max-h-[500px]">
              {/* Placeholder for a 3D model or graphic */}
              <div className="absolute inset-0 bg-primary-100 rounded-full opacity-20"></div>
              <img 
                src="https://biogreenbags.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-12-13-at-11.12.37-AM-768x1050.jpeg" 
                alt="Biodegradable plastic lifecycle" 
                className="rounded-2xl object-cover h-full w-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg mb-4">
              <Play size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Interactive Simulation</h3>
            <p className="text-gray-600">Engage with interactive 3D models showing each lifecycle stage.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Time Progression</h3>
            <p className="text-gray-600">Visualize how biodegradable plastics break down over time.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Educational Content</h3>
            <p className="text-gray-600">Learn about material properties and environmental factors.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg mb-4">
              <LineChart size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Impact Analysis</h3>
            <p className="text-gray-600">Compare biodegradable vs. traditional plastics.</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 rounded-tr-full opacity-20"></div>
    </section>
  );
};

export default Hero;