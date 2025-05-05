import React from 'react';
import { motion } from 'framer-motion';

import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import BasicScene from '../components/3d/BasicScene';

const MaterialsPage: React.FC = () => {
  const materials = [
    {
      name: "PLA (Polylactic Acid)",
      source: "Corn starch, sugar cane",
      uses: "Food packaging, disposable cutlery, 3D printing",
      degradation: "3-6 months in industrial composting",
      image: "https://polimerbio.com/wp-content/uploads/2024/02/PLA-2.jpg",
      color: "#40916C"
    },
    {
      name: "PHA (Polyhydroxyalkanoates)",
      source: "Bacterial fermentation of sugars or lipids",
      uses: "Medical implants, drug delivery, packaging",
      degradation: "3-9 months in marine environments",
      image: "https://i0.wp.com/www.texspacetoday.com/wp-content/uploads/2024/03/00e4b3a6006ec5562af053dec6a15bab.jpg?fit=638%2C378&ssl=1",
      color: "#38A9DE"
    },
    {
      name: "Starch-based Plastics",
      source: "Corn, potato, wheat starch",
      uses: "Food service items, agricultural films, packaging",
      degradation: "1-3 months in soil conditions",
      image: "https://bluecraftagro.com/wp-content/uploads/2023/12/Starch-Based-Biodegradable-Plastics-A-Greener-Alternative.jpg",
      color: "#9E6D3D"
    },
    {
      name: "Cellulose-based Plastics",
      source: "Wood pulp, cotton, hemp",
      uses: "Films, fibers, drug capsules",
      degradation: "2-5 months in industrial composting",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSITbNtgfzwmsKdVTnRF2DIeeassfxIt8JxQ&s",
      color: "#10B981"
    }
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <SectionHeading
            title="Biodegradable Materials"
            subtitle="Explore the various types of biodegradable polymers, their properties, and applications."
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
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">What Makes Materials Biodegradable?</h3>
              <p className="text-gray-700 mb-4">
                Biodegradable materials are designed to break down safely and relatively quickly through the action of living organisms, 
                particularly microbes like bacteria and fungi. These materials can be completely broken down into water, carbon dioxide, 
                and biomass within a relatively short timeframe.
              </p>
              <p className="text-gray-700 mb-4">
                Unlike conventional plastics which can persist for hundreds of years, biodegradable versions have chemical structures that 
                are more accessible to microorganisms, allowing them to be used as food sources and broken down through natural processes.
              </p>
              <p className="text-gray-700">
                The key to creating effective biodegradable plastics lies in balancing performance during use with the ability to degrade 
                after disposal. Scientists are continuously developing new formulations to improve this balance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BasicScene modelPath="/models/Bottle_2.glb" />
            </motion.div>
          </div>

          <SectionHeading
            title="Common Biodegradable Polymers"
            subtitle="Explore the major types of biodegradable plastics and their unique properties."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                className="bg-gray-50 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 h-48 lg:h-auto overflow-hidden">
                    <img
                      src={material.image}
                      alt={material.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-2/3 p-6">
                    <div 
                      className="w-3 h-3 rounded-full mb-3"
                      style={{ backgroundColor: material.color }}
                    />
                    <h3 className="text-xl font-semibold mb-3">{material.name}</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-medium">Source:</span> {material.source}</li>
                      <li><span className="font-medium">Common Uses:</span> {material.uses}</li>
                      <li><span className="font-medium">Degradation Time:</span> {material.degradation}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Material Properties Comparison"
            subtitle="How biodegradable plastics compare to conventional plastics across key performance metrics."
          />

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-6 py-4 text-left">Property</th>
                  <th className="px-6 py-4 text-left">Biodegradable Plastics</th>
                  <th className="px-6 py-4 text-left">Conventional Plastics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Durability</td>
                  <td className="px-6 py-4">Designed for intended lifespan only</td>
                  <td className="px-6 py-4">Extremely durable, often persists for centuries</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Water Resistance</td>
                  <td className="px-6 py-4">Varies, often less water-resistant over time</td>
                  <td className="px-6 py-4">Excellent water resistance</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Heat Resistance</td>
                  <td className="px-6 py-4">Generally lower melting points</td>
                  <td className="px-6 py-4">Wide range of heat resistance, often higher</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Environmental Impact</td>
                  <td className="px-6 py-4">Lower carbon footprint, biodegradable</td>
                  <td className="px-6 py-4">Higher carbon footprint, persistent pollution</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Cost</td>
                  <td className="px-6 py-4">Generally higher, but decreasing with scale</td>
                  <td className="px-6 py-4">Lower due to established infrastructure</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Processing Methods</td>
                  <td className="px-6 py-4">Similar to conventional plastics</td>
                  <td className="px-6 py-4">Wide range of optimized methods</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Innovation in Biodegradable Materials"
            subtitle="Explore cutting-edge research and development in sustainable plastic alternatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Algae-Based Bioplastics",
                image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Researchers are developing new bioplastics derived from algae, which can grow quickly without competing for agricultural land."
              },
              {
                title: "Agricultural Waste Conversion",
                image: "https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Transforming agricultural waste like rice hulls and wheat straw into biodegradable plastic alternatives."
              },
              {
                title: "Mycelium Materials",
                image: "https://images.pexels.com/photos/5799663/pexels-photo-5799663.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Using fungal mycelium to create packaging materials that are fully compostable and biodegradable."
              }
            ].map((innovation, index) => (
              <motion.div
                key={innovation.title}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{innovation.title}</h3>
                  <p className="text-gray-600">{innovation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default MaterialsPage;