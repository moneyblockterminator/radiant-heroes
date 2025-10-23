import { Button } from "@/components/ui/button";
import { Play, Volume2, Maximize } from "lucide-react";
import hero1Bg from "@/assets/hero1-bg.jpg";

const Hero9 = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Смотрите демо</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Увидьте платформу
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                в действии
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              3-минутный обзор возможностей, которые изменят ваш подход к работе
            </p>
          </div>

          <div className="relative group animate-scale-in">
            <div className="absolute -inset-1 bg-gradient-primary opacity-30 blur-2xl group-hover:opacity-50 transition-opacity rounded-3xl" />
            
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
              <img 
                src={hero1Bg}
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              <button className="absolute inset-0 flex items-center justify-center group/play">
                <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button size="sm" variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                  <div className="text-sm text-white font-medium">0:00 / 3:24</div>
                </div>
                
                <Button size="sm" variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {[
              { number: "01", title: "Обзор функций", desc: "Основные возможности платформы" },
              { number: "02", title: "Реальные примеры", desc: "Кейсы наших клиентов" },
              { number: "03", title: "Интеграции", desc: "Подключение сервисов" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold text-primary/20 mb-2">{item.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="xl" variant="hero">
              Начать бесплатный тест
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero9;
