// import React from 'react';
import { ExternalLink, Github, Truck, MessageSquare, Calculator, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Fleet Management System',
      description: 'Comprehensive fleet management solution built on ERPNext with real-time vehicle tracking, maintenance scheduling, fuel management, and driver performance analytics.',
      icon: <Truck className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['ERPNext', 'Python', 'MariaDB'],
      features: [
        'Automated maintenance scheduling and alerts',
        'Fuel consumption monitoring and cost analysis',
        'Driver performance dashboards and reporting',
        'Custom workflows for vehicle assignment'
      ],
      metrics: {
        vehicles: '500+',
        cost_savings: '30%',
        efficiency: '25%'
      }
    },
    {
      id: 2,
      title: 'WhatsApp Business Integration',
      description: 'Seamless WhatsApp Business API integration with ERPNext for automated customer communications, order updates, and support ticket management.',
      icon: <MessageSquare className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/5711000/pexels-photo-5711000.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['WhatsApp Business API', 'Webhooks', 'Python', 'ERPNext API', 'Message Templates'],
      features: [
        'Automated order confirmations and shipping updates',
        'Two-way customer support integration',
        'Bulk messaging campaigns with personalization',
        'Message template management and approval',
        'Analytics and delivery reporting'
      ],
      metrics: {
        messages: '10K+/month',
        response_time: '80% faster',
        satisfaction: '95%'
      }
    },
    {
      id: 3,
      title: 'Advanced Accounting Module',
      description: 'Enhanced ERPNext accounting module with multi-currency support, advanced reporting, automated reconciliation, and compliance features.',
      icon: <Calculator className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['ERPNext', 'Custom Reports', 'Python', 'Data Analytics'],
      features: [
        'Multi-currency transactions with real-time rates',
        'Automated bank reconciliation',
        'Advanced financial reporting and dashboards',
        'Tax compliance and filing automation',
        'Budget planning and variance analysis'
      ],
      metrics: {
        processing_time: '70% faster',
        accuracy: '99.8%',
        reports: '50+ custom'
      }
    },
    {
      id: 4,
      title: 'HR Management System',
      description: 'Complete HR solution with employee lifecycle management, payroll automation, performance tracking, and self-service portal.',
      icon: <Users className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['ERPNext HR', 'Python', 'Custom Workflows', 'Email Integration', 'Mobile App'],
      features: [
        'Employee onboarding and offboarding workflows',
        'Automated payroll processing and tax calculations',
        'Performance review and goal tracking system',
        'Leave management with approval workflows',
        'Employee self-service portal and mobile app'
      ],
      metrics: {
        employees: '1000+',
        automation: '85%',
        satisfaction: '92%'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world implementations that showcase expertise in ERPNext development 
            and enterprise software solutions.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="flex-1 lg:max-w-lg">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:shadow-xl 
                             transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <div className="text-white">
                        {project.icon}
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg 
                                         hover:bg-white/30 transition-colors">
                          <Github className="h-5 w-5" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg 
                                         hover:bg-white/30 transition-colors">
                          <ExternalLink className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Metrics */}
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Impact & Results:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;