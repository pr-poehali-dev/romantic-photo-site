import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          О моей любимой
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="overflow-hidden photo-frame border-love-light">
              <CardContent className="p-0">
                <AspectRatio ratio={3/4}>
                  <img 
                    src="/placeholder.svg" 
                    alt="Моя любимая" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="love-quote">
              <p className="text-lg md:text-xl italic">
                "Она не просто девушка, а целая вселенная, полная чудес и красоты."
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-love-dark mb-2">Её прекрасные черты</h3>
                <p className="text-foreground/80">
                  Милая и хорошая, с красивейшими кудряшками, которые так и хочется перебирать пальцами. 
                  Её лицо украшают очаровательные веснушки, делая её ещё более неповторимой и особенной.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-love-dark mb-2">Привлекательность</h3>
                <p className="text-foreground/80">
                  Безусловно привлекательная фигура, которая заставляет сердце биться чаще. 
                  Именно такой комплекс внешних и внутренних качеств делает её самой 
                  прекрасной девушкой в мире.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-love-dark mb-2">Идеальный рост</h3>
                <p className="text-foreground/80">
                  Не высокая и не низкая – просто идеальная. Такой рост, который 
                  прекрасно дополняет её общий образ и делает её ещё более привлекательной.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;