// import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/Solidad_Kimeu_-_FrappeERPNext_Developer.docx'; 
    link.download = 'Solidad_Kimeu_-_FrappeERPNext_Developer.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Frappe/
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {' '}ERPNext{' '}
            </span>
            Developer
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Software engineer specializing in ERPNext customization, API integrations, 
            and enterprise business solutions. Building scalable systems that drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold 
                       transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl 
                       hover:scale-105 group"
            >
              <span>View My Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 
                       px-8 py-4 rounded-lg font-semibold transition-all duration-300 
                       flex items-center space-x-2 hover:scale-105"
            >
              <span>Get In Touch</span>
              <Mail className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/solidad1234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/solidad-kimeu-b1a578270/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <button 
              onClick={downloadResume}
              className="text-gray-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10 flex items-center space-x-2 group"
              aria-label="Download Resume"
            >
              <Download className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
              <span className="text-sm">Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;