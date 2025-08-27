import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MunicipalHeader = () => {
  return (
    <Card className="p-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground border-0 rounded-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold">MP</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">
              Municipalidad Provincial
            </h1>
            <p className="text-primary-foreground/80 text-sm">
              Morropón - Chulucanas
            </p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
          Asistente Virtual
        </Badge>
      </div>
      
      <div className="mt-3 pt-3 border-t border-primary-foreground/20">
        <p className="text-sm text-primary-foreground/90">
          💬 Servicio de atención ciudadana 24/7
        </p>
      </div>
    </Card>
  );
};