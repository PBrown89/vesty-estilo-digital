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
      <div className="container mx-auto px-6 relative z-10 py-[40px]">
        <div className="text-center my-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight" style={{
          color: '#7F7F7F'
        }}>
            Más de <span className="font-bold" style={{
            color: '#735BF2'
          }}>20.000 prendas</span><br />
            de las marcas más top
          </h2>
        </div>
        
        {/* Carousel container with gradient masks */}
        <div className="relative">
          {/* Left gradient mask */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right gradient mask */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling logos container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-smooth items-center space-x-16">
              {/* First set of logos */}
              {storeLogos.map((store, index) => <div key={`first-${index}`} className="flex-shrink-0 w-24 h-12 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300">
                  {store.hasLogo ? <img src={store.src} alt={store.name} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center border border-gray-100">
                      <span className="text-gray-700 text-xs font-semibold tracking-wide">{store.name}</span>
                    </div>}
                </div>)}
              
              {/* Second set for seamless loop */}
              {storeLogos.map((store, index) => <div key={`second-${index}`} className="flex-shrink-0 w-24 h-12 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300">
                  {store.hasLogo ? <img src={store.src} alt={store.name} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center border border-gray-100">
                      <span className="text-gray-700 text-xs font-semibold tracking-wide">{store.name}</span>
                    </div>}
                </div>)}
              
              {/* Third set for seamless loop */}
              {storeLogos.map((store, index) => <div key={`third-${index}`} className="flex-shrink-0 w-24 h-12 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300">
                  {store.hasLogo ? <img src={store.src} alt={store.name} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center border border-gray-100">
                      <span className="text-gray-700 text-xs font-semibold tracking-wide">{store.name}</span>
                    </div>}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AppStores;