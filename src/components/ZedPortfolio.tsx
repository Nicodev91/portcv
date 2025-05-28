import { Code, Database, Settings, Monitor } from 'lucide-react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServiceSection';
import WhyChooseMe from './WhyChooseMe';
import StatsSection from './StastSection';
import CallToAction from './CallToAction';
import Footer from './Footer';
import WhatsAppButton from './ContactWhatsapp';

const services = [
  {
    icon: <Monitor className="w-10 h-10 text-cyan-400" />,
    title: "Desarrollador Web Fullstack",
    description: "Creando modernos sitios web responsivos utilizando React + Vite y otras tecnologías.",
    highlighted: true
  },
  {
    icon: <Code className="w-10 h-10 text-cyan-400" />,
    title: "Desarrollador de Software",
    description: "Desarrollo de aplicaciones de escritorio utilizando Python, NLP, Tkinter y más.",
  },
  {
    icon: <Database className="w-10 h-10 text-cyan-400" />,
    title: "Bases de Datos SQL",
    description: "Uso de gestores de bases de datos como PostgreSQL, MySQL y SQLite.",
  },
  {
    icon: <Settings className="w-10 h-10 text-cyan-400" />,
    title: "Herramientas ",
    description: "AWS - Docker - Git/Github - Tailwindcss - Flask - Django.",
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
      <WhatsAppButton />

    </div>
  );
};

export default ZedPortfolio;
