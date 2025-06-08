
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "100%", label: "Success Rate", icon: Award },
    { number: "500+", label: "Students", icon: Users },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "15:1", label: "Student-Teacher Ratio", icon: CheckCircle }
  ];

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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              About Rise Up Academy
            </Badge>
            
            <h2 className="text-4xl font-bold text-navy mb-6">
              Empowering Students to{" "}
              <span className="text-primary">Rise Up</span> and Succeed
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Karachi at Federal B Area, Rise Up Academy is dedicated 
              to providing quality education that transforms students' academic journeys. Our 
              comprehensive approach combines experienced faculty, modern teaching methods, 
              and individual attention to ensure every student reaches their full potential.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((stat, index) => (
                <Card key={index} className="text-center border-primary/20">
                  <CardContent className="pt-6">
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-navy">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400" 
                alt="Students learning at Rise Up Academy" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Overlay Card */}
              <Card className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-navy">New Batches Starting Soon</h3>
                      <p className="text-sm text-muted-foreground">25% OFF for first batch students</p>
                    </div>
                    <Badge className="bg-accent text-accent-foreground">
                      Limited Time
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
