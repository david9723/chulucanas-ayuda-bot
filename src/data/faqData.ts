export interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
}

export const faqData: FAQ[] = [
  {
    id: "horarios",
    question: "¿Cuáles son los horarios de atención?",
    answer: "Nuestros horarios de atención son:\n\n📅 Lunes a Viernes: 8:00 AM - 4:00 PM\n📅 Sábados: 8:00 AM - 12:00 PM\n🚫 Domingos y feriados: Cerrado\n\n⚠️ La atención al público termina 30 minutos antes del cierre.",
    keywords: ["horarios", "atencion", "hora", "cuando", "abierto", "cerrado", "horario"]
  },
  {
    id: "pagos-impuestos",
    question: "¿Cómo puedo pagar mis impuestos municipales?",
    answer: "Puede pagar sus impuestos de las siguientes maneras:\n\n💳 **Presencial:**\n• En ventanilla de la municipalidad\n• Banco de la Nación\n• Agente bancario autorizado\n\n💻 **Virtual:**\n• Página web de la municipalidad\n• App móvil (próximamente)\n• Banca por internet\n\n📋 **Documentos necesarios:**\n• DNI del contribuyente\n• Recibo de pago anterior\n• Código de contribuyente",
    keywords: ["pago", "impuesto", "tributo", "como pagar", "donde pagar", "predial", "arbitrios"]
  },
  {
    id: "licencia-funcionamiento",
    question: "¿Qué necesito para obtener una licencia de funcionamiento?",
    answer: "**Requisitos para Licencia de Funcionamiento:**\n\n📋 **Documentos requeridos:**\n• Solicitud con carácter de declaración jurada\n• Copia de DNI del representante legal\n• Copia de RUC\n• Copia de título de propiedad o contrato de alquiler\n• Copia de autorización sectorial (si aplica)\n\n💰 **Costos:**\n• Hasta 100 m²: S/ 120.00\n• De 101 a 500 m²: S/ 180.00\n• Más de 500 m²: S/ 250.00\n\n⏱️ **Tiempo de tramitación:** 15 días hábiles",
    keywords: ["licencia", "funcionamiento", "negocio", "empresa", "comercio", "requisitos", "documentos"]
  },
  {
    id: "certificado-domicilio",
    question: "¿Cómo obtengo un certificado de domicilio?",
    answer: "**Certificado de Domicilio:**\n\n📋 **Requisitos:**\n• Solicitud simple dirigida al alcalde\n• Copia de DNI\n• Recibo de agua, luz o teléfono (último mes)\n• Declaración jurada de domicilio\n\n💰 **Costo:** S/ 15.00\n\n⏱️ **Tiempo:** 3 días hábiles\n\n📍 **Validez:** 60 días calendario\n\n✅ **Se entrega:** Original y copia certificada",
    keywords: ["certificado", "domicilio", "residencia", "constancia", "vivir", "direccion"]
  },
  {
    id: "licencia-construccion",
    question: "¿Qué documentos necesito para una licencia de construcción?",
    answer: "**Licencia de Construcción:**\n\n📐 **Para construcciones hasta 120 m²:**\n• Solicitud con plano de ubicación\n• Copia de DNI del propietario\n• Copia de título de propiedad\n• Memoria descriptiva\n• Plano de arquitectura (3 copias)\n\n🏗️ **Para construcciones mayores:**\n• Documentos anteriores +\n• Planos de estructuras\n• Planos de instalaciones sanitarias\n• Planos de instalaciones eléctricas\n• Estudio de mecánica de suelos\n\n💰 **Costo:** Según área a construir\n⏱️ **Tiempo:** 30 días hábiles",
    keywords: ["construccion", "edificar", "obra", "planos", "licencia", "construir", "edificacion"]
  },
  {
    id: "ubicacion-municipalidad",
    question: "¿Dónde está ubicada la municipalidad?",
    answer: "**Ubicación de la Municipalidad:**\n\n📍 **Dirección:**\nPlaza de Armas s/n\nChulucanas, Morropón, Piura\n\n🚗 **Referencias:**\n• Frente a la Plaza de Armas principal\n• A 2 cuadras del mercado central\n• Cerca de la iglesia matriz\n\n📞 **Contacto:**\n• Teléfono: (073) 123-456\n• Central: (073) 123-457\n\n🚌 **Transporte público:**\n• Todas las líneas que van al centro\n• Paradero: Plaza de Armas",
    keywords: ["ubicacion", "direccion", "donde", "como llegar", "plaza", "armas", "chulucanas"]
  },
  {
    id: "contacto-funcionarios",
    question: "¿Cómo puedo contactar con un funcionario específico?",
    answer: "**Contacto con Funcionarios:**\n\n👥 **Principales contactos:**\n\n🏛️ **Alcaldía:**\n• Teléfono: (073) 123-456 Anexo 101\n• Email: alcaldia@munichulucanas.gob.pe\n\n💼 **Gerencia Municipal:**\n• Teléfono: (073) 123-456 Anexo 102\n• Email: gerencia@munichulucanas.gob.pe\n\n🏢 **Administración Tributaria:**\n• Teléfono: (073) 123-456 Anexo 103\n• Email: tributos@munichulucanas.gob.pe\n\n📋 **Mesa de Partes:**\n• Teléfono: (073) 123-456 Anexo 100\n• Email: mesadepartes@munichulucanas.gob.pe\n\n⏰ **Horario de llamadas:** 8:00 AM - 4:00 PM",
    keywords: ["contacto", "funcionario", "telefono", "email", "alcalde", "gerente", "comunicar"]
  }
];

export const getResponseByKeywords = (userMessage: string): FAQ | null => {
  const message = userMessage.toLowerCase();
  
  for (const faq of faqData) {
    for (const keyword of faq.keywords) {
      if (message.includes(keyword)) {
        return faq;
      }
    }
  }
  
  return null;
};

export const getGreetingResponse = (): string => {
  return "¡Hola! 👋 Soy el asistente virtual de la Municipalidad Provincial de Morropón - Chulucanas.\n\nEstoy aquí para ayudarte con:\n• Información sobre horarios y trámites\n• Pagos de impuestos\n• Licencias y certificados\n• Contacto con funcionarios\n• Registro de solicitudes\n\n¿En qué puedo ayudarte hoy?";
};

export const getDefaultResponse = (): string => {
  return "Lo siento, no entiendo tu consulta. 😅\n\nPuedes usar los botones de abajo para consultas frecuentes, o si necesitas ayuda específica, puedes:\n\n📞 Llamarnos: (073) 123-456\n📧 Escribirnos: consultas@munichulucanas.gob.pe\n🏛️ Visitarnos: Plaza de Armas s/n, Chulucanas\n\n¿Te gustaría registrar una solicitud formal?";
};