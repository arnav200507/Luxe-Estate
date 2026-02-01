import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-tight">
                <span className="text-foreground">LUXE</span>
                <span className="text-primary">ESTATE</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover exceptional properties that redefine luxury living. Your dream home awaits.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Properties", path: "/properties" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Property Sales", "Property Management", "Investment Advisory", "Interior Design"].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Luxury Avenue, Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (310) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">hello@luxeestate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="luxury-divider mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 LuxeEstate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
