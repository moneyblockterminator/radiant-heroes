import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, CheckCircle2 } from "lucide-react";

const Hero4 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-scale-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-white shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Эксклюзивное предложение</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Получите ранний доступ
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Присоединяйтесь к 10,000+ пользователям, которые уже трансформируют свой бизнес
          </p>
          
          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 border border-border">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="Введите ваш email"
                  className="pl-12 h-14 text-lg bg-background"
                />
              </div>
              <Button size="xl" variant="hero" className="w-full">
                Начать бесплатно
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>14 дней бесплатно</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Без кредитной карты</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Активных пользователей</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">Средняя оценка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
