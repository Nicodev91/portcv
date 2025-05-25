import { Code, Database, Settings, Monitor, Shield, Headphones } from 'lucide-react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServiceSection';

const services = [
  {
    icon: <Monitor className="w-10 h-10 text-cyan-400" />,
    title: "Web Development",
    description: "Creating modern and responsive websites using the latest technologies.",
    highlighted: true
  },
  {
    icon: <Code className="w-10 h-10 text-cyan-400" />,
    title: "Software Development",
    description: "Building robust and scalable software solutions for various platforms.",
  },
  {
    icon: <Database className="w-10 h-10 text-cyan-400" />,
    title: "Database Management",
    description: "Designing and optimizing database structures for efficient data handling.",
  },
  {
    icon: <Settings className="w-10 h-10 text-cyan-400" />,
    title: "System Integration",
    description: "Seamlessly connecting different systems and applications.",
  },
  {
    icon: <Shield className="w-10 h-10 text-cyan-400" />,
    title: "Security Solutions",
    description: "Implementing robust security measures to protect digital assets.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-cyan-400" />,
    title: "Technical Support",
    description: "Providing reliable technical assistance and problem resolution.",
  }
];

const ZedPortfolio = () => {
  // Aquí se puede definir features y stats también o importarlos

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      <HeroSection />
      
      {/* PASAR servicios como prop */}
      <ServicesSection services={services} />

      {/* resto del componente */}
    </div>
  );
};

export default ZedPortfolio;
