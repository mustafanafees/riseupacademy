
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
    { name: "Home", href: "/#home", anchor: "home" },
    { name: "About", href: "/#about", anchor: "about" },
    { name: "Programs", href: "/#programs", anchor: "programs" },
    { name: "Features", href: "/features", anchor: null },
    { name: "Contact", href: "/#contact", anchor: "contact" },
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
      <header className="fixed top-0 w-full bg-white/80 dark:bg-background/80 backdrop-blur-xl border-b border-border/50 z-50 transition-all duration-300">
        <div className="container-modern">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/66522418-2d3f-4f95-ad3f-5610e03d8c27.png" 
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
                variant="accent"
                size="default"
                className="group"
                onClick={() => setIsEnrollmentFormOpen(true)}
              >
                Enroll Now
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">✨</span>
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
                    variant="accent"
                    size="default"
                    className="w-full"
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
