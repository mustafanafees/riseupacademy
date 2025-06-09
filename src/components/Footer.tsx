
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleMessageClick = () => {
    window.open("sms:+923225508480", "_blank");
  };

  return (
    <footer className="bg-navy text-navy-foreground py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/66522418-2d3f-4f95-ad3f-5610e03d8c27.png" 
                alt="Rise Up Academy" 
                className="h-10 w-auto md:h-12 brightness-0 invert"
              />
            </div>
            <p className="text-navy-foreground/80 mb-4 text-sm lg:text-base">
              <span className="bg-gradient-to-r from-navy-foreground to-navy-foreground/80 bg-clip-text text-transparent">
                Unlock Your Potential, Unleash Your Success.
              </span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy-foreground/60 hover:text-accent transition-colors">
                <Globe className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
              <button 
                onClick={handleMessageClick}
                className="text-navy-foreground/60 hover:text-accent transition-colors"
              >
                <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
              <a href="mailto:riseupacademykhi@gmail.com" className="text-navy-foreground/60 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm lg:text-base">
              <span className="bg-gradient-to-r from-navy-foreground to-navy-foreground/80 bg-clip-text text-transparent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/#home" className="text-navy-foreground/80 hover:text-accent transition-colors text-sm lg:text-base">Home</Link></li>
              <li><Link to="/#about" className="text-navy-foreground/80 hover:text-accent transition-colors text-sm lg:text-base">About Us</Link></li>
              <li><Link to="/#programs" className="text-navy-foreground/80 hover:text-accent transition-colors text-sm lg:text-base">Programs</Link></li>
              <li><Link to="/features" className="text-navy-foreground/80 hover:text-accent transition-colors text-sm lg:text-base">Features</Link></li>
              <li><Link to="/#contact" className="text-navy-foreground/80 hover:text-accent transition-colors text-sm lg:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-sm lg:text-base">
              <span className="bg-gradient-to-r from-navy-foreground to-navy-foreground/80 bg-clip-text text-transparent">
                Contact Info
              </span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <span className="text-xs lg:text-sm text-navy-foreground/80">
                  A-28 Block 16 Federal B Area, Karachi
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-accent" />
                <div className="text-xs lg:text-sm text-navy-foreground/80">
                  <div>0322 3508480</div>
                  <div>0332 2273193</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 text-accent" />
                <span className="text-xs lg:text-sm text-navy-foreground/80">
                  riseupacademykhi@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/20 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center">
          <p className="text-navy-foreground/60 text-xs lg:text-sm">
            © 2025 Rise Up Academy. All rights reserved. | Empowering students to achieve excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
