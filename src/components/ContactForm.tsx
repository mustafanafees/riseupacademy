
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    studentClass: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
  );
};

export default ContactForm;
