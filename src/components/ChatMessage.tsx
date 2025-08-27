import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-3 mb-4", isBot ? "justify-start" : "justify-end")}>
      {isBot && (
        <Avatar className="w-8 h-8 bg-primary">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
            MP
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn("max-w-[80%]", !isBot && "order-first")}>
        <Card className={cn(
          "p-3 shadow-sm border-0",
          isBot 
            ? "bg-muted text-muted-foreground" 
            : "bg-primary text-primary-foreground"
        )}>
          <p className="text-sm leading-relaxed">{message}</p>
        </Card>
        <p className={cn(
          "text-xs text-muted-foreground mt-1",
          isBot ? "text-left" : "text-right"
        )}>
          {timestamp.toLocaleTimeString('es-PE', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
      
      {!isBot && (
        <Avatar className="w-8 h-8 bg-secondary">
          <AvatarFallback className="bg-secondary text-secondary-foreground text-xs font-semibold">
            TÚ
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};