
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Globe, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    studentClass: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
      color: "text-green-600",
      action: () => window.open("https://wa.me/923142013753", "_blank")
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailContent = `
Contact Form Submission - Rise Up Academy

Contact Information:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Student's Current Class: ${formData.studentClass}
- Message: ${formData.message}

Submitted on: ${new Date().toLocaleString()}
      `.trim();

      const subject = encodeURIComponent("Contact Form Submission - Rise Up Academy");
      const body = encodeURIComponent(emailContent);
      const mailtoLink = `mailto:riseupacademykhi@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      toast({
        title: "Message Sent",
        description: "Your email client will open to send the message. Thank you for contacting us!",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        studentClass: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
              Ready to Rise Up?
            </span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today to learn more about our programs and take the first step 
            towards academic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Contact Information
              </span>
            </h3>
            
            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`flex items-start space-x-3 lg:space-x-4 ${info.action ? 'cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors' : ''}`}
                  onClick={info.action}
                >
                  <div className={`${info.color} bg-gray-100 p-2 lg:p-3 rounded-lg`}>
                    <info.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm lg:text-base">
                      <span className="bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
                        {info.title}
                      </span>
                    </h4>
                    <p className="text-muted-foreground text-sm lg:text-base">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offer */}
            <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl">
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Special Admission Offer
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                  25% OFF
                </div>
                <p className="font-semibold mb-2 text-sm lg:text-base">
                  <span className="bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
                    For 1st Batch of Students
                  </span>
                </p>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Limited time offer for new enrollments. Contact us now to secure your spot!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-xl lg:text-2xl">
                <span className="bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
                  Send us a Message
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input 
                  name="email"
                  type="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input 
                  name="studentClass"
                  placeholder="Student's Current Class" 
                  value={formData.studentClass}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  className="w-full p-3 border border-input rounded-md resize-none"
                  rows={4}
                  placeholder="Your Message or Questions"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Or call us directly for immediate assistance
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-12 lg:mt-16 animate-fade-in">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div 
                className="relative h-48 lg:h-64 bg-cover bg-center cursor-pointer group"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)`
                }}
                onClick={() => window.open("https://maps.app.goo.gl/wRk9LJoytTXVc7qn6", "_blank")}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent group-hover:from-navy/70 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <MapPin className="h-10 w-10 lg:h-12 lg:w-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">Visit Our Campus</h3>
                    <p className="text-white/90 text-sm lg:text-base">A-28 Block 16 Federal B Area, Karachi</p>
                    <p className="text-white/70 text-xs lg:text-sm mt-2">Click to view on Google Maps</p>
                  </div>
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
