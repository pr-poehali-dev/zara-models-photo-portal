
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Данные о расписании
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

const CourseSchedule: React.FC = () => {
  return (
    <Card className="border border-model-primary/20">
      <CardHeader>
        <CardTitle className="text-xl text-center">Расписание занятий с Маккайдой Аллой</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative pl-8 space-y-6">
          {schedule.map((item) => (
            <ScheduleItem key={item.id} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface ScheduleItemProps {
  item: {
    id: number;
    date: string;
    time: string;
    title: string;
    description: string;
  };
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ item }) => (
  <div className="timeline-item relative">
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
);

export default CourseSchedule;
