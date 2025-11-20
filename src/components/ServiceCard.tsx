import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: string;
}

const ServiceCard = ({ icon: Icon, title, description, delay = "" }: ServiceCardProps) => {
  return (
    <Card 
      className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-up ${delay}`}
    >
      <CardContent className="p-6 space-y-4">
        <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
          <Icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
        </div>
        <h3 className="font-heading font-bold text-xl text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
