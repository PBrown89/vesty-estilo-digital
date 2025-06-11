
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-4 font-outfit">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-outfit">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                1. Datos que recopilamos
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 font-outfit">
                <li>Nombre, email, foto (si te registras)</li>
                <li>Imágenes de prendas y outfits</li>
                <li>Datos del dispositivo y versión de la app</li>
                <li>Datos de uso e interacciones</li>
                <li>Ubicación, si das permiso</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                2. Para qué usamos tus datos
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 font-outfit">
                <li>Ofrecer las funciones de la app</li>
                <li>Personalizar tu experiencia</li>
                <li>Mejorar el servicio</li>
                <li>Enviar comunicaciones sobre Vesty</li>
                <li>Cumplir con la ley</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                3. Uso de ubicación
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Si das permiso, usamos tu ubicación para sugerir outfits según el clima. Estos datos no se almacenan ni comparten.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                4. ¿Compartimos tus datos?
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                No vendemos tus datos. Solo compartimos con proveedores que nos ayudan a operar la app o si la ley lo requiere.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                5. Almacenamiento y seguridad
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Tus datos se almacenan de forma segura con medidas técnicas y organizativas adecuadas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                6. Cuánto tiempo guardamos tus datos
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Mientras tengas una cuenta activa o sean necesarios para prestarte el servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                7. Tus derechos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 font-outfit">
                Puedes solicitar:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 font-outfit">
                <li>Ver tus datos</li>
                <li>Rectificarlos</li>
                <li>Eliminarlos</li>
                <li>Limitar su uso</li>
                <li>Portarlos</li>
                <li>Oponerte al tratamiento</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Escríbenos a: <a href="mailto:vestyappes@gmail.com" className="text-vesty-purple hover:underline">vestyappes@gmail.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                8. Cambios en esta política
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Si actualizamos esta política, te lo notificaremos por email o desde la app.
              </p>
            </section>
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};

export default Privacidad;
