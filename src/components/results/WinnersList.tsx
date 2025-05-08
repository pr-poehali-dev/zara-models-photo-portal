
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

// Данные о победителях
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

const WinnersList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Фильтрация победителей по поисковому запросу
  const filteredWinners = winners.filter(winner => 
    winner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    winner.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    winner.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
              <WinnerCard key={winner.id} winner={winner} />
            ))
          ) : (
            <div className="col-span-2 text-center py-8 text-muted-foreground">
              По вашему запросу ничего не найдено
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface WinnerCardProps {
  winner: {
    id: number;
    name: string;
    age: number;
    city: string;
    category: string;
  };
}

const WinnerCard: React.FC<WinnerCardProps> = ({ winner }) => (
  <div 
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
);

export default WinnersList;
