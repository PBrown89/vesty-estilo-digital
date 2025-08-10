import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Apple, Star } from "lucide-react";

const GoogleIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.52 12.2727C23.52 11.4227 23.4436 10.6055 23.3018 9.81818H12V14.4591H18.4909C18.2091 15.9591 17.3818 17.2 16.12 18.0364V21.0636H19.96C22.16 19.0182 23.52 15.9273 23.52 12.2727Z" fill="#4285F4"/>
    <path d="M12 24C15.24 24 17.96 22.9273 19.96 21.0636L16.12 18.0364C15.04 18.7564 13.64 19.1818 12 19.1818C8.88 19.1818 6.24 17.1182 5.3 14.3H1.34V17.4182C3.32999 21.3364 7.35999 24 12 24Z" fill="#34A853"/>
    <path d="M5.3 14.3C5.06 13.58 4.92727 12.8091 4.92727 12C4.92727 11.1909 5.06 10.4182 5.3 9.7V6.58182H1.34C0.485455 8.22182 0 10.0545 0 12C0 13.9455 0.485455 15.7782 1.34 17.4182L5.3 14.3Z" fill="#FBBC05"/>
    <path d="M12 4.81818C13.8 4.81818 15.4091 5.43636 16.6909 6.64545L20.05 3.28636C17.9545 1.34545 15.24 0 12 0C7.35999 0 3.32999 2.66364 1.34 6.58182L5.3 9.7C6.24 6.88182 8.88 4.81818 12 4.81818Z" fill="#EA4335"/>
  </svg>
);

const CombinedFinalSlide = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* CTA superior */}
      <div className="relative flex-1 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-slate-800/80 dark:to-slate-800">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center max-w-4xl mx-auto">
            Descárgala gratis y empieza a crear
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-pink-400 to-orange-300">tus looks hoy mismo</span>
          </h1>

          <p className="mt-6 text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Únete a miles de personas que ya han transformado su forma de vestir con Vesty
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/es/app/vesty/id6743717284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="h-12 rounded-full px-6 shadow-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-white hover:opacity-90">
                <Apple className="mr-2 h-5 w-5" /> Descargar para iOS
              </Button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="h-12 rounded-full px-6 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-slate-100/60 dark:hover:bg-white/10">
                <GoogleIcon />
                <span className="ml-2">Descargar para Android</span>
              </Button>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span>4.9/5 valoración</span>
            <span className="hidden sm:inline">|</span>
            <span>Gratis en App Store y Google Play</span>
          </div>
        </div>

        {/* Divisor curvo hacia el footer */}
        <div className="absolute bottom-0 left-0 w-full text-slate-900 dark:text-slate-900" aria-hidden="true">
          <svg className="w-full h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,64 C240,160 480,0 720,64 C960,128 1200,32 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Footer unificado */}
      <footer className="bg-slate-900 text-white relative">
        <div className="container mx-auto px-6 pt-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-10">
            {/* Sobre Vesty */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Sobre Vesty</h3>
              <ul className="space-y-3 text-slate-200">
                <li>
                  <a
                    href="mailto:vestyappes@gmail.com?subject=Contacto%20desde%20la%20web"
                    className="hover:underline"
                  >
                    Contacta con nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:vestyappes@gmail.com?subject=Reporte%20de%20error%20desde%20la%20web"
                    className="hover:underline"
                  >
                    Reportar un error
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-3 text-slate-200">
                <li>
                  <a href="/terminos" className="hover:underline">Términos y condiciones</a>
                </li>
                <li>
                  <a href="/privacidad" className="hover:underline">Política de privacidad</a>
                </li>
              </ul>
            </div>

            {/* Descarga la app (footer) */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Descarga la app</h3>
              <div className="space-y-3">
                <a
                  href="https://apps.apple.com/es/app/vesty/id6743717284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button variant="outline" className="w-full bg-transparent border-slate-500 text-slate-200 hover:bg-white/10">
                    iOS App Store
                  </Button>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button variant="outline" className="w-full bg-transparent border-slate-500 text-slate-200 hover:bg-white/10">
                    Google Play
                  </Button>
                </a>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/vesty_app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@vestyapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.05z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 my-6"></div>

          <div className="text-center text-slate-300 text-sm">
            © 2025 Vesty. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CombinedFinalSlide;
