export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-text-dark text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo.png" alt="UNICOC" className="h-8 mb-4" />
            <p className="text-gray-300">OVA Periodontitis UNICOC</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-unicoc-red transition">Acceder</a></li>
              <li><a href="#caracteristicas" className="hover:text-unicoc-red transition">Características</a></li>
              <li><a href="#" className="hover:text-unicoc-red transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-unicoc-red transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-unicoc-red transition">Términos</a></li>
              <li><a href="#" className="hover:text-unicoc-red transition">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-gray-300">ovaperiodo@unicoc.edu.co</p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>&copy; {year} UNICOC - Universidad Cooperativa de Colombia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
