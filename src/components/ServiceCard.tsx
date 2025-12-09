import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: string; // Mantemos a prop, mas usaremos para delay inline
}

const ServiceCard = ({ icon: Icon, title, description, delay }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando o elemento entra na tela (isIntersecting)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta para animar apenas uma vez
        }
      },
      {
        threshold: 0.1, // Dispara quando 10% do elemento estiver visível
        rootMargin: "50px", // Margem para carregar um pouco antes
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Extrair o número do delay string (ex: "delay-100" -> 100) para usar no style
  const delayMs = delay ? parseInt(delay.replace('delay-', '')) : 0;

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        h-full
      `}
    >
      <Card className="group h-full hover:shadow-lg transition-shadow duration-300 border-none shadow-md bg-card">
        <CardHeader>
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <CardTitle className="text-xl font-heading font-bold text-card-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;