import React from 'react';
import { motion } from 'framer-motion';

import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import BasicScene from '../components/3d/BasicScene';

const ImpactPage: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <SectionHeading
            title="Environmental Impact"
            subtitle="Understanding how biodegradable plastics affect our planet compared to conventional alternatives."
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">The Plastic Problem</h3>
              <p className="text-gray-700 mb-4">
                Conventional plastics have created a global environmental crisis. With over 380 million tons produced annually, 
                and only 9% recycled, the majority ends up in landfills, oceans, and ecosystems where they persist for hundreds 
                of years.
              </p>
              <p className="text-gray-700 mb-4">
                Microplastics have been found in the deepest ocean trenches, Arctic ice, and even human blood and organs. 
                By 2050, there could be more plastic than fish in our oceans by weight if current trends continue.
              </p>
              <p className="text-gray-700">
                Biodegradable plastics offer a potential solution by breaking down naturally, returning to the environment 
                as benign components and reducing long-term accumulation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Plastic pollution" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:order-2"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Biodegradable Plastics: A Solution?</h3>
              <p className="text-gray-700 mb-4">
                Biodegradable plastics can break down into water, carbon dioxide, and biomass through natural processes, 
                typically in months rather than centuries. This significantly reduces long-term environmental persistence.
              </p>
              <p className="text-gray-700 mb-4">
                Many biodegradable plastics are made from renewable resources rather than petroleum, reducing fossil 
                fuel dependency and often resulting in a lower carbon footprint across their lifecycle.
              </p>
              <p className="text-gray-700">
                However, biodegradable plastics are not a perfect solution. They often require specific conditions to 
                properly degrade, may not break down in marine environments, and can complicate recycling systems if 
                not properly sorted.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:order-1"
            >
              <BasicScene modelPath="/models/Bottle_2.glb" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Impact Comparison"
            subtitle="How biodegradable plastics compare to conventional plastics across environmental metrics."
          />

          <div className="space-y-8">
            {[
              {
                metric: "Carbon Footprint",
                bio: "43% lower CO₂ emissions on average",
                conventional: "Higher emissions from petroleum extraction and processing",
                color: "#40916C"
              },
              {
                metric: "Persistence in Environment",
                bio: "3 months to 3 years, depending on conditions",
                conventional: "400+ years for many common plastics",
                color: "#38A9DE"
              },
              {
                metric: "Fossil Fuel Usage",
                bio: "Often made from renewable resources",
                conventional: "Derived primarily from petroleum products",
                color: "#9E6D3D"
              },
              {
                metric: "Marine Impact",
                bio: "Reduced long-term impact, but still harmful in the short term",
                conventional: "Causes entanglement, ingestion, habitat damage for centuries",
                color: "#10B981"
              }
            ].map((item) => (
              <motion.div
                key={item.metric}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-1" style={{ backgroundColor: item.color }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{item.metric}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-primary-900">Biodegradable Plastics</h4>
                      <p className="text-gray-700">{item.bio}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Conventional Plastics</h4>
                      <p className="text-gray-700">{item.conventional}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Lifecycle Assessment"
            subtitle="A holistic view of environmental impact from production to end-of-life."
          />

          <div className="bg-primary-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  stage: "Raw Materials",
                  bio: "Often renewable resources like corn starch or vegetable oils",
                  conventional: "Petroleum derivatives from fossil fuel extraction",
                  icon: "🌾"
                },
                {
                  stage: "Production Process",
                  bio: "Similar energy requirements, but lower toxic emissions",
                  conventional: "Energy-intensive with potentially harmful chemical emissions",
                  icon: "🏭"
                },
                {
                  stage: "Transportation",
                  bio: "Similar carbon footprint to conventional plastics",
                  conventional: "Established logistics networks, potentially more efficient",
                  icon: "🚚"
                },
                {
                  stage: "Use Phase",
                  bio: "May have shorter shelf life for some applications",
                  conventional: "Longer-lasting and more durable in many cases",
                  icon: "🛒"
                },
                {
                  stage: "Disposal",
                  bio: "Biodegradable in appropriate conditions",
                  conventional: "Persistent in environment, recycling challenges",
                  icon: "♻️"
                },
                {
                  stage: "End of Life",
                  bio: "Returns to natural elements, may produce methane in landfills",
                  conventional: "Remains intact for centuries, fragmenting into microplastics",
                  icon: "🌱"
                }
              ].map((stage) => (
                <motion.div
                  key={stage.stage}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-3xl mb-3">{stage.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{stage.stage}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-primary-700">Biodegradable</h4>
                      <p className="text-sm text-gray-600">{stage.bio}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">Conventional</h4>
                      <p className="text-sm text-gray-600">{stage.conventional}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Making Informed Choices</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Understanding the lifecycle and environmental impact of different materials helps us make better decisions for our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Download Impact Report
              </a>
              <a href="#" className="btn bg-primary-700 text-white border border-primary-400 hover:bg-primary-800">
                Share This Information
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ImpactPage;