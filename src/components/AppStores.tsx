const AppStores = () => {
  // Placeholder logos - will be replaced with actual store logos
  const storeLogos = [
    { name: "Zara", src: "/placeholder-logo-1.png" },
    { name: "H&M", src: "/placeholder-logo-2.png" },
    { name: "Nike", src: "/placeholder-logo-3.png" },
    { name: "Adidas", src: "/placeholder-logo-4.png" },
    { name: "Mango", src: "/placeholder-logo-5.png" },
    { name: "Uniqlo", src: "/placeholder-logo-6.png" },
    { name: "COS", src: "/placeholder-logo-7.png" },
    { name: "Massimo Dutti", src: "/placeholder-logo-8.png" },
  ];

  return (
    <section 
      className="py-20 bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/b80afb35-236a-4e68-86ae-5fc651f23a8e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center my-10 mb-16">
          <h2 className="text-3xl md:text-4xl font-normal leading-tight" style={{ color: '#7F7F7F' }}>
            Más de <span className="font-bold" style={{ color: '#735BF2' }}>20.000 prendas</span><br />
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
              {storeLogos.map((store, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-24 h-12 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center border border-gray-100">
                    <span className="text-gray-700 text-xs font-semibold tracking-wide">{store.name}</span>
                  </div>
                </div>
              ))}
              
              {/* Second set for seamless loop */}
              {storeLogos.map((store, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-24 h-12 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center border border-gray-100">
                    <span className="text-gray-700 text-xs font-semibold tracking-wide">{store.name}</span>
                  </div>
                </div>
              ))}
              
              {/* Third set for seamless loop */}
              {storeLogos.map((store, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 w-24 h-12 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center border border-gray-100">
                    <span className="text-gray-700 text-xs font-semibold tracking-wide">{store.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStores;