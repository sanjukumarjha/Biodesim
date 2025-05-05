import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, GraduationCap } from 'lucide-react';

import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "Parth Goyal",
      role: "Lead Researcher",
      image: "https://i.postimg.cc/nhpNNv63/parth-photo.png",
      bio: "PhD in Material Science with a focus on biodegradable polymers. Has published over 15 papers on sustainable materials."
    },
    {
      name: "Nikita Soni",
      role: "3D Visualization Specialist",
      image: "https://i.postimg.cc/FsjZtwv4/90091095-549723538990887-6332980959293472768-n.jpg",
      bio: "Expert in scientific visualization with 8 years of experience creating interactive educational models."
    },
    {
      name: "Sanju Kumar Jha",
      role: "Environmental Scientist",
      image: "https://i.postimg.cc/YCCmXPq8/Whats-App-Image-2025-05-04-at-13-14-48-0844bcc8.jpg",
      bio: "Specializes in lifecycle assessment and environmental impact analysis of consumer materials."
    },
    {
      name: "Shrey Mitra",
      role: "Project Director",
      image: "https://i.postimg.cc/rpYGCk1S/364330853-108718582298377-1647092844267530145-n.jpg",
      bio: "With 15+ years in sustainable materials research, leads our interdisciplinary team to develop and visualize biodegradable solutions."
    }
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <SectionHeading
            title="About The Project"
            subtitle="Learn about our mission to educate and inspire through interactive visualization of biodegradable plastics."
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
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                The Biodegradable Plastic Lifecycle Simulation project was created to help people understand the complete 
                journey of biodegradable plastics from production to decomposition through interactive 3D visualization.
              </p>
              <p className="text-gray-700 mb-4">
                As the world faces increasing challenges from plastic pollution, we believe that education is a powerful 
                tool for change. By making complex scientific concepts accessible and engaging, we aim to inspire better 
                choices for our planet.
              </p>
              <p className="text-gray-700">
                This educational platform serves researchers, educators, students, and anyone interested in sustainable 
                materials and their environmental impact.
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
                src="https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team working on biodegradable plastics" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
            {[
              {
                icon: <Users className="h-8 w-8 text-primary-500" />,
                title: "Collaborative Research",
                description: "A multidisciplinary team combining expertise in materials science, environmental studies, and 3D visualization."
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary-500" />,
                title: "Educational Focus",
                description: "Making complex scientific concepts accessible through interactive visualization and clear explanations."
              },
              {
                icon: <Award className="h-8 w-8 text-primary-500" />,
                title: "Scientific Accuracy",
                description: "All simulations and information based on peer-reviewed research and verified scientific data."
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-primary-500" />,
                title: "Open Learning",
                description: "Free access to educational resources, promoting wider understanding of sustainable materials."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The experts behind the Biodegradable Plastic Lifecycle Simulation project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Get involved with our project and help create a more sustainable future through education and innovation.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;