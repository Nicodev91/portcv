// import { Code, Database, Settings, Monitor, Shield, Headphones } from 'lucide-react';
// Hola 
interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  highlighted?: boolean;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => (
  <div className="py-20 px-6 max-w-7xl mx-auto">
    {/* encabezado */}
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

    {/* servicios */}
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
);

export default ServicesSection;

