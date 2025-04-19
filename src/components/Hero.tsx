import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-love-light/50 to-white/30"></div>
      </div>
      
      <Heart className="text-love animate-heartbeat text-6xl mb-8 heart-shadow" />
      
      <h1 className="text-4xl md:text-6xl font-bold text-love-dark mb-6">
        Моя любимая <span className="text-primary">❤️</span>
      </h1>
      
      <p className="text-lg md:text-2xl max-w-2xl text-foreground/80 mb-8">
        Этот сайт создан с любовью для самой удивительной девушки в моей жизни
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a 
          href="#memories" 
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        >
          Наши воспоминания
        </a>
        <a 
          href="#about" 
          className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
        >
          О тебе
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="text-muted-foreground text-sm flex flex-col items-center">
          <span>Прокрути вниз</span>
          <span className="text-primary text-2xl mt-1">↓</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;