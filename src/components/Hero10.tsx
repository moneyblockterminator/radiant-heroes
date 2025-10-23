import { Button } from "@/components/ui/button";
import { Sparkles, Star, Zap } from "lucide-react";

const Hero10 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Star className="w-8 h-8 text-white animate-pulse" />
            <Sparkles className="w-10 h-10 text-white animate-pulse" style={{ animationDelay: '0.3s' }} />
            <Star className="w-8 h-8 text-white animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Будущее начинается
            <br />
            здесь и сейчас
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Революционная платформа, которая меняет правила игры в мире технологий
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-2xl"
            >
              <Zap className="w-5 h-5" />
              Попробовать бесплатно
            </Button>
            <Button 
              size="xl" 
              className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            {[
              { icon: Zap, title: "Мгновенный запуск", desc: "Начните за 60 секунд" },
              { icon: Sparkles, title: "AI-powered", desc: "Умные автоматизации" },
              { icon: Star, title: "24/7 Поддержка", desc: "Всегда на связи" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-10 h-10 text-white mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-12 text-white/80">
            <div className="text-sm">✓ Без кредитной карты</div>
            <div className="w-1 h-1 rounded-full bg-white/50" />
            <div className="text-sm">✓ Отмена в любой момент</div>
            <div className="w-1 h-1 rounded-full bg-white/50" />
            <div className="text-sm">✓ Безопасные платежи</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero10;
