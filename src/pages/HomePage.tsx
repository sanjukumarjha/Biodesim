import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import Hero from '../components/home/Hero';
import BasicScene from '../components/3d/BasicScene';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <Hero />

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Understanding Biodegradable Plastics"
            subtitle="Explore the science behind biodegradable materials and how they differ from conventional plastics."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">What Makes Plastic Biodegradable?</h3>
                <p className="text-gray-700 mb-4">
                  Biodegradable plastics are designed to break down naturally through the action of microorganisms like bacteria and fungi.
                  Unlike conventional plastics which can persist for hundreds of years, biodegradable versions decompose into natural elements.
                </p>
                <p className="text-gray-700 mb-6">
                  These materials are typically made from renewable resources such as cornstarch, vegetable oils, and other plant-based materials,
                  reducing dependency on fossil fuels and minimizing environmental impact.
                </p>
                <Link to="/materials" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Learn more about materials
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BasicScene modelPath="/models/Bottle_2.glb" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Complete Lifecycle Visualization"
            subtitle="From production to decomposition, explore each stage of the biodegradable plastic lifecycle."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Production",
                image: "https://images.pexels.com/photos/18631424/pexels-photo-18631424/free-photo-of-bottles-of-water-in-factory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Manufacturing processes and raw material sourcing for biodegradable plastics."
              },
              {
                title: "Usage",
                image: "https://images.pexels.com/photos/3645592/pexels-photo-3645592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Applications and everyday uses of biodegradable plastic products."
              },
              {
                title: "Degradation",
                image: "https://blog.chemcogroup.com/wp-content/uploads/2024/12/Breakthrough-in-Plastic-Technology-Degradation-and-Soil-Enrichment-copy.jpg",
                description: "How environmental factors trigger the breakdown process."
              },
              {
                title: "Decomposition",
                image: "https://www.techsciresearch.com/admin/gall_content/2019/11/2019_11$blog_biodegradable%20plastic.jpg_01_Nov_2019_153721260.jpg",
                description: "Complete biodegradation into natural elements and nutrients."
              }
            ].map((stage, index) => (
              <motion.div
                key={stage.title}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                  <p className="text-gray-600 mb-4">{stage.description}</p>
                  <Link to="/lifecycle" className="text-sm text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                    View in 3D
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/lifecycle" className="btn btn-primary">
              Explore Full Lifecycle Simulation
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Environmental Impact"
            subtitle="Compare the environmental footprint of biodegradable plastics versus conventional plastics."
          />

          <div className="bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Making a Difference</h3>
                <p className="text-gray-700 mb-4">
                  Conventional plastics can take hundreds of years to break down, polluting our oceans, harming wildlife, and contaminating soil.
                  Biodegradable plastics offer a sustainable alternative that minimizes these environmental impacts.
                </p>
                <p className="text-gray-700 mb-6">
                  By understanding the complete lifecycle of these materials, we can make more informed decisions about their use and disposal,
                  contributing to a healthier planet.
                </p>
                <Link to="/impact" className="btn btn-primary">
                  View Impact Analysis
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-lg overflow-hidden"
              >
                <img
                  src="https://i.guim.co.uk/img/media/8b4097deac06c84a491bc813002a89dec0a35fca/0_1_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4b590b3d575a74dc1af619c685547cc6"
                  alt="Environmental impact"
                  className="w-full h-full object-cover"
                />
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to explore biodegradable plastics?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Dive into our interactive 3D simulations and discover the future of sustainable materials.
            </p>
            <Link to="/lifecycle" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Start Exploring
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;