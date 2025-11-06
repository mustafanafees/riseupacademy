
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, hsl(221 83% 53% / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(26 90% 60% / 0.1) 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in order-2 lg:order-1">
            <Badge className="mb-4 lg:mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20 shadow-md">
              🎓 Admission Open - 25% OFF for 1st Batch
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6">
              <span className="text-primary">
                Unlock Your Potential,
              </span>
              <br />
              <span className="text-primary">
                Unleash Your Success
              </span>
            </h1>
            
            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
              Rise Up Academy offers comprehensive education for classes IX, X, XI, and XII 
              with result-oriented faculty, small batches, and individual attention to help 
              you achieve academic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-8">
              <Link to="/features">
                <Button size="lg" className="hover-scale gradient-primary text-white shadow-lg hover:shadow-xl transition-all">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="relative animate-slide-up order-1 lg:order-2">
            <HeroCarousel />
            
            {/* Floating Cards with Glass Effect */}
            <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 glass rounded-2xl shadow-xl p-3 lg:p-4 animate-bounce">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 lg:h-5 lg:w-5 text-accent fill-accent" />
                <span className="font-semibold text-xs lg:text-sm text-foreground">Result Oriented</span>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 glass rounded-2xl shadow-xl p-3 lg:p-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                <span className="font-semibold text-xs lg:text-sm text-foreground">Small Batches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
