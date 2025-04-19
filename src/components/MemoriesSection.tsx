import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MemoriesSection = () => {
  const memories = [
    {
      title: "Наша первая встреча",
      description: "Тот солнечный вечер, когда мы познакомились, навсегда останется в моем сердце. Твоя улыбка осветила всё вокруг.",
      images: ["https://cdn.poehali.dev/files/5e74cbd6-0b2b-4643-9f78-cef0dd480281.jpeg", "https://cdn.poehali.dev/files/075f78b6-8618-469e-bc5d-d71545e39f27.jpeg"]
    },
    {
      title: "Когда я признался в чувствах",
      description: "Помнишь, как я предложил тебе встречаться? Я так волновался, но твой ответ сделал меня самым счастливым человеком.",
      images: ["https://cdn.poehali.dev/files/303027bb-3767-42e0-a1e8-4b724460b59d.jpeg", "https://cdn.poehali.dev/files/d0566b99-c2ae-4314-8e17-6889ef0eb1f2.jpeg"]
    },
    {
      title: "Наши поездки на машине",
      description: "Наши спонтанные поездки, когда мы включали музыку и просто наслаждались дорогой и компанией друг друга.",
      images: ["https://cdn.poehali.dev/files/d7112022-ce4f-4a8d-a38e-adbbdc3904aa.jpeg", "https://cdn.poehali.dev/files/5e74cbd6-0b2b-4643-9f78-cef0dd480281.jpeg"]
    },
    {
      title: "Закаты и рассветы",
      description: "Волшебные моменты, когда мы вместе встречали рассветы и провожали закаты, держась за руки и мечтая о будущем.",
      images: ["https://cdn.poehali.dev/files/d0566b99-c2ae-4314-8e17-6889ef0eb1f2.jpeg", "https://cdn.poehali.dev/files/303027bb-3767-42e0-a1e8-4b724460b59d.jpeg"]
    }
  ];

  return (
    <section id="memories" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Наши особенные моменты
        </h2>

        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
            <TabsTrigger value="timeline">Наша история</TabsTrigger>
            <TabsTrigger value="gallery">Галерея</TabsTrigger>
          </TabsList>
          
          <TabsContent value="timeline" className="space-y-8">
            <div className="max-w-3xl mx-auto">
              {memories.map((memory, index) => (
                <div key={index} className="timeline-item">
                  <h3 className="text-xl font-semibold text-love-dark mb-2">{memory.title}</h3>
                  <p className="text-foreground/80 mb-4">{memory.description}</p>
                  <Card className="overflow-hidden photo-frame">
                    <CardContent className="p-0">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={memory.images[0]} 
                          alt={memory.title} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gallery">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {memories.flatMap((memory, memoryIndex) => 
                  memory.images.map((image, imageIndex) => (
                    <CarouselItem key={`${memoryIndex}-${imageIndex}`} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden photo-frame border-love-light">
                          <CardContent className="p-0">
                            <AspectRatio ratio={1}>
                              <img 
                                src={image} 
                                alt={`${memory.title} ${imageIndex + 1}`} 
                                className="object-cover w-full h-full"
                              />
                            </AspectRatio>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <p className="text-white text-sm">{memory.title}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))
                )}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MemoriesSection;