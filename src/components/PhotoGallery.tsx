import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const photos = [
  {
    image: "/placeholder.svg",
    caption: "Ты прекрасна во всем"
  },
  {
    image: "/placeholder.svg",
    caption: "Твоя улыбка освещает мой мир"
  },
  {
    image: "/placeholder.svg",
    caption: "Твои кудряшки сводят меня с ума"
  },
  {
    image: "/placeholder.svg",
    caption: "Твои веснушки — как звезды на небе"
  },
  {
    image: "/placeholder.svg",
    caption: "Ты делаешь мир ярче"
  },
  {
    image: "/placeholder.svg",
    caption: "Люблю каждую частичку тебя"
  }
];

const PhotoGallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Галерея красоты
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group">
              <Card className="overflow-hidden photo-frame transition-all border-love-light">
                <CardContent className="p-0 relative">
                  <AspectRatio ratio={4/5}>
                    <img 
                      src={photo.image} 
                      alt={photo.caption} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-lg font-medium">{photo.caption}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;