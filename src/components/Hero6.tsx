import { Button } from "@/components/ui/button";
import { Zap, Shield, Rocket } from "lucide-react";
import hero6Img from "@/assets/hero6-img.jpg";

const Hero6 = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 min-h-screen">
          <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 p-12 animate-slide-in-left">
            <div className="space-y-8 max-w-xl">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                <span className="text-sm font-semibold text-primary">Версия 2.0</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Платформа следующего поколения
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Объединяем мощность, безопасность и скорость в одном решении для вашего бизнеса
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Молниеносная скорость", desc: "Загрузка за миллисекунды" },
                  { icon: Shield, title: "Максимальная защита", desc: "Шифрование банковского уровня" },
                  { icon: Rocket, title: "Легкое масштабирование", desc: "От стартапа до энтерпрайза" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button size="xl" variant="hero" className="w-full md:w-auto">
                Начать работу
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-12 animate-slide-in-right">
            <div className="relative max-w-lg w-full">
              <div className="absolute -inset-4 bg-gradient-accent opacity-30 blur-3xl rounded-3xl animate-pulse-glow" />
              <img 
                src={hero6Img} 
                alt="Platform dashboard" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero6;
