import React from 'react';
import { Server, Database, Code, Smartphone, Cloud, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'ERPNext Development',
      skills: ['Custom DocTypes', 'Workflow Automation', 'Custom Apps', 'Frappe Framework', 'Python Scripting']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'API Integrations',
      skills: ['WhatsApp Business API', 'Payment Gateways', 'REST/GraphQL APIs', 'Webhook Development', 'Third-party Services']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Business Modules',
      skills: ['Accounting Systems', 'HR Management', 'Sales & CRM', 'Procurement', 'Inventory Management']
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Technologies',
      skills: ['Python', 'JavaScript', 'MariaDB/MySQL', 'Redis', 'Docker', 'Linux']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Infrastructure',
      skills: ['AWS/GCP', 'CI/CD Pipelines', 'Server Management', 'Backup Strategies', 'Performance Optimization']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security & Compliance',
      skills: ['Data Protection', 'Role-based Access', 'Security Audits', 'Compliance Standards', 'Encryption']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep knowledge in ERPNext ecosystems and enterprise software development, 
            with a focus on scalable business solutions and seamless integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl 
                       hover:shadow-lg transition-all duration-300 hover:scale-105 
                       border border-gray-200 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-blue-100">ERPNext Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">API Integrations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1+</div>
              <div className="text-blue-100">Year Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;