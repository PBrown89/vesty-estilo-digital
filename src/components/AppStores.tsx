import { useState, useEffect } from 'react';

const AppStores = () => {
  const [visibleLogos, setVisibleLogos] = useState(0);
  
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
    src: "/lovable-uploads/15f93b4e-da11-4e55-8a4d-a510ea43fcb4.png",
    hasLogo: true
  }, {
    name: "Pull&Bear",
    src: "/lovable-uploads/92ca18ba-59ae-4468-8838-914326ca6066.png",
    hasLogo: true
  }];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLogos(prev => {
        if (prev < storeLogos.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [storeLogos.length]);

  return (
    <section className="h-screen bg-white relative overflow-hidden flex items-center justify-center" style={{
      backgroundImage: `url('/lovable-uploads/b80afb35-236a-4e68-86ae-5fc651f23a8e.png')`,
      backgroundSize: '50%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center mt-16 md:mt-0">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight" style={{
            color: '#7F7F7F'
          }}>
            Más de <span className="font-bold" style={{
              color: '#735BF2'
            }}>20.000 prendas</span><br />
            de las marcas más top
          </h2>
        </div>
        
        {/* Grid layout for logos */}
        <div className="flex items-center justify-center mt-8 md:mt-16">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-3 gap-y-2 md:gap-6 max-w-4xl w-full">
            {storeLogos.map((store, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center transition-all duration-500 transform ${
                  index < visibleLogos 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-75 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-32 h-32 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                  {store.hasLogo ? (
                    <img 
                      src={store.src} 
                      alt={store.name} 
                      className="w-full h-full object-contain filter brightness-0" 
                    />
                  ) : (
                    <span className="text-gray-700 text-xs font-semibold tracking-wide">
                      {store.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStores;