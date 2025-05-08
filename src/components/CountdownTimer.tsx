
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };
    
    // Начальное вычисление
    setTimeLeft(calculateTimeLeft());
    
    // Обновляем таймер каждую секунду
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Очистка интервала
    return () => clearInterval(timer);
  }, [targetDate]);
  
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      {isExpired ? (
        <Card className="bg-model-primary/10 border-model-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-model-accent mb-2">
              Результаты конкурса опубликованы!
            </h3>
            <p className="text-muted-foreground">
              Проверьте свое имя в списке победителей ниже
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            До объявления результатов осталось:
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col">
              <div className="bg-model-primary text-white text-2xl md:text-4xl font-bold rounded-lg p-4 md:p-6">
                {formatNumber(timeLeft.days)}
              </div>
              <span className="mt-2 text-sm md:text-base text-muted-foreground">Дней</span>
            </div>
            <div className="flex flex-col">
              <div className="bg-model-primary text-white text-2xl md:text-4xl font-bold rounded-lg p-4 md:p-6">
                {formatNumber(timeLeft.hours)}
              </div>
              <span className="mt-2 text-sm md:text-base text-muted-foreground">Часов</span>
            </div>
            <div className="flex flex-col">
              <div className="bg-model-primary text-white text-2xl md:text-4xl font-bold rounded-lg p-4 md:p-6">
                {formatNumber(timeLeft.minutes)}
              </div>
              <span className="mt-2 text-sm md:text-base text-muted-foreground">Минут</span>
            </div>
            <div className="flex flex-col">
              <div className="bg-model-primary text-white text-2xl md:text-4xl font-bold rounded-lg p-4 md:p-6">
                {formatNumber(timeLeft.seconds)}
              </div>
              <span className="mt-2 text-sm md:text-base text-muted-foreground">Секунд</span>
            </div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Результаты будут опубликованы {targetDate.toLocaleDateString()} в {targetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} по московскому времени
          </p>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
