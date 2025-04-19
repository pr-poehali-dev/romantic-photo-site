import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-secondary">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="text-love fill-love h-5 w-5" />
          <span className="text-lg font-medium text-secondary-foreground">Создано с любовью</span>
          <Heart className="text-love fill-love h-5 w-5" />
        </div>
        
        <p className="text-secondary-foreground/70 text-sm">
          Для самой удивительной девушки в моей жизни
        </p>
        
        <div className="mt-6 text-sm text-secondary-foreground/60">
          <p>❤️ Люблю тебя бесконечно ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;