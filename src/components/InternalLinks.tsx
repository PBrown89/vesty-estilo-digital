import { Link } from "react-router-dom";

const InternalLinks = () => {
  const internalLinks = [
    {
      title: "Armario Digital",
      description: "Digitaliza y organiza toda tu ropa",
      href: "/armario-digital",
      keywords: "armario digital, organizar ropa, catálogo virtual"
    },
    {
      title: "Probador Virtual",
      description: "Pruébate ropa sin cambiarte",
      href: "/probador-virtual", 
      keywords: "probador virtual, realidad aumentada, probar ropa"
    },
    {
      title: "Análisis de Colores",
      description: "Descubre tu paleta perfecta",
      href: "/analisis-colores",
      keywords: "análisis de colores, paleta personal, colorimetría"
    },
    {
      title: "Preguntas Frecuentes",
      description: "Resuelve todas tus dudas",
      href: "/preguntas-frecuentes",
      keywords: "FAQ, ayuda, soporte"
    }
  ];

  return (
    <nav className="bg-gray-50 py-8" aria-label="Enlaces internos">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Descubre todas las funciones de Vesty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {internalLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
              aria-label={`Ir a ${link.title}: ${link.description}`}
            >
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{link.description}</p>
              <span className="text-xs text-gray-500">{link.keywords}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default InternalLinks;