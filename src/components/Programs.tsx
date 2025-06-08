
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Target } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      grade: "IX",
      title: "Class 9",
      description: "Foundation building with comprehensive curriculum coverage",
      color: "bg-primary"
    },
    {
      grade: "X",
      title: "Class 10", 
      description: "Board exam preparation with focused learning approach",
      color: "bg-navy"
    },
    {
      grade: "XI",
      title: "Class 11",
      description: "Pre-engineering and pre-medical track specialization",
      color: "bg-accent"
    },
    {
      grade: "XII",
      title: "Class 12",
      description: "Final year excellence with university entrance preparation",
      color: "bg-primary"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Result Oriented Faculty",
      description: "Experienced teachers focused on student success"
    },
    {
      icon: Users,
      title: "Small Batches",
      description: "Limited students per class for better attention"
    },
    {
      icon: Target,
      title: "Individual Attention",
      description: "Personalized learning approach for each student"
    },
    {
      icon: Clock,
      title: "Regular Assignments",
      description: "Consistent practice with periodic assessments"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Academic Programs
          </Badge>
          <h2 className="text-4xl font-bold text-navy mb-4">
            Classes For
          </h2>
          <div className="text-6xl md:text-8xl font-black text-navy mb-6">
            IX, X, XI, XII
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive education programs designed to unlock your potential and 
            unleash your success at every academic level.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <Card key={program.grade} className="animate-slide-up border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className={`${program.color} text-white text-4xl font-bold rounded-lg w-16 h-16 flex items-center justify-center mb-4`}>
                  {program.grade}
                </div>
                <CardTitle className="text-xl text-navy">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
