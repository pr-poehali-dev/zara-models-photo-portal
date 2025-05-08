
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ResultsAnnouncement: React.FC = () => {
  return (
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
  );
};

export default ResultsAnnouncement;
