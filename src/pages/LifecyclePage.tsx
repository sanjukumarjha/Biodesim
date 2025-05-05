import React, { useState } from 'react';
import { motion } from 'framer-motion';

import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import LifecycleStage from '../components/3d/LifecycleStage';

const lifecycleStages = [
  {
    name: 'Production',
    color: '#40916C',
    description: 'The manufacturing of biodegradable plastics using organic materials.',
    content: `
      Production of biodegradable plastics begins with renewable raw materials such as cornstarch, 
      vegetable oils, and cellulose. These materials undergo processing through techniques like 
      injection molding, extrusion, and thermoforming to create the final products.
      
      Unlike conventional plastics derived from petroleum, biodegradable versions rely on 
      plant-based resources, significantly reducing carbon footprint and fossil fuel dependency.
    `
  },
  {
    name: 'Usage',
    color: '#38A9DE',
    description: 'How biodegradable plastics are used in everyday products.',
    content: `
      Biodegradable plastics are used in a wide range of applications including food packaging, 
      agricultural films, disposable cutlery, shopping bags, and even medical implants.
      
      During the usage phase, these materials perform similar functions to conventional plastics 
      but are designed to maintain their integrity only for their intended lifespan before beginning 
      to break down when exposed to proper conditions.
    `
  },
  {
    name: 'Degradation',
    color: '#9E6D3D',
    description: 'The initial breakdown process triggered by environmental factors.',
    content: `
      When biodegradable plastics are disposed of in appropriate conditions, degradation begins 
      through various mechanisms. Exposure to moisture, heat, UV light, or microbial activity 
      initiates the breakdown process.
      
      This phase involves the plastic losing its structural integrity, becoming brittle, and 
      fragmenting into smaller pieces. The molecular bonds begin to weaken, allowing further 
      decomposition to take place.
    `
  },
  {
    name: 'Decomposition',
    color: '#10B981',
    description: 'Complete biodegradation into water, CO2, and biomass.',
    content: `
      In the final stage, microorganisms like bacteria and fungi completely break down the 
      plastic fragments into simple compounds. The plastic is converted to water, carbon dioxide, 
      and biomass that can be integrated back into natural ecosystems.
      
      This process can take anywhere from a few months to a few years, depending on the specific 
      material and environmental conditions - significantly faster than conventional plastics 
      which may persist for hundreds of years.
    `
  }
];

const LifecyclePage: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <SectionHeading
            title="Biodegradable Plastic Lifecycle"
            subtitle="Explore each stage of the biodegradable plastic lifecycle through interactive 3D models."
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Timeline navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Lifecycle Stages</h3>
                <div className="flex flex-col space-y-2">
                  {lifecycleStages.map((stage, index) => (
                    <motion.button
                      key={stage.name}
                      className={`p-4 rounded-lg text-left transition-all ${
                        activeStage === index
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveStage(index)}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-3"
                          style={{ backgroundColor: stage.color }}
                        />
                        <span>{stage.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-4">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      {lifecycleStages[activeStage].name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {lifecycleStages[activeStage].description}
                    </p>
                    <div className="prose text-gray-700">
                      {lifecycleStages[activeStage].content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <LifecycleStage stage={lifecycleStages[activeStage]} isActive={true} />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Full Lifecycle Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {lifecycleStages.map((stage, index) => (
                  <motion.div 
                    key={stage.name}
                    className={`cursor-pointer ${activeStage === index ? 'ring-2 ring-primary-500 rounded-xl' : ''}`}
                    onClick={() => setActiveStage(index)}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LifecycleStage stage={stage} isActive={activeStage === index} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Factors Affecting Biodegradation"
            subtitle="Explore the environmental conditions that influence how quickly biodegradable plastics break down."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Temperature",
                icon: "🌡️",
                description: "Higher temperatures accelerate the biodegradation process by increasing microbial activity."
              },
              {
                title: "Moisture",
                icon: "💧",
                description: "Water is essential for microorganisms to break down the plastic materials."
              },
              {
                title: "Microbial Activity",
                icon: "🦠",
                description: "The presence of bacteria and fungi is crucial for biodegradation to occur."
              },
              {
                title: "Oxygen Levels",
                icon: "🌬️",
                description: "Aerobic conditions generally lead to faster and more complete decomposition."
              }
            ].map((factor, index) => (
              <motion.div
                key={factor.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="text-3xl mb-4">{factor.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default LifecyclePage;