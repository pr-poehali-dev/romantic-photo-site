import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LoveLetterSection = () => {
  return (
    <section className="py-20 px-4 bg-love-light/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <Heart className="text-love mx-auto text-4xl mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Письмо любви
          </h2>
          <p className="text-foreground/70">От всего сердца для тебя</p>
        </div>
        
        <Card className="love-quote border-love p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-love-light/50 rounded-bl-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-love-light/30 rounded-tr-full -z-10"></div>
          
          <CardContent className="p-0 space-y-6 text-lg">
            <p>
              Моя любимая,
            </p>
            
            <p>
              СПАСИБО тебе за то, что ждёшь меня. Я знаю, что я не идеален, 
              но твоё терпение и поддержка делают меня лучше с каждым днём.
            </p>
            
            <p>
              Спасибо тебе за то, что оказываешь моральную поддержку, когда она нужна.
              Твои слова и забота помогают мне преодолевать любые трудности.
            </p>
            
            <p>
              Каждый день с тобой — это настоящий дар. Наши совместные закаты и рассветы,
              поездки на машине, все те вечера, которые мы провели вместе — эти моменты 
              бесценны для меня.
            </p>
            
            <p>
              Я смотрю на тебя и вижу не только красивые кудряшки и привлекательную фигуру. 
              Я вижу человека с прекрасной душой, который наполняет
              мою жизнь смыслом и радостью.
            </p>
            
            <div className="relative my-8">
              <img 
                src="https://cdn.poehali.dev/files/d7112022-ce4f-4a8d-a38e-adbbdc3904aa.jpeg" 
                alt="Моя любимая" 
                className="rounded-lg mx-auto max-w-xs photo-frame"
              />
            </div>
            
            <p className="text-primary font-semibold text-xl">
              Люблю тебя очень сильно ❤️
            </p>
            
            <p className="text-right">
              Навсегда твой
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoveLetterSection;