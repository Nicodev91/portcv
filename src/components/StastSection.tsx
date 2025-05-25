const stats = [
    { label: "Projects Completed", value: 120 },
    { label: "Happy Clients", value: 85 },
    { label: "Years of Experience", value: 5 },
    { label: "Awards Won", value: 3 },
  ];
  
  const StatsSection = () => {
    return (
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-extrabold text-cyan-400">{stat.value}</p>
              <p className="mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  