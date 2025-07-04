
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, MapPin, Heart, Camera, Car } from "lucide-react";

const Features = () => {
  const facilities = [
    {
      icon: Camera,
      title: "Security Cameras",
      description: "Complete CCTV coverage ensuring a safe learning environment for all students"
    },
    {
      icon: Users,
      title: "Dedicated Girls' Waiting Area", 
      description: "Comfortable and secure waiting space designed specifically for female students"
    },
    {
      icon: Heart,
      title: "Kind & Supportive Staff",
      description: "Our caring faculty and staff are always ready to help students succeed"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Centrally located near famous landmarks with easy access and transportation"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Maintained security protocols and supervised premises for student safety"
    },
    {
      icon: Car,
      title: "Easy Access",
      description: "Convenient location with multiple transportation options and parking availability"
    }
  ];

  const handleVisitCampus = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 lg:mb-6 bg-accent/10 text-accent border-accent/20">
              Our Features & Facilities
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6">
              Quality Education with Excellence
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Rise Up Academy, we are committed to providing quality education in a safe, 
              supportive environment. Our modern facilities and experienced faculty ensure 
              every student receives the attention and resources they need to excel.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Quality Education Focus */}
          <div className="mb-16 lg:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 lg:mb-6">
                  Our Focus on Quality Education
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Rise Up Academy believes that quality education is the foundation of success. 
                  We provide comprehensive learning experiences for classes IX through XII, 
                  combining traditional teaching excellence with modern educational approaches.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our result-oriented faculty focuses on individual student growth, ensuring 
                  that each student receives personalized attention in our small batch sizes. 
                  We maintain high educational standards while creating a nurturing environment 
                  where students can thrive academically and personally.
                </p>
              </div>
              <div className="animate-slide-up">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Quality education at Rise Up Academy" 
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Facilities Grid */}
          <div className="mb-16 lg:mb-20">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                Our Facilities
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Modern amenities and thoughtful design create the perfect learning environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <facility.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-navy text-lg">{facility.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Location Advantages */}
          <div className="text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 lg:mb-6">
                  Prime Location
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
                  Located in the heart of Federal B Area, Karachi, our academy is strategically 
                  positioned near famous landmarks and transportation hubs. This central location 
                  ensures easy accessibility for students from all parts of the city, while 
                  maintaining a secure and conducive learning environment.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={handleVisitCampus}
                >
                  Visit Our Campus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
