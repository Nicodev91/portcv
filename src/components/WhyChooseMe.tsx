import { CheckCircle } from 'lucide-react';

const reasons = [
  "Experiencia en tecnologías modernas de desarrollo web.",
  "Focus on clean, maintainable code.",
  "Strong problem-solving skills.",
  "Reliable and meets deadlines.",
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Por qué elegirme?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some reasons why I stand out as a developer.
        </p>
      </div>

      <ul className="max-w-xl mx-auto space-y-6">
        {reasons.map((reason, i) => (
          <li key={i} className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-cyan-400" />
            <span className="text-lg">{reason}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseMe;
