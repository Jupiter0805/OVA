import { Button } from './Button';

export function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Aprende Periodontitis AAP/EFP 2018
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-100">
          Interactivo. Basado en casos reales. Para pregrado y máster.
        </p>

        <div className="flex gap-6 justify-center flex-col md:flex-row">
          <Button
            variant="primary"
            size="lg"
            className="!bg-white !text-unicoc-red hover:!bg-gray-100"
          >
            Acceder al OVA
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="!border-white !text-white hover:!bg-white hover:!text-unicoc-red"
          >
            Ver Características
          </Button>
        </div>
      </div>
    </section>
  );
}
