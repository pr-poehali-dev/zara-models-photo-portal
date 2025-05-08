
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      name: "Алина К.",
      category: "Высокая мода"
    },
    {
      image: "https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      name: "Максим С.",
      category: "Коммерческие съемки"
    },
    {
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      name: "Екатерина Л.",
      category: "Подиум"
    },
    {
      image: "https://images.unsplash.com/photo-1502038724286-3750c95a1668?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
      name: "Дмитрий В.",
      category: "Реклама"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">Наши модели</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Успешные истории моделей, сотрудничающих с ZARA MODELS. Ваша фотография может оказаться следующей.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover-scale group">
              <CardContent className="p-0 relative">
                <AspectRatio ratio={3/4}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
