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
  <section className="w-full bg-[#0a1627] py-24">
    <div className="max-w-7xl mx-auto px-4">
      {/* encabezado */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center mb-6">
          <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
          <span className="text-cyan-400 text-sm uppercase tracking-wider font-medium">MY SERVICE</span>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Work Experience in this field.</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Responsible for creating software structures that perform special tasks, such as managing
        </p>
      </div>

      {/* servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={
              `relative group p-10 rounded-3xl bg-[#101e36] border border-cyan-500/20 shadow-xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden ` +
              (service.highlighted ? 'ring-2 ring-cyan-400/40' : '')
            }
            style={{ boxShadow: '0 4px 32px 0 rgba(0,255,255,0.08), 0 1.5px 8px 0 rgba(0,255,255,0.10)' }}
          >
            <div className="mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed text-base">{service.description}</p>
            {/* Glow effect */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow:'0 0 32px 8px rgba(0,255,255,0.15)'}}></div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all mr-6 text-lg font-medium shadow-lg">
          Contactame ►
        </button>
        <span className="text-cyan-400 text-lg">📧 nicolas.sebasec@gmail.com</span>
      </div>
    </div>
  </section>
);

export default ServicesSection;

