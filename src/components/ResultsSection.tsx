import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import ResultsPending from "./results/ResultsPending";
import ResultsContent from "./results/ResultsContent";
import {
  RESULTS_ANNOUNCEMENT_DATE,
  isAfterAnnouncementDate,
} from "./results/ResultsConfig";

const ResultsSection: React.FC = () => {
  // Для реальной работы используйте функцию isAfterAnnouncementDate
  // Для тестирования можно использовать useState для ручного переключения
  const [isResultsAvailable, setIsResultsAvailable] = useState(() => {
    return isAfterAnnouncementDate();
  });

  // Для демонстрационных целей (можно удалить в продакшне)
  const toggleDateStatus = () => {
    setIsResultsAvailable(!isResultsAvailable);
  };

  return (
    <section className="py-16 px-6 md:px-10 bg-gradient-to-b from-model-secondary/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-model-accent">
            Результаты конкурса на бесплатное обучение
          </h2>
          <p className="text-muted-foreground">
            Конкурс проводится под руководством известного преподавателя
            модельного искусства Маккайды Аллы. Победители получат возможность
            пройти бесплатный курс обучения и начать карьеру в модельном
            бизнесе.
          </p>
        </div>

        <CountdownTimer targetDate={RESULTS_ANNOUNCEMENT_DATE} />

        {/* Для демо-целей - кнопка переключения статуса даты (скрыта в продакшне) */}
        <div className="hidden">
          <button onClick={toggleDateStatus}>
            {isResultsAvailable
              ? "Показать вид до публикации"
              : "Показать вид после публикации"}
          </button>
        </div>

        {isResultsAvailable ? <ResultsContent /> : <ResultsPending />}
      </div>
    </section>
  );
};

export default ResultsSection;
