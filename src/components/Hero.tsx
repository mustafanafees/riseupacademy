
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              🎓 Admission Open - 25% OFF for 1st Batch
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight mb-6">
              Unlock Your Potential,{" "}
              <span className="text-primary">Unleash Your Success</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Rise Up Academy offers comprehensive education for classes IX, X, XI, and XII 
              with result-oriented faculty, small batches, and individual attention to help 
              you achieve academic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">25%</div>
                <div className="text-sm text-muted-foreground">Discount</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">Classes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
              <img 
                src="/lovable-uploads/2ce5bc38-03f6-4038-9662-633ba35b3beb.png" 
                alt="Rise Up Academy - Educational Excellence" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <span className="font-semibold text-sm">Result Oriented</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-sm">Small Batches</span>
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
