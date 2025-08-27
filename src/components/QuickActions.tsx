import { Button } from "@/components/ui/button";
import { Clock, FileText, CreditCard, MapPin, Phone, User } from "lucide-react";

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

const quickActions = [
  {
    id: "horarios",
    label: "Horarios de Atención",
    icon: Clock,
    color: "primary"
  },
  {
    id: "pagos",
    label: "Pagos e Impuestos",
    icon: CreditCard,
    color: "secondary"
  },
  {
    id: "tramites",
    label: "Trámites",
    icon: FileText,
    color: "primary"
  },
  {
    id: "ubicacion",
    label: "Ubicación",
    icon: MapPin,
    color: "secondary"
  },
  {
    id: "contacto",
    label: "Contacto",
    icon: Phone,
    color: "primary"
  },
  {
    id: "solicitud",
    label: "Nueva Solicitud",
    icon: User,
    color: "secondary"
  }
];

export const QuickActions = ({ onActionClick }: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 p-4 bg-muted/50 rounded-lg">
      <h3 className="col-span-2 text-sm font-semibold text-foreground mb-2">
        ¿En qué te puedo ayudar?
      </h3>
      {quickActions.map((action) => {
        const Icon = action.icon;
        return (
          <Button
            key={action.id}
            variant={action.color === "primary" ? "default" : "secondary"}
            size="sm"
            onClick={() => onActionClick(action.id)}
            className="h-auto py-3 px-3 flex flex-col gap-1 text-xs"
          >
            <Icon className="w-4 h-4" />
            <span className="text-center leading-tight">{action.label}</span>
          </Button>
        );
      })}
    </div>
  );
};