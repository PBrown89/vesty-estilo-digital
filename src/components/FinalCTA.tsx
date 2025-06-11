
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Style?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of users who have already revolutionized their fashion experience
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
