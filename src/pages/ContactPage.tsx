import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <SectionHeading
            title="Contact Us"
            subtitle="Have questions or interested in collaborating? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-600">info@biodegradablesim.com</p>
                      <p className="text-gray-600">research@biodegradablesim.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">+91 98998 00000</p>
                      <p className="text-gray-600">Mon-Fri, 9AM-5PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="text-gray-600">123 Sustainability Avenue</p>
                      <p className="text-gray-600">New Delhi, EC 12345</p>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h4 className="text-lg font-medium mb-3">Research Collaboration</h4>
                  <p className="text-gray-600 mb-4">
                    Interested in collaborating on research about biodegradable materials? We're always open to new partnerships.
                  </p>
                  <a href="mailto:research@biodegradablesim.com" className="text-primary-600 font-medium hover:text-primary-700">
                    Contact our research team →
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send Us a Message</h3>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg"
                  >
                    <h4 className="text-lg font-semibold mb-2">Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Research Collaboration">Research Collaboration</option>
                        <option value="Educational Use">Educational Use</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-primary w-full flex justify-center items-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="loader mr-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our project and biodegradable plastics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What is the purpose of this website?",
                answer: "This website provides an interactive 3D simulation of the biodegradable plastic lifecycle to educate users about sustainable materials and their environmental impact."
              },
              {
                question: "How accurate are the 3D simulations?",
                answer: "Our simulations are based on scientific research and real-world data. While simplified for educational purposes, they accurately represent the key stages and processes involved in biodegradable plastic lifecycles."
              },
              {
                question: "Can I use these resources for educational purposes?",
                answer: "Yes! Our materials are freely available for educational use. Teachers, students, and researchers are encouraged to use our simulations and information for learning and teaching."
              },
              {
                question: "Do biodegradable plastics completely solve the plastic pollution problem?",
                answer: "While biodegradable plastics offer significant advantages over conventional plastics, they are not a perfect solution. They still require proper disposal conditions to break down effectively and may not degrade in all environments, like the ocean."
              },
              {
                question: "How can I support this project?",
                answer: "You can support us by sharing our resources, providing feedback, collaborating on research, or making a donation to help us continue developing educational tools about sustainable materials."
              },
              {
                question: "Are you affiliated with any plastic manufacturers?",
                answer: "No, we are an independent educational initiative focused on providing unbiased information about biodegradable materials. We do not endorse specific products or companies."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;