import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img 
                src={logo} 
                alt="GFI Soluções Metálicas" 
                className="h-28 w-auto object-contain" 
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Empresa de montagem de estruturas metálicas, caldeiraria e construção civil.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/sobre", label: "Sobre Nós" },
                { path: "/servicos", label: "Serviços" },
                { path: "/portfolio", label: "Portfólio" },
                { path: "/contato", label: "Contato" },
                { path: "/politica-de-privacidade", label: "Política de Privacidade" }, // Novo Link
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-2">
              {[
                "Estruturas Metálicas",
                "Coberturas",
                "Mezaninos",
                "Galpões Industriais",
                "Projetos Especiais",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center md:justify-start space-x-3 text-sm">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-muted-foreground">(16) 99616-6838</div>
                </div>
              </li>
              <li className="flex items-start justify-center md:justify-start space-x-3 text-sm">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:gabriel@gfisolucoes.com.br"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                 gabriel@gfisolucoes.com.br
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Antônio José Bobato, 140 | Sertãozinho/SP
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a
                href="https://www.instagram.com/gfimetalicas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group shadow-sm"
              >
                <Instagram className="w-5 h-5 text-foreground group-hover:text-secondary-foreground" />
              </a>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>© {currentYear} GFI Montagem. Todos os direitos reservados.</p>
            <p className="text-xs mt-1 opacity-80">CNPJ: 59.995.162/0001-50</p>
          </div>
          
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <span>Desenvolvido por</span>
            <a 
              href="http://conectnew.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-secondary hover:underline transition-colors"
            >
              CONECT NEW
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;