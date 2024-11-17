import React from 'react';
import { ArrowRight, Brain, Zap, Code, Database } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Synergizing Intelligence,{' '}
              <span className="text-indigo-600">Amplifying Success</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your business with cutting-edge AI solutions. We specialize in intelligent automation,
              web development, and data-driven strategies that drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
                <Brain className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900">AI Solutions</h3>
                <p className="text-gray-600 text-sm">Custom AI models and chatbots</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
                <Code className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900">Web Development</h3>
                <p className="text-gray-600 text-sm">Modern web applications</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
                <Zap className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900">Automation</h3>
                <p className="text-gray-600 text-sm">Intelligent workflow optimization</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
                <Database className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900">Data Solutions</h3>
                <p className="text-gray-600 text-sm">Analytics and insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;