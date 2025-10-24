
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import EnrollmentForm from "./EnrollmentForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", anchor: "home" },
    { name: "About", href: "/", anchor: "about" },
    { name: "Programs", href: "/", anchor: "programs" },
    { name: "Features", href: "/features", anchor: null },
    { name: "Contact", href: "/", anchor: "contact" },
  ];

  const handleNavClick = (item: { name: string; href: string; anchor: string | null }) => {
    // If we're on the Features page and clicking a non-Features link, navigate to home page
    if (location.pathname === '/features' && item.anchor) {
      window.location.href = item.href;
      return;
    }
    
    // If we're on the home page and clicking an anchor link, scroll to section
    if (location.pathname === '/' && item.anchor) {
      const element = document.getElementById(item.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/66522418-2d3f-4f95-ad3f-5610e03d8c27.png`}
                alt="Rise Up Academy" 
                className="h-12 w-auto md:h-14"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                item.href.startsWith('/features') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    onClick={(e) => {
                      if (location.pathname === '/' && item.anchor) {
                        e.preventDefault();
                        handleNavClick(item);
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => setIsEnrollmentFormOpen(true)}
              >
                Enroll Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      if (location.pathname === '/' && item.anchor) {
                        e.preventDefault();
                        handleNavClick(item);
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsEnrollmentFormOpen(true);
                    }}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <EnrollmentForm 
        isOpen={isEnrollmentFormOpen} 
        onClose={() => setIsEnrollmentFormOpen(false)} 
      />
    </>
  );
};

export default Header;
