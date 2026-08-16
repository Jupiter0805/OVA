import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="UNICOC"
            className="h-10"
          />
        </div>

        <div className={`hidden md:flex gap-8`}>
          <a href="#inicio" className="text-text-dark hover:text-unicoc-red transition">Inicio</a>
          <a href="#caracteristicas" className="text-text-dark hover:text-unicoc-red transition">Características</a>
          <a href="#como-funciona" className="text-text-dark hover:text-unicoc-red transition">Cómo Funciona</a>
          <a href="#contacto" className="text-text-dark hover:text-unicoc-red transition">Contacto</a>
        </div>

        <button className="hidden md:block bg-unicoc-red text-white px-6 py-2 rounded hover:bg-unicoc-red-dark transition">
          Acceder
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <a href="#inicio" className="text-text-dark hover:text-unicoc-red transition" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#caracteristicas" className="text-text-dark hover:text-unicoc-red transition" onClick={() => setIsOpen(false)}>Características</a>
          <a href="#como-funciona" className="text-text-dark hover:text-unicoc-red transition" onClick={() => setIsOpen(false)}>Cómo Funciona</a>
          <a href="#contacto" className="text-text-dark hover:text-unicoc-red transition" onClick={() => setIsOpen(false)}>Contacto</a>
          <button className="bg-unicoc-red text-white px-6 py-2 rounded hover:bg-unicoc-red-dark transition">
            Acceder
          </button>
        </div>
      )}
    </header>
  );
}
