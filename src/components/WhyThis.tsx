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
                  <li>• Interactivo, con lecciones y evaluaciones por capítulo</li>
                  <li>• 8 casos clínicos reales con seguimiento a 24 meses</li>
                  <li>• Profundidad de posgrado y especialización</li>
                  <li>• 6-8 horas de estudio real, no superficial</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-unicoc-red-light p-12 rounded-lg text-center">
            <p className="text-5xl font-bold text-unicoc-red mb-4">6-8h</p>
            <p className="text-xl text-text-dark font-semibold">Para dominar la clasificación AAP/EFP 2018 a nivel de especialista</p>
          </div>
        </div>
      </div>
    </section>
  );
}
