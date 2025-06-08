
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
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Ready to <span className="text-primary">Rise Up</span>?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today to learn more about our programs and take the first step 
            towards academic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl lg:text-2xl font-bold text-navy mb-6 lg:mb-8">Contact Information</h3>
            
            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3 lg:space-x-4">
                  <div className={`${info.color} bg-gray-100 p-2 lg:p-3 rounded-lg`}>
                    <info.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1 text-sm lg:text-base">{info.title}</h4>
                    <p className="text-muted-foreground text-sm lg:text-base">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offer */}
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-accent text-lg lg:text-xl">Special Admission Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">25% OFF</div>
                <p className="text-navy font-semibold mb-2 text-sm lg:text-base">For 1st Batch of Students</p>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Limited time offer for new enrollments. Contact us now to secure your spot!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-xl lg:text-2xl text-navy">Send us a Message</CardTitle>
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
                  className="w-full bg-primary hover:bg-primary/90"
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

        {/* Map Placeholder */}
        <div className="mt-12 lg:mt-16 animate-fade-in">
          <Card>
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 h-48 lg:h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 lg:h-12 lg:w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg lg:text-xl font-semibold text-navy mb-2">Visit Our Campus</h3>
                  <p className="text-muted-foreground text-sm lg:text-base">A-28 Block 16 Federal B Area, Karachi</p>
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
