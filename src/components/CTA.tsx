import { Button } from './Button';

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo Para Aprender Periodontitis de Verdad?
        </h2>

        <p className="text-xl mb-12 text-gray-100">
          Solo toma 4 horas. Comienza hoy.
        </p>

        <Button
          variant="primary"
          size="lg"
          className="bg-white text-unicoc-red hover:bg-gray-100"
        >
          Acceder al OVA
        </Button>
      </div>
    </section>
  );
}
