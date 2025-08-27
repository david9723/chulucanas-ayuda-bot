import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface SolicitudFormProps {
  onClose: () => void;
}

export const SolicitudForm = ({ onClose }: SolicitudFormProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    telefono: "",
    email: "",
    tipoSolicitud: "",
    descripcion: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.dni || !formData.tipoSolicitud || !formData.descripcion) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos obligatorios",
        variant: "destructive"
      });
      return;
    }

    // Simular envío
    toast({
      title: "Solicitud Enviada",
      description: `Su solicitud ha sido registrada. Número de seguimiento: SOL-${Date.now().toString().slice(-6)}`,
    });
    
    onClose();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-primary">Nueva Solicitud</CardTitle>
        <CardDescription>
          Complete el formulario para registrar su solicitud
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre Completo *</Label>
            <Input
              id="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              placeholder="Ingrese su nombre completo"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dni">DNI *</Label>
            <Input
              id="dni"
              value={formData.dni}
              onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
              placeholder="12345678"
              pattern="[0-9]{8}"
              maxLength={8}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono</Label>
            <Input
              id="telefono"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              placeholder="987654321"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tipoSolicitud">Tipo de Solicitud *</Label>
            <Select value={formData.tipoSolicitud} onValueChange={(value) => setFormData({ ...formData, tipoSolicitud: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione el tipo de solicitud" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="licencia-funcionamiento">Licencia de Funcionamiento</SelectItem>
                <SelectItem value="certificado-domicilio">Certificado de Domicilio</SelectItem>
                <SelectItem value="licencia-construccion">Licencia de Construcción</SelectItem>
                <SelectItem value="reclamo">Reclamo</SelectItem>
                <SelectItem value="sugerencia">Sugerencia</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción *</Label>
            <Textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              placeholder="Describa detalladamente su solicitud..."
              rows={4}
              required
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Enviar Solicitud
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};