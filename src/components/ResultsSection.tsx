
import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Форматирование даты для таймера
const targetDate = new Date('2025-08-23T15:00:00+03:00');

// Данные о победителях (пример)
const winners = [
  { id: 1, name: "Анна Смирнова", age: 19, city: "Москва", category: "Подиум" },
  { id: 2, name: "Екатерина Иванова", age: 21, city: "Санкт-Петербург", category: "Фотомодель" },
  { id: 3, name: "Мария Петрова", age: 17, city: "Казань", category: "Юниор" },
  { id: 4, name: "Алиса Кузнецова", age: 22, city: "Новосибирск", category: "Подиум" },
  { id: 5, name: "Дарья Соколова", age: 20, city: "Екатеринбург", category: "Фотомодель" },
  { id: 6, name: "Полина Морозова", age: 18, city: "Владивосток", category: "Юниор" },
  { id: 7, name: "Ксения Волкова", age: 23, city: "Сочи", category: "Подиум" },
  { id: 8, name: "Виктория Лебедева", age: 16, city: "Нижний Новгород", category: "Юниор" },
];

// Данные о расписании (пример)
const schedule = [
  { 
    id: 1, 
    date: "01.09.2025", 
    time: "14:00", 
    title: "Вводное занятие", 
    description: "Знакомство с преподавателем и основные принципы работы"
  },
  { 
    id: 2, 
    date: "05.09.2025", 
    time: "14:00", 
    title: "Фотопозирование", 
    description: "Основы позирования перед камерой, работа с ракурсами"
  },
  { 
    id: 3, 
    date: "09.09.2025", 
    time: "14:00", 
    title: "Проходка", 
    description: "Техники подиумного шага, осанка и положение рук"
  },
  { 
    id: 4, 
    date: "13.09.2025", 
    time: "14:00", 
    title: "Работа с лицом", 
    description: "Мимика, эмоции и выразительность взгляда"
  },
  { 
    id: 5, 
    date: "17.09.2025", 
    time: "14:00", 
    title: "Итоговая фотосессия", 
    description: "Практическое занятие с профессиональным фотографом"
  },
];

const ResultsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isNowAfterTargetDate, setIsNowAfterTargetDate] = useState(() => {
    return new Date() > targetDate;
  });

  // Для демонстрационных целей можно переключать между "до" и "после" даты результатов
  const toggleDateStatus = () => {
    setIsNowAfterTargetDate(!isNowAfterTargetDate);
  };

  // Фильтрация победителей по поисковому запросу
  const filteredWinners = winners.filter(winner => 
    winner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    winner.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    winner.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-6 md:px-10 bg-gradient-to-b from-model-secondary/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-model-accent">
            Результаты конкурса на бесплатное обучение
          </h2>
          <p className="text-muted-foreground">
            Конкурс проводится под руководством известного преподавателя модельного искусства Маккайды Аллы.
            Победители получат возможность пройти бесплатный курс обучения и начать карьеру в модельном бизнесе.
          </p>
        </div>

        <CountdownTimer targetDate={targetDate} />

        {/* Для демо-целей - кнопка переключения статуса даты */}
        <div className="hidden">
          <Button onClick={toggleDateStatus} variant="outline" className="mb-8">
            {isNowAfterTargetDate ? "Показать вид до публикации" : "Показать вид после публикации"}
          </Button>
        </div>

        {isNowAfterTargetDate ? (
          <>
            <Tabs defaultValue="winners" className="mb-16">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="winners">Победители</TabsTrigger>
                <TabsTrigger value="schedule">Расписание занятий</TabsTrigger>
              </TabsList>
              
              <TabsContent value="winners" className="animate-fade-in-up">
                <Card className="border border-model-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">Список победителей конкурса</CardTitle>
                    <div className="relative mt-4">
                      <Input
                        type="text"
                        placeholder="Поиск по имени, городу или категории..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                      <Icon name="Search" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredWinners.length > 0 ? (
                        filteredWinners.map(winner => (
                          <div 
                            key={winner.id} 
                            className="p-4 border rounded-md hover:border-model-primary/50 hover:bg-model-secondary/20 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{winner.name}</h4>
                              <span className="text-xs px-2 py-1 bg-model-primary/10 text-model-accent rounded-full">
                                {winner.category}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {winner.age} лет, {winner.city}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-2 text-center py-8 text-muted-foreground">
                          По вашему запросу ничего не найдено
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="schedule" className="animate-fade-in-up">
                <Card className="border border-model-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">Расписание занятий с Маккайдой Аллой</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative pl-8 space-y-6">
                      {schedule.map((item, index) => (
                        <div key={item.id} className="timeline-item relative">
                          <div className="timeline-dot relative pl-4 pb-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div>
                                <h4 className="font-medium text-lg">{item.title}</h4>
                                <p className="text-muted-foreground">{item.description}</p>
                              </div>
                              <div className="mt-2 md:mt-0 md:ml-4 px-3 py-1 bg-model-primary/10 text-model-accent rounded-full text-sm whitespace-nowrap">
                                {item.date} в {item.time}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="text-center">
              <Card className="bg-model-primary/5 border-model-primary/20 max-w-3xl mx-auto">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">Важная информация</h3>
                  <p className="text-muted-foreground mb-4">
                    Первое занятие состоится 1 сентября 2025 года в 14:00 в нашей студии по адресу: Москва, ул. Модельная, д. 15.
                    Всем победителям необходимо подтвердить свое участие до 30 августа 2025 года.
                  </p>
                  <Button size="lg" className="mt-2">
                    <Icon name="Mail" className="mr-2 h-4 w-4" />
                    Подтвердить участие
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <Card className="border border-model-primary/20 max-w-3xl mx-auto animate-fade-in-up">
            <CardContent className="p-6">
              <div className="text-center">
                <Icon name="Lock" className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Результаты пока недоступны</h3>
                <p className="text-muted-foreground mb-4">
                  Список победителей конкурса на бесплатное обучение с преподавателем Маккайдой Аллой 
                  будет опубликован 23 августа 2025 года в 15:00 по московскому времени.
                </p>
                <p className="text-sm text-model-accent">
                  Подпишитесь на наши социальные сети, чтобы не пропустить объявление результатов.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ResultsSection;
