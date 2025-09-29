// import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'ERPNext Developer',
      company: 'Apex Steel',
      location: 'Nairobi, Kenya',
      period: 'July 2025 - Present',
      description: 'Developing and maintaining ERPNext solutions for steel manufacturing operations, focusing on inventory management and production workflows.',
      achievements: [
        'Customized ERPNext for steel manufacturing processes',
        'Developed inventory management workflows for raw materials',
        'Implemented production planning and quality control modules',
        'Optimized system performance for heavy manufacturing data'
      ],
      technologies: ['ERPNext', 'Python', 'Frappe Framework', 'MariaDB', 'Docker']
    },
    {
      title: 'ERPNext Developer',
      company: 'Upeosoft Limited',
      location: 'Nairobi, Kenya',
      period: 'April 2024 - June 2025',
      description: 'Developed ERPNext solutions for various clients, specializing in business process automation and custom module development.',
      achievements: [
        'Implemented fleet management system with GPS tracking integration',
        'Developed WhatsApp Business API integration for client communications',
        'Built custom accounting and HR modules for multiple clients',
        'Delivered projects on time with high client satisfaction'
      ],
      technologies: ['ERPNext', 'Python', 'WhatsApp API', 'GPS Integration', 'Custom DocTypes']
    }
  ];

  const certifications = [
    'Bachelors Degree in Software Engineering',
    'Frappe Framework Expert',
    'Python Professional Certification'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2+ years of proven track record in enterprise software development 
            and ERPNext implementations across various industries.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-emerald-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:items-end space-y-1 mt-2 sm:mt-0">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <Award className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Qualifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 
                         flex items-center space-x-3 hover:shadow-md transition-shadow"
              >
                <Award className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-gray-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;