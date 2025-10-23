import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Hero4 from "@/components/Hero4";
import Hero5 from "@/components/Hero5";
import Hero6 from "@/components/Hero6";
import Hero7 from "@/components/Hero7";
import Hero8 from "@/components/Hero8";
import Hero9 from "@/components/Hero9";
import Hero10 from "@/components/Hero10";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToHero = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const heroes = [
    { id: 'hero1', name: 'Hero 1', desc: 'Классический центрированный' },
    { id: 'hero2', name: 'Hero 2', desc: 'С изображением справа' },
    { id: 'hero3', name: 'Hero 3', desc: 'Полноэкранный с фоном' },
    { id: 'hero4', name: 'Hero 4', desc: 'С формой email' },
    { id: 'hero5', name: 'Hero 5', desc: 'Минималистичный' },
    { id: 'hero6', name: 'Hero 6', desc: 'Split-screen' },
    { id: 'hero7', name: 'Hero 7', desc: 'С анимированной статистикой' },
    { id: 'hero8', name: 'Hero 8', desc: 'С табами' },
    { id: 'hero9', name: 'Hero 9', desc: 'С видео-плеером' },
    { id: 'hero10', name: 'Hero 10', desc: 'С градиентным фоном' },
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
              <span className="font-bold text-xl text-foreground">Hero Library</span>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            <div className="hidden lg:flex items-center gap-2">
              {heroes.map((hero) => (
                <Button
                  key={hero.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToHero(hero.id)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {hero.name}
                </Button>
              ))}
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-2 animate-fade-in">
              {heroes.map((hero) => (
                <button
                  key={hero.id}
                  onClick={() => scrollToHero(hero.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="font-medium text-foreground">{hero.name}</div>
                  <div className="text-sm text-muted-foreground">{hero.desc}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Sections */}
      <div id="hero1"><Hero1 /></div>
      <div id="hero2"><Hero2 /></div>
      <div id="hero3"><Hero3 /></div>
      <div id="hero4"><Hero4 /></div>
      <div id="hero5"><Hero5 /></div>
      <div id="hero6"><Hero6 /></div>
      <div id="hero7"><Hero7 /></div>
      <div id="hero8"><Hero8 /></div>
      <div id="hero9"><Hero9 /></div>
      <div id="hero10"><Hero10 /></div>

      {/* Scroll Indicator on first hero */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToHero('hero2')}
          className="rounded-full bg-background/80 backdrop-blur-sm border border-border"
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
