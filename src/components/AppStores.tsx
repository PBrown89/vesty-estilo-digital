import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const AppStores = () => {
  const [visibleStores, setVisibleStores] = useState(0);
  
  const storeLogos = [{
    name: "Zara",
    src: "/lovable-uploads/4fb82b21-810a-4f80-babb-83e9e5f093d8.png",
    hasLogo: true
  }, {
    name: "H&M",
    src: "/lovable-uploads/5a0b8713-a9eb-49bb-9f1f-66a8161c0dee.png",
    hasLogo: true
  }, {
    name: "Nike",
    src: "/lovable-uploads/22860a36-ae24-43d4-b360-1b5e258ab201.png",
    hasLogo: true
  }, {
    name: "Adidas",
    src: "/lovable-uploads/be1b302b-f2c3-46f7-b8f3-547c8b3b7de7.png",
    hasLogo: true
  }, {
    name: "Mango",
    src: "/lovable-uploads/90f0c826-e679-4feb-9a25-0a461d1287eb.png",
    hasLogo: true
  }, {
    name: "Massimo Dutti",
    src: "/lovable-uploads/efb2c42d-5bdd-4480-b062-8c7af8a6b3da.png",
    hasLogo: true
  }, {
    name: "C&A",
    src: "/lovable-uploads/e60b8188-6bdf-4367-826d-f563f43a6982.png",
    hasLogo: true
  }, {
    name: "Pull&Bear",
    src: "/lovable-uploads/92ca18ba-59ae-4468-8838-914326ca6066.png",
    hasLogo: true
  }];

  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const [logosRef, logosInView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  // Reveal stores one by one when logos section is in view
  useEffect(() => {
    if (logosInView && visibleStores < storeLogos.length) {
      const timer = setInterval(() => {
        setVisibleStores(prev => {
          if (prev >= storeLogos.length) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 200);
      
      return () => clearInterval(timer);
    }
  }, [logosInView, visibleStores, storeLogos.length]);

  // Reset when section goes out of view
  useEffect(() => {
    if (!titleInView && !logosInView) {
      setVisibleStores(0);
    }
  }, [titleInView, logosInView]);

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleInView 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-normal leading-tight text-gray-500">
            Más de <span className="font-bold text-purple-600">20.000 prendas</span><br />
            de las marcas más top
          </h2>
        </div>
        
        <div 
          ref={logosRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {storeLogos.map((store, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-20 transition-all duration-700 transform ${
                index < visibleStores
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-75 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              {store.hasLogo ? (
                <img 
                  src={store.src} 
                  alt={store.name} 
                  className="w-full h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300" 
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center border border-gray-100">
                  <span className="text-gray-700 text-xs font-semibold tracking-wide">{store.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {storeLogos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index < visibleStores ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppStores;