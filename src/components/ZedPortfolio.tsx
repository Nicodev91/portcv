import React from 'react';
import { Code, Database, Settings, Monitor, Shield, Headphones, Award, Users, Clock, Star } from 'lucide-react';

const ZedPortfolio = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Developers, project",
      description: "Define software requirements and project scope."
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: "Writing & debugging",
      description: "Create the development of high-quality software programs.",
      highlighted: true
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      title: "Troubleshooting",
      description: "Error and resolving technical issues efficiently."
    },
    {
      icon: <Monitor className="w-8 h-8 text-cyan-400" />,
      title: "Maintaining and updating",
      description: "Keeping software programs to ensure they remain relevant and effective."
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Staying up-to-date",
      description: "With the latest programming languages, techniques, and processes to ensure best practices and efficient development."
    },
    {
      icon: <Headphones className="w-8 h-8 text-cyan-400" />,
      title: "Providing tech support.",
      description: "Technical support is a crucial component of any organization. Ask about our technology."
    }
  ];

  const features = [
    {
      icon: <Users className="w-12 h-12 text-cyan-400" />,
      title: "Responsible",
      description: "As always deliver our project on time, based on the requirements given and always."
    },
    {
      icon: <Star className="w-12 h-12 text-cyan-400" />,
      title: "Smart solutions",
      description: "We always deliver faster and have smart creative solutions that make good results."
    },
    {
      icon: <Award className="w-12 h-12 text-cyan-400" />,
      title: "Thinking Skill",
      description: "Always think clearly and use the best solutions for your business, make your business grow."
    },
    {
      icon: <Database className="w-12 h-12 text-cyan-400" />,
      title: "Certificate",
      description: "As valid blogger and expertise services because we like to see the professional work."
    },
    {
      icon: <Monitor className="w-12 h-12 text-cyan-400" />,
      title: "Professional Experience",
      description: "As always deliver freelance and make websites, professional in design from biggest."
    },
    {
      icon: <Clock className="w-12 h-12 text-cyan-400" />,
      title: "24/7 Support",
      description: "Usually provide early contacts communication for finish from end clients after Project finish from end."
    }
  ];

  const stats = [
    { number: "120+", label: "PROJECT DONE", description: "Successfully completed project over the years to create an Create website that suits." },
    { number: "320+", label: "HAPPY CLIENT", description: "We hope to what we make to get More Service and what." },
    { number: "12+", label: "YEAR EXPERIENCE", description: "Gaining front-end and back-end development and consulting solutions with more focus and what." },
    { number: "8", label: "AWARDS", description: "Various first order of years Creative and delivering skills Valued feedback and value." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 text-white">
        <div className="text-2xl font-bold text-cyan-400">ZED.</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-cyan-400 transition-colors">HOME</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">PAGE ▼</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">WORKS ▼</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">ARTICLE & NEWS ▼</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">CONTACT US</a>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
          HIRE ME ▲
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-500/20"></div>
        <div className="relative text-center py-20 text-white">
          <p className="text-lg mb-4 text-gray-300">I'M READY TO HELP YOU</p>
          <h1 className="text-6xl font-bold mb-8">MY SERVICES</h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span className="text-cyan-400 text-sm uppercase tracking-wider">MY SERVICE</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience in this field.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Responsible for creating software structures that perform special tasks, such as managing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                service.highlighted
                  ? 'bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-cyan-400/50'
                  : 'bg-slate-800/50 border-slate-700 hover:border-cyan-400/50'
              }`}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all mr-4">
            PORTFOLIO MORE ►
          </button>
          <span className="text-cyan-400">📧 awesomemail@mail.com</span>
        </div>
      </div>

      {/* Why Choose Me Section */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span className="text-cyan-400 text-sm uppercase tracking-wider">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Why should you choose me<br />to grow your business.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-2xl p-12 text-center border border-slate-700">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mx-auto mb-8 flex items-center justify-center">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Glad to start a project with you.
            </h2>
            <p className="text-gray-400 mb-8">
              Feel free to reach out if you need help or you want to connect!
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-cyan-400">📧 Contact</span>
              <span className="text-cyan-400">🐦 Twitter</span>
              <span className="text-cyan-400">💼 LinkedIn</span>
              <span className="text-cyan-400">📞 Telephone</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center border-t border-slate-800">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
          <span className="text-white font-bold">Z</span>
        </div>
        <div className="text-cyan-400 font-bold mb-4">"ZED SEIVANO"</div>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
          <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
          <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
          <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
        </div>
        <p className="text-gray-500 text-sm">
          Copyright belongs to Developers © 2024 All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ZedPortfolio;