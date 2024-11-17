import React from 'react';
import { Brain, Cog, Globe, Cloud, Database, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Intelligent Automation',
    description: 'Streamline operations with RPA and smart workflow optimization powered by advanced AI algorithms.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Full-stack development using MERN and MEAN stacks, creating scalable and responsive applications.',
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Secure and efficient cloud migration strategies tailored to your business needs.',
  },
  {
    icon: Database,
    title: 'Data Solutions',
    description: 'Harness the power of big data with Databricks and Apache Spark implementations.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
  },
  {
    icon: Cog,
    title: 'Integration Services',
    description: 'Seamless integration of AI and automation solutions into your existing infrastructure.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to transform your business through innovative technology and intelligent automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;