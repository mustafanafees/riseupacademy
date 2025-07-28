
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
    <section id="about" className="section-padding">
      <div className="container-modern">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-scale space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-accent/20 to-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                About Rise Up Academy
              </Badge>
              
              <h2 className="text-gradient-primary text-balance">
                Empowering Students to Rise Up and Succeed
              </h2>
              
              <p className="text-large text-muted-foreground leading-relaxed text-pretty">
                Located in the heart of Karachi at Federal B Area, Rise Up Academy is dedicated 
                to providing quality education that transforms students' academic journeys. Our 
                comprehensive approach combines experienced faculty, modern teaching methods, 
                and individual attention to ensure every student reaches their full potential.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-card-secondary/50 hover:bg-card-hover transition-all duration-300 animate-fade-in group" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-1.5 bg-gradient-to-r from-primary to-primary-light rounded-lg group-hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                  alt="Students learning at Rise Up Academy" 
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                />
                
                {/* Modern Glass Card */}
                <Card className="absolute bottom-6 left-6 right-6 glass-card border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="font-bold text-base text-gradient-primary">
                          New Batches Starting Soon
                        </h3>
                        <p className="text-sm text-muted-foreground">25% OFF for first batch students</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-accent to-accent-light text-white border-0 animate-pulse-glow">
                        Limited Time
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Features Showcase */}
        <div className="mt-20 lg:mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                title: "Mathematics Excellence",
                description: "Problem-solving focused approach",
                gradient: "from-primary to-primary-light"
              },
              {
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                title: "Science Laboratory",
                description: "Hands-on experiments & learning",
                gradient: "from-accent to-accent-light"
              },
              {
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                title: "Interactive Learning",
                description: "Modern teaching methods",
                gradient: "from-navy to-navy-light"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-2xl hover-lift animate-fade-in-scale cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/90 mb-4">{item.description}</p>
                      <div className="w-12 h-1 bg-white/60 rounded-full group-hover:w-16 transition-all duration-300" />
                    </div>
                  </div>
                  
                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
