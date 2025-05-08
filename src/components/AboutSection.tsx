
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const instructorBenefits = [
    {
      icon: "Award",
      title: "Профессиональный опыт",
      description: "15+ лет в модельном бизнесе и сотрудничество с ведущими агентствами мира"
    },
    {
      icon: "GraduationCap",
      title: "Авторская методика",
      description: "Уникальный подход к обучению, сочетающий классические и современные техники"
    },
    {
      icon: "Globe",
      title: "Международное признание",
      description: "Работа с моделями, добившимися успеха на показах Милана, Парижа и Нью-Йорка"
    },
    {
      icon: "Star",
      title: "Индивидуальный подход",
      description: "Внимание к каждому ученику и развитие его уникальных качеств"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 text-model-accent">
              Обучение у лучших профессионалов индустрии
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Маккайда Алла — известный преподаватель и наставник в мире моды, чьи ученики успешно
              работают с ведущими брендами по всему миру. Её авторский курс обучения сочетает в себе 
              классические техники подиумного шага, фотопозирования и актёрского мастерства с современными
              тенденциями модельной индустрии.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Победители конкурса получат уникальную возможность пройти бесплатное обучение под её
              руководством и сделать первые шаги к успешной карьере в модельном бизнесе.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {instructorBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mt-1 p-2 rounded-full bg-model-primary/10 text-model-primary">
                    <Icon name={benefit.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-full">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80" 
                alt="Маккайда Алла"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <Card className="absolute -bottom-10 -left-10 max-w-sm animate-fade-in-up animate-delay-300 hidden md:block">
              <CardContent className="p-6 flex gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-model-primary shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                    alt="Ученица Маккайды Аллы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="italic text-sm text-muted-foreground">
                    "Обучение у Маккайды Аллы изменило мою жизнь. За несколько месяцев я приобрела навыки,
                    которые помогли мне подписать контракт с международным агентством."
                  </p>
                  <p className="text-sm font-medium mt-2">Анна К., выпускница 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
