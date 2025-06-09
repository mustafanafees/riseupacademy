
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Result Oriented Faculty",
    "Small Batches",
    "Individual Attention", 
    "Regular Assignments",
    "Periodic Test to give a feel of Exam",
    "Quality Education",
    "Experienced Teachers",
    "Modern Teaching Methods"
  ];

  return (
    <section id="about" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge className="mb-4 lg:mb-6 bg-accent/10 text-accent border-accent/20">
              About Rise Up Academy
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
                Empowering Students to Rise Up
              </span>
              {" "}and{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            
            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
              Located in the heart of Karachi at Federal B Area, Rise Up Academy is dedicated 
              to providing quality education that transforms students' academic journeys. Our 
              comprehensive approach combines experienced faculty, modern teaching methods, 
              and individual attention to ensure every student reaches their full potential.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 lg:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                alt="Students learning at Rise Up Academy" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Overlay Card */}
              <Card className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm lg:text-base">
                        <span className="bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
                          New Batches Starting Soon
                        </span>
                      </h3>
                      <p className="text-xs lg:text-sm text-muted-foreground">25% OFF for first batch students</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-accent to-primary text-accent-foreground text-xs">
                      Limited Time
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Education Images Section */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="relative group overflow-hidden rounded-xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Mathematics class" 
                className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-sm lg:text-base">Mathematics Excellence</h3>
                <p className="text-xs lg:text-sm opacity-90">Problem-solving focused approach</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Science laboratory" 
                className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-sm lg:text-base">Science Laboratory</h3>
                <p className="text-xs lg:text-sm opacity-90">Hands-on experiments & learning</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl animate-fade-in sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Interactive classroom" 
                className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-sm lg:text-base">Interactive Learning</h3>
                <p className="text-xs lg:text-sm opacity-90">Modern teaching methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
