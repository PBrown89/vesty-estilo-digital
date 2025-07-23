const AppStores = () => {
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
  return <section className="py-20 bg-white relative overflow-hidden" style={{
    backgroundImage: `url('/lovable-uploads/b80afb35-236a-4e68-86ae-5fc651f23a8e.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight" style={{
          color: '#7F7F7F'
        }}>
            Más de <span className="font-bold" style={{
            color: '#735BF2'
          }}>20.000 prendas</span><br />
            de las marcas más top
          </h2>
        </div>
        
        {/* Logo carousel - one at a time */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-lg h-40 sm:h-48 lg:h-56">
            <div className="overflow-hidden h-full">
              <div className="flex animate-scroll-smooth items-center h-full">
                {/* First set of logos */}
                {storeLogos.map((store, index) => (
                  <div 
                    key={`first-${index}`} 
                    className="flex-shrink-0 w-full h-full flex items-center justify-center px-8"
                  >
                    {store.hasLogo ? (
                      <img 
                        src={store.src} 
                        alt={store.name} 
                        className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" 
                      />
                    ) : (
                      <div className="w-32 h-16 bg-gray-200 rounded-md flex items-center justify-center border border-gray-100">
                        <span className="text-gray-700 text-sm font-semibold tracking-wide">{store.name}</span>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Second set for seamless loop */}
                {storeLogos.map((store, index) => (
                  <div 
                    key={`second-${index}`} 
                    className="flex-shrink-0 w-full h-full flex items-center justify-center px-8"
                  >
                    {store.hasLogo ? (
                      <img 
                        src={store.src} 
                        alt={store.name} 
                        className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" 
                      />
                    ) : (
                      <div className="w-32 h-16 bg-gray-200 rounded-md flex items-center justify-center border border-gray-100">
                        <span className="text-gray-700 text-sm font-semibold tracking-wide">{store.name}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AppStores;