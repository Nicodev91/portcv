import { CheckCircle, AlarmClock, Flame, Smile} from 'lucide-react';

const stats = [
  { label: "Experiencia en algoritmos", icon: Flame },
  { label: "Clientes conformes", icon: Smile },
  { label: "2 años de experiencia desarrollando", icon: AlarmClock },
  { label: "100% de satisfacción", icon: CheckCircle },
];
  
  const StatsSection = () => {
    return (
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
            <div key={i}>
              <Icon className="w-12 h-12 text-cyan-400 mx-auto" />
              <p className="mt-2 text-lg">{stat.label}</p>
            </div>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  