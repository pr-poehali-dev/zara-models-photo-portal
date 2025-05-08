
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const RequirementsSection = () => {
  const requirements = [
    {
      icon: "Ruler",
      title: "Параметры",
      description: "Рост: от 174 см для женщин, от 185 см для мужчин. Возраст: 15-30 лет."
    },
    {
      icon: "Camera",
      title: "Фотографии",
      description: "Портрет, фото в полный рост и профиль. Минимальная обработка, естественное освещение."
    },
    {
      icon: "FileImage",
      title: "Формат",
      description: "JPEG или PNG, разрешение не менее 3000px по длинной стороне, размер до 10 МБ."
    },
    {
      icon: "Sparkles",
      title: "Внешность",
      description: "Пропорциональное телосложение, здоровая кожа, выразительные черты лица."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-10 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">Требования к кандидатам</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы рассматриваем как опытных моделей, так и новые лица. Ознакомьтесь с нашими стандартами перед отправкой заявки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, index) => (
            <Card key={index} className="border-none shadow-sm hover-scale">
              <CardHeader className="pb-2">
                <div className="bg-accent/50 h-12 w-12 rounded-md flex items-center justify-center mb-4">
                  <Icon name={req.icon} className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">{req.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-foreground/70">
                  {req.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
