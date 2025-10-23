import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero5 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-bold text-foreground tracking-tight">
              Минимализм.
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Максимум эффекта.
            </h2>
          </div>
          
          <div className="h-px w-32 bg-gradient-primary animate-scale-in" style={{ animationDelay: '0.3s' }} />
          
          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Простота и элегантность в каждой детали. Создаем решения, которые работают.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button size="xl" variant="hero" className="group">
              Начать
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">250+</div>
              <div className="text-muted-foreground">Проектов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">50+</div>
              <div className="text-muted-foreground">Стран</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">99.9%</div>
              <div className="text-muted-foreground">Аптайм</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
