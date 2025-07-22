import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import step1Preview from "@/assets/step1-preview.jpg";
import step2Preview from "@/assets/step2-preview.jpg";
import step3Preview from "@/assets/step3-preview.jpg";

interface StoryStep {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  fallbackImage: string;
  duration: number; // in seconds
}

const steps: StoryStep[] = [
  {
    id: "step-1",
    title: "Digitaliza tu armario",
    description: "Fotografía tus prendas y organízalas automáticamente. Vesty crea un catálogo visual de todo lo que tienes.",
    videoUrl: "/lovable-uploads/step1-video.mp4", // Replace with actual video
    fallbackImage: step1Preview,
    duration: 7
  },
  {
    id: "step-2", 
    title: "Crea o sugiere looks",
    description: "Recibe sugerencias personalizadas y planifica tus looks. Nunca más tendrás dudas sobre qué ponerte.",
    videoUrl: "/lovable-uploads/step2-video.mp4", // Replace with actual video
    fallbackImage: step2Preview,
    duration: 8
  },
  {
    id: "step-3",
    title: "Haz match con tu estilo",
    description: "Busca prendas que van con tu estilo y que realmente necesitas, pruébatelas y toma una decisión consciente.",
    videoUrl: "/lovable-uploads/step3-video.mp4", // Replace with actual video
    fallbackImage: step3Preview,
    duration: 6
  }
];

const HowItWorksNew = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [allVideosCompleted, setAllVideosCompleted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: sectionInViewRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  // Auto-start when section comes into view
  useEffect(() => {
    if (sectionInView) {
      setIsPlaying(true);
      setProgress(0);
    }
  }, [sectionInView]);

  // Progress simulation and video handling
  useEffect(() => {
    if (!isPlaying) return;

    const duration = steps[currentStep].duration * 1000; // Convert to milliseconds
    const interval = 100; // Update every 100ms for smooth progress
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (interval / duration) * 100;
        
        if (newProgress >= 100) {
          setIsPlaying(false);
          
          // Auto advance to next step
          setTimeout(() => {
            if (currentStep < steps.length - 1) {
              setCurrentStep(prevStep => prevStep + 1);
              setProgress(0);
              setIsPlaying(true);
            } else {
              setAllVideosCompleted(true);
            }
          }, 800);
          
          return 100;
        }
        
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, currentStep]);

  // Try to play actual video if available
  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Video failed to play, continue with image simulation
      });
    }
  }, [currentStep, isPlaying]);

  // Scroll-based navigation
  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
    
    // Only allow manual progression if current video is at least 50% complete
    if (scrollProgress > 0.7 && progress > 50) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
        setProgress(0);
      }
    }
  }, [currentStep, progress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const currentStepData = steps[currentStep];

  return (
    <section 
      ref={sectionRef}
      id="como-funciona" 
      className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20 py-24 flex items-center"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          ref={headerRef} 
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-out",
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tres pasos simples para transformar tu relación con la moda
          </p>
        </div>

        {/* Main Content */}
        <div 
          ref={sectionInViewRef}
          className={cn(
            "max-w-6xl mx-auto transition-all duration-1000 ease-out",
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          )}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div className="space-y-8 lg:order-1 order-2">
              {/* Step Indicators */}
              <div className="flex space-x-4 mb-8">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-2 flex-1 rounded-full transition-all duration-500",
                      index <= currentStep ? "bg-vesty-purple" : "bg-muted",
                      index === currentStep && "ring-2 ring-vesty-purple/30"
                    )}
                  />
                ))}
              </div>

              {/* Current Step Content */}
              <div 
                key={currentStep}
                className="animate-fade-in-left"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-vesty-purple text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-lg">
                    {String(currentStep + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {currentStepData.title}
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentStepData.description}
                </p>
              </div>

              {/* Completion Status */}
              {allVideosCompleted && (
                <div className="bg-gradient-to-r from-vesty-purple/10 to-vesty-pink/10 rounded-2xl p-6 border border-vesty-purple/20 animate-scale-in">
                  <p className="text-vesty-purple font-semibold text-center">
                    ¡Perfecto! Ya conoces cómo funciona Vesty. Continúa explorando.
                  </p>
                </div>
              )}
            </div>

            {/* Phone Mockup with Video */}
            <div className="lg:order-2 order-1 flex justify-center">
              <div className="relative animate-float">
                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-background rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                    
                    {/* Story Progress Bars */}
                    <div className="absolute top-4 left-4 right-4 z-20 flex space-x-2">
                      {steps.map((_, index) => (
                        <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                          <div 
                            className={cn(
                              "h-full bg-white transition-all duration-300",
                              index < currentStep ? "w-full" : 
                              index === currentStep ? `w-[${progress}%]` : "w-0"
                            )}
                            style={{
                              width: index < currentStep ? '100%' : 
                                     index === currentStep ? `${progress}%` : '0%'
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Video/Image Container */}
                    <div className="relative w-80 h-[600px] bg-gradient-to-br from-vesty-purple/20 to-vesty-pink/20">
                      {/* Video Element (hidden by default, shows when available) */}
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover opacity-0 absolute inset-0"
                        muted
                        playsInline
                        loop={false}
                        onEnded={() => setIsPlaying(false)}
                        onLoadedData={() => {
                          if (videoRef.current) {
                            videoRef.current.style.opacity = '1';
                          }
                        }}
                        onError={() => {
                          if (videoRef.current) {
                            videoRef.current.style.opacity = '0';
                          }
                        }}
                      >
                        <source src={currentStepData.videoUrl} type="video/mp4" />
                      </video>

                      {/* Fallback Image */}
                      <div className="absolute inset-0">
                        <img 
                          src={currentStepData.fallbackImage}
                          alt={currentStepData.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                            <div className="w-0 h-0 border-l-[16px] border-l-vesty-purple border-y-[12px] border-y-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>

                      {/* Video Overlay for Touch Interaction */}
                      <div 
                        className="absolute inset-0 bg-transparent cursor-pointer"
                        onClick={() => {
                          if (videoRef.current) {
                            if (isPlaying) {
                              videoRef.current.pause();
                              setIsPlaying(false);
                            } else {
                              videoRef.current.play();
                              setIsPlaying(true);
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-vesty-purple/20 to-vesty-pink/20 rounded-[3rem] blur-3xl -z-10 scale-110"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        {!allVideosCompleted && (
          <div className="text-center mt-16 opacity-60">
            <p className="text-sm text-muted-foreground">
              Haz scroll para avanzar o espera a que termine el video
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorksNew;