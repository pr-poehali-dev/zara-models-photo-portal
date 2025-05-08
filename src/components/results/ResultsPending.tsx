
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ResultsPending: React.FC = () => {
  return (
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
  );
};

export default ResultsPending;
