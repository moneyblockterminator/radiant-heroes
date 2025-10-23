import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const Hero8 = () => {
  const products = [
    {
      id: "development",
      icon: Code,
      title: "Разработка",
      description: "Создавайте масштабируемые приложения с современным стеком технологий",
      features: ["React & TypeScript", "API интеграции", "Облачное развертывание", "CI/CD пайплайн"],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "design",
      icon: Palette,
      title: "Дизайн",
      description: "Проектируйте потрясающие пользовательские интерфейсы",
      features: ["Дизайн-система", "UI компоненты", "Прототипирование", "Брендинг"],
      color: "from-pink-500 to-rose-600"
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Мобильные",
      description: "Разрабатывайте нативные мобильные приложения для iOS и Android",
      features: ["React Native", "Push уведомления", "Офлайн режим", "Биометрия"],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "automation",
      icon: Zap,
      title: "Автоматизация",
      description: "Оптимизируйте бизнес-процессы с помощью автоматизации",
      features: ["Workflow Builder", "Интеграции", "Аналитика", "AI ассистент"],
      color: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Все что нужно для{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                роста
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите решение, которое идеально подходит для ваших целей
            </p>
          </div>

          <Tabs defaultValue="development" className="w-full animate-fade-in">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto p-2 gap-2">
              {products.map((product) => (
                <TabsTrigger 
                  key={product.id} 
                  value={product.id}
                  className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white flex items-center gap-2 py-3"
                >
                  <product.icon className="w-4 h-4" />
                  {product.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {products.map((product) => (
              <TabsContent key={product.id} value={product.id} className="mt-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color}`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-4xl font-bold text-foreground">
                      {product.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" variant="hero">
                        Начать сейчас
                      </Button>
                      <Button size="lg" variant="hero-outline">
                        Узнать больше
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {product.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="p-6 rounded-xl bg-gradient-to-r from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-lg font-medium text-foreground">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Hero8;
