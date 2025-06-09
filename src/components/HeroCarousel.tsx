
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const HeroCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const educationImages = [
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Students studying in classroom - Rise Up Academy"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Programming and coding education"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Student using laptop for learning"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Programming workspace with code"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel 
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {educationImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 lg:p-8 overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-2xl shadow-lg object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 lg:left-4" />
        <CarouselNext className="right-2 lg:right-4" />
      </Carousel>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {educationImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              current === index ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
