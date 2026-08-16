export function Features() {
  const features = [
    {
      icon: '📚',
      title: 'Pedagogía Clara',
      description: 'Aprende paso a paso. Microlearning de 45 minutos por capítulo. Sin complicaciones innecesarias.',
    },
    {
      icon: '🎯',
      title: 'Casos Reales',
      description: '5-7 casos clínicos de artículos médicos. Diagnostica, clasifica, aprende de la realidad.',
    },
    {
      icon: '⚡',
      title: 'Flexible',
      description: 'Pregrado: ruta básica. Máster: análisis crítico avanzado. Tu ritmo, tu nivel.',
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 md:py-32 bg-bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-unicoc-red">
          ¿Por Qué Este OVA?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-text-dark">{feature.title}</h3>
              <p className="text-text-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
