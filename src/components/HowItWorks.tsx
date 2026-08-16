export function HowItWorks() {
  const steps = [
    { number: 1, title: 'REGÍSTRATE', description: 'Crea cuenta con email @unicoc.edu.co' },
    { number: 2, title: 'ELIGE NIVEL', description: 'Pregrado o Máster - rutas adaptadas' },
    { number: 3, title: 'COMIENZA', description: '4 capítulos, 20+ tests, 7 casos clínicos' },
    { number: 4, title: 'CERTIFÍCATE', description: 'Obtén certificado digital al terminar' },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-unicoc-red">
          Cómo Funciona
        </h2>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-unicoc-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-2">{step.title}</h3>
                <p className="text-text-light text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
