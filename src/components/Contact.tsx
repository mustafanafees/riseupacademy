
import { Badge } from "@/components/ui/badge";
import ContactInfo from "@/components/ContactInfo";
import SpecialOffer from "@/components/SpecialOffer";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";

const Contact = () => {
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
          <div>
            <ContactInfo />
            <SpecialOffer />
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map Section */}
        <MapSection />
      </div>
    </section>
  );
};

export default Contact;
