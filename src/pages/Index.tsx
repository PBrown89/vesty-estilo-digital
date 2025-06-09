
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Features />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Index;
