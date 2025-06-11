
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terminos = () => {
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
            Términos y Condiciones
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                1. Aceptación de los términos
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Al acceder y utilizar la app Vesty, aceptas estos Términos y Condiciones junto con nuestra Política de Privacidad. Si no estás de acuerdo, por favor no uses la aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                2. Qué puedes hacer con Vesty
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 font-outfit">
                <li>Subir tus prendas y digitalizar tu armario.</li>
                <li>Crear y planificar outfits.</li>
                <li>Usar el probador virtual con IA.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 font-outfit">
                Nos reservamos el derecho de cambiar, suspender o eliminar funcionalidades sin previo aviso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                3. Registro de usuario
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Para acceder a ciertas funciones deberás crear una cuenta con datos reales. Tú eres responsable de proteger tus credenciales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                4. Contenido que subes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 font-outfit">
                Eres responsable del contenido (fotos, prendas, etc.) que subas a Vesty. Al hacerlo:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 font-outfit">
                <li>Aseguras tener derechos sobre él.</li>
                <li>Autorizas su uso dentro de la app para mostrar y procesar tu contenido.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-outfit">
                No está permitido subir contenido que involucre menores sin consentimiento o que sea ilegal u ofensivo. Podemos eliminar contenido que infrinja estas normas o suspender tu cuenta.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                5. Propiedad intelectual
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Todo el contenido de Vesty (nombre, logo, diseño, código) es propiedad de sus creadores. No se permite su reproducción sin permiso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                6. Limitación de responsabilidad
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Vesty se ofrece "tal cual". No garantizamos precisión total en las pruebas virtuales ni nos responsabilizamos por usos indebidos de la app o contenido de usuarios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                7. Cancelación de cuentas
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Si incumples estos términos, podemos suspender o eliminar tu cuenta sin previo aviso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                8. Cambios en los términos
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Podemos actualizar estos Términos. Te lo notificaremos en la app o por email. Usar la app tras los cambios implica que los aceptas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit">
                9. ¿Dudas?
              </h2>
              <p className="text-gray-700 leading-relaxed font-outfit">
                Escríbenos a: <a href="mailto:vestyappes@gmail.com" className="text-vesty-purple hover:underline">vestyappes@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};

export default Terminos;
