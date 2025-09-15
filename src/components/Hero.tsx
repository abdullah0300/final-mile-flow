import { Button } from "@/components/ui/button";
import { Truck, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center mt-16 md:mt-18 justify-center bg-gradient-to-br from-logistics-blue to-logistics-blue-light overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional logistics delivery"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-logistics-blue/80 to-logistics-blue-light/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Fleetory: Nationwide 
            <span className="block text-logistics-orange mt-1 md:mt-2">Same-Day Courier</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            From an urgent envelope to a few pallets, Fleetory has you covered. Based in Derby, 
            our central logistics hub expertly manages comprehensive same-day delivery solutions 24/7, 365 days a year.
          </p>

          {/* Key Features */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-white/90">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Clock className="h-5 w-5 md:h-6 md:w-6 text-logistics-orange flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">60-Minute Collection</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-logistics-orange flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">Nationwide Service</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Truck className="h-5 w-5 md:h-6 md:w-6 text-logistics-orange flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">Fully Insured</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 md:pt-8 px-4 sm:px-0">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-logistics-orange hover:bg-logistics-orange-light text-white font-semibold px-6 sm:px-8 py-3 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '/booking'}
            >
              Get a Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-logistics-blue font-semibold px-6 sm:px-8 py-3 md:py-4 text-base md:text-lg rounded-full transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Request Call Back
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - only visible on big screens */}
<div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
  <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
    <div className="w-0.5 md:w-1 h-2 md:h-3 bg-white/50 rounded-full mt-1.5 md:mt-2"></div>
  </div>
</div>

    </section>
  );
};

export default Hero;