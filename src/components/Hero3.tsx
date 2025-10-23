import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import hero3Bg from "@/assets/hero3-bg.jpg";

const Hero3 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero3Bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight">
            Откройте новый мир
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              возможностей
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Погрузитесь в опыт, который изменит ваше представление о современных технологиях
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button size="xl" variant="hero" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Смотреть видео
            </Button>
            <Button size="xl" variant="outline" className="bg-background/20 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-foreground hover:text-background">
              Узнать подробнее
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-foreground/50" />
      </div>
    </section>
  );
};

export default Hero3;
