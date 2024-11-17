import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Driving Innovation Through
              <span className="text-indigo-600"> Intelligent Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2024, Synarex is at the forefront of technological innovation,
              helping businesses navigate the complex landscape of digital transformation.
              Our team of experts combines deep technical knowledge with strategic insight
              to deliver solutions that drive real business value.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses with cutting-edge AI solutions that unlock
                    efficiency, enhance decision-making, and drive measurable results.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Approach</h3>
                  <p className="text-gray-600">
                    We combine innovative thinking with proven methodologies to create
                    custom solutions that address your unique business challenges.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Team</h3>
                  <p className="text-gray-600">
                    A dedicated group of experts passionate about leveraging technology
                    to transform businesses and drive success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10 absolute inset-0"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl relative z-10 transform -rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-20 rounded-2xl transform rotate-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;