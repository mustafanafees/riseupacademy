
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DarkGradientSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "95%+",
      subtitle: "Success Rate",
      description: "Board exam success with distinction"
    },
    {
      icon: Users,
      title: "500+",
      subtitle: "Students",
      description: "Graduated with excellence"
    },
    {
      icon: BookOpen,
      title: "4",
      subtitle: "Grade Levels",
      description: "Classes IX, X, XI, XII"
    },
    {
      icon: Target,
      title: "100%",
      subtitle: "Dedicated",
      description: "Individual attention guaranteed"
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-primary/80" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge className="mb-4 lg:mb-6 bg-accent/20 text-accent border-accent/30">
              Excellence in Education
            </Badge>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              Empowering Pakistani Students to{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Rise Up
              </span>
            </h2>
            
            <p className="text-lg text-white/90 mb-6 lg:mb-8 leading-relaxed">
              At Rise Up Academy, we believe every Pakistani student has the potential for greatness. 
              Our proven methodology, experienced faculty, and personalized approach ensure students 
              from grades IX-XII achieve their academic dreams and secure their future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/features">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Discover Our Method
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Watch Success Stories
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <achievement.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{achievement.title}</div>
                    <div className="text-accent text-sm font-semibold mb-1">{achievement.subtitle}</div>
                    <div className="text-white/70 text-xs">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="animate-slide-up">
            <div className="relative">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-4 lg:p-6 backdrop-blur-sm border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pakistani students celebrating academic success at Rise Up Academy" 
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              {/* Floating Success Card */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent to-primary rounded-lg shadow-xl p-4 animate-pulse">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">A+ Results</div>
                  <div className="text-sm opacity-90">Board Exams 2024</div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg p-3 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Trophy className="h-6 w-6 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkGradientSection;
