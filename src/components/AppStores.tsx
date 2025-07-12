const AppStores = () => {
  // Placeholder logos - will be replaced with actual store logos
  const storeLogos = [
    { name: "Store 1", src: "/placeholder-logo-1.png" },
    { name: "Store 2", src: "/placeholder-logo-2.png" },
    { name: "Store 3", src: "/placeholder-logo-3.png" },
    { name: "Store 4", src: "/placeholder-logo-4.png" },
    { name: "Store 5", src: "/placeholder-logo-5.png" },
    { name: "Store 6", src: "/placeholder-logo-6.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
          Disponible en las mejores tiendas
        </h2>
        
        {/* Carousel container */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center justify-center">
            {/* First set of logos */}
            {storeLogos.map((store, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">{store.name}</span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {storeLogos.map((store, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">{store.name}</span>
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