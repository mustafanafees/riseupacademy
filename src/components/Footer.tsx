
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/e9bd827f-6609-4362-8087-eac3a6a65bb7.png" 
                alt="Rise Up Academy" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-navy-foreground/80 mb-4">
              Unlock Your Potential, Unleash Your Success. Quality education 
              for classes IX, X, XI, XII in Karachi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy-foreground/60 hover:text-accent transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-navy-foreground/60 hover:text-accent transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-navy-foreground/60 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-navy-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-navy-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-navy-foreground/80 hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#contact" className="text-navy-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-navy-foreground/80 hover:text-accent transition-colors">Admissions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <span className="text-sm text-navy-foreground/80">
                  A-28 Block 16 Federal B Area, Karachi
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-accent" />
                <div className="text-sm text-navy-foreground/80">
                  <div>0322 3508480</div>
                  <div>0332 2273193</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 text-accent" />
                <span className="text-sm text-navy-foreground/80">
                  riseupacademykhi@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/20 mt-8 pt-8 text-center">
          <p className="text-navy-foreground/60 text-sm">
            © 2024 Rise Up Academy. All rights reserved. | Empowering students to achieve excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
