export function WhyThis() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-unicoc-red">
              ¿Por Qué Elegir Este OVA?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-text-dark mb-2">❌ Cursos Tradicionales</h3>
                <ul className="text-text-light space-y-1 ml-6">
                  <li>• Aburridos, lineales</li>
                  <li>• Sin casos prácticos</li>
                  <li>• Una talla para todos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-dark mb-2">✅ OVA Periodontitis</h3>
                <ul className="text-text-light space-y-1 ml-6">
                  <li>• Interactivo, adaptado</li>
                  <li>• Casos reales de artículos</li>
                  <li>• Pregrado Y Máster diferenciados</li>
                  <li>• 4 horas = aprendes en serio</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-unicoc-red-light p-12 rounded-lg text-center">
            <p className="text-5xl font-bold text-unicoc-red mb-4">4h</p>
            <p className="text-xl text-text-dark font-semibold">Para dominar la clasificación AAP/EFP 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}
