import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import hero2Img from "@/assets/hero2-img.jpg";

const Hero2 = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
              <span className="text-sm font-semibold text-secondary">⚡ Быстрый старт</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Развивайте бизнес{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                с нами
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Автоматизируйте процессы, увеличивайте продажи и масштабируйте свой бизнес с помощью нашей инновационной платформы
            </p>
            
            <ul className="space-y-4">
              {[
                "Интеграция с любыми сервисами",
                "Аналитика в реальном времени",
                "Защита корпоративного уровня",
                "Автоматические обновления"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="gradient" className="group">
                Попробовать сейчас
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <img 
              src={hero2Img} 
              alt="Team collaboration" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
