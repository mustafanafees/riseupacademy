
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in order-2 lg:order-1">
            <Badge className="mb-4 lg:mb-6 bg-primary/10 text-primary border-primary/20">
              🎓 Admission Open - 25% OFF for 1st Batch
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-navy leading-tight mb-4 lg:mb-6">
              Unlock Your Potential,{" "}
              <span className="text-primary">Unleash Your Success</span>
            </h1>
            
            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
              Rise Up Academy offers comprehensive education for classes IX, X, XI, and XII 
              with result-oriented faculty, small batches, and individual attention to help 
              you achieve academic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 animate-pulse">
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="hover-scale">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-up order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 lg:p-8">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Students studying in classroom - Rise Up Academy" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 bg-white rounded-lg shadow-lg p-3 lg:p-4 border animate-bounce">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 lg:h-5 lg:w-5 text-accent fill-accent" />
                  <span className="font-semibold text-xs lg:text-sm">Result Oriented</span>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-white rounded-lg shadow-lg p-3 lg:p-4 border animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                  <span className="font-semibold text-xs lg:text-sm">Small Batches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
