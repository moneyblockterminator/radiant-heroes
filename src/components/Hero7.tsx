import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Globe, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

const Hero7 = () => {
  const stats = [
    { icon: Users, value: 50000, suffix: "+", label: "Активных пользователей", color: "text-primary" },
    { icon: Globe, value: 150, suffix: "+", label: "Стран присутствия", color: "text-secondary" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Рост за год", color: "text-accent" },
    { icon: DollarSign, value: 2.5, suffix: "M+", label: "Обработано средств", color: "text-primary" }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Лидер рынка 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Цифры говорят
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                сами за себя
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к тысячам компаний, которые уже трансформируют свой бизнес с нашей платформой
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} delay={index * 100} />
            ))}
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 animate-fade-in">
            <Button size="xl" variant="hero">
              Начать бесплатно
            </Button>
            <Button size="xl" variant="hero-outline">
              Запланировать демо
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, suffix, label, color, delay }: any) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <div 
      className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className={`w-10 h-10 ${color} mb-4`} />
      <div className="text-4xl font-bold text-foreground mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default Hero7;
