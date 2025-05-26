import { Code, Database, Settings, Monitor } from 'lucide-react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServiceSection';
import WhyChooseMe from './WhyChooseMe';
import StatsSection from './StastSection';
import CallToAction from './CallToAction';
import Footer from './Footer';

const services = [
  {
    icon: <Monitor className="w-10 h-10 text-cyan-400" />,
    title: "Desarrollador Web",
    description: "Creating modern and responsive websites using the latest technologies.",
    highlighted: true
  },
  {
    icon: <Code className="w-10 h-10 text-cyan-400" />,
    title: "Desarrollador de Software",
    description: "Building robust and scalable software solutions for various platforms.",
  },
  {
    icon: <Database className="w-10 h-10 text-cyan-400" />,
    title: "Bases de Datos SQL",
    description: "Designing and optimizing database structures for efficient data handling.",
  },
  {
    icon: <Settings className="w-10 h-10 text-cyan-400" />,
    title: "System Integration",
    description: "Seamlessly connecting different systems and applications.",
  },
  
];

const ZedPortfolio = () => {
  // Aquí se puede definir features y stats también o importarlos

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/*Implementacion de los componentes*/}
      <Navbar />
      <HeroSection />
      <ServicesSection services={services} />
      <WhyChooseMe />
      <StatsSection />
      <CallToAction />
      <Footer />

      
      {/* PASAR servicios como prop */}
      <ServicesSection services={services} />

    </div>
  );
};

export default ZedPortfolio;
