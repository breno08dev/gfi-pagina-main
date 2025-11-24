import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // Certifique-se que a imagem existe

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "Sobre Nós" },
    { path: "/servicos", label: "Serviços" },
    { path: "/portfolio", label: "Portfólio" },
    { path: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border/10 ${
        isScrolled ? "shadow-elegant" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Aumentei a altura do container para h-28 (112px) para acomodar a logo maior */}
        <div className="flex items-center justify-between h-28">
          {/* Logo isolada e maior */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="GFI Soluções Metálicas" 
              // Aumentei a altura da logo para h-20 (80px)
              className="h-32 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link.path)
                    ? "text-secondary"
                    : "text-foreground hover:text-secondary"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                )}
              </Link>
            ))}
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-background">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors px-4 py-2 rounded-md ${
                    isActive(link.path)
                      ? "bg-secondary/10 text-secondary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4">
                <Button
                  asChild
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                >
                  <Link
                    to="/contato"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;