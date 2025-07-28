
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
      {/* Modern Background with Gradient Mesh */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container-modern relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-scale order-2 lg:order-1 space-y-8">
            <Badge className="mb-2 bg-gradient-to-r from-accent/20 to-primary/20 text-primary border-primary/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              🎓 Admission Open - 25% OFF for 1st Batch
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-balance">
                <span className="text-gradient-primary block">
                  Unlock Your Potential,
                </span>
                <span className="text-gradient block">
                  Unleash Your Success
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Rise Up Academy offers comprehensive education for classes IX, X, XI, and XII 
                with result-oriented faculty, small batches, and individual attention to help 
                you achieve academic excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/features">
                <Button size="xl" variant="default" className="group">
                  Learn More
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </Link>
              <Button size="xl" variant="outline" className="group">
                Watch Demo
                <span className="ml-2 transition-transform group-hover:scale-110">▶</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-light rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium text-muted-foreground">500+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-accent-light rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium text-muted-foreground">95% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-navy to-navy-light rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium text-muted-foreground">Expert Faculty</span>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="relative animate-slide-in-right order-1 lg:order-2">
            <div className="relative">
              <HeroCarousel />
              
              {/* Modern Glass Cards */}
              <div className="absolute -top-4 -left-4 glass-card p-4 rounded-xl backdrop-blur-xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-accent to-accent-light rounded-lg">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm block">Result Oriented</span>
                    <span className="text-xs text-muted-foreground">Expert Teaching</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl backdrop-blur-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-primary to-primary-light rounded-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm block">Small Batches</span>
                    <span className="text-xs text-muted-foreground">Personal Attention</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-0 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
