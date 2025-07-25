import { useEffect } from "react";

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEOEnhancer = ({ 
  title = "Vesty - Tu Estilista Personal Virtual | Armario Digital y Probador Virtual",
  description = "Digitaliza tu armario, pruébate ropa virtualmente y descubre tu paleta de colores perfecta. La app de moda que revoluciona tu estilo personal con IA.",
  keywords = "armario digital, probador virtual, estilista virtual, análisis de colores, app de moda, organizar armario, styling personal, inteligencia artificial moda",
  canonical = "https://vesty.app/"
}: SEOEnhancerProps) => {
  
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

  }, [title, description, keywords, canonical]);

  return null;
};

export default SEOEnhancer;