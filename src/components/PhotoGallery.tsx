import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const photos = [
  {
    image: "https://cdn.poehali.dev/files/d7112022-ce4f-4a8d-a38e-adbbdc3904aa.jpeg",
    caption: "Ты прекрасна во всем"
  },
  {
    image: "https://cdn.poehali.dev/files/5e74cbd6-0b2b-4643-9f78-cef0dd480281.jpeg",
    caption: "Твоя улыбка освещает мой мир"
  },
  {
    image: "https://cdn.poehali.dev/files/d0566b99-c2ae-4314-8e17-6889ef0eb1f2.jpeg",
    caption: "Твои кудряшки сводят меня с ума"
  },
  {
    image: "https://cdn.poehali.dev/files/303027bb-3767-42e0-a1e8-4b724460b59d.jpeg",
    caption: "Твоя красота неповторима"
  },
  {
    image: "https://cdn.poehali.dev/files/075f78b6-8618-469e-bc5d-d71545e39f27.jpeg",
    caption: "Ты делаешь мир ярче"
  },
  {
    image: "https://cdn.poehali.dev/files/d0566b99-c2ae-4314-8e17-6889ef0eb1f2.jpeg",
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