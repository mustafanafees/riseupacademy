
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Globe, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "A-28 Block 16 Federal B Area, Karachi",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "0322 3508480 | 0332 2273193",
      color: "text-accent"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "0314 2013753",
      color: "text-green-600"
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.riseup.academy",
      color: "text-navy"
    },
    {
      icon: Mail,
      title: "Email",
      details: "riseupacademykhi@gmail.com",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold text-navy mb-4">
            Ready to <span className="text-primary">Rise Up</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today to learn more about our programs and take the first step 
            towards academic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-navy mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${info.color} bg-gray-100 p-3 rounded-lg`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offer */}
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-accent">Special Admission Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">25% OFF</div>
                <p className="text-navy font-semibold mb-2">For 1st Batch of Students</p>
                <p className="text-sm text-muted-foreground">
                  Limited time offer for new enrollments. Contact us now to secure your spot!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-navy">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Phone Number" />
              </div>
              <Input placeholder="Email Address" />
              <Input placeholder="Student's Current Class" />
              <textarea
                className="w-full p-3 border border-input rounded-md resize-none"
                rows={4}
                placeholder="Your Message or Questions"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                Or call us directly for immediate assistance
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 animate-fade-in">
          <Card>
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-2">Visit Our Campus</h3>
                  <p className="text-muted-foreground">A-28 Block 16 Federal B Area, Karachi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
