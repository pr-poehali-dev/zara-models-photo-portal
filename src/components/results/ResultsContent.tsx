
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WinnersList from "@/components/results/WinnersList";
import CourseSchedule from "@/components/results/CourseSchedule";
import ResultsAnnouncement from "@/components/results/ResultsAnnouncement";

const ResultsContent: React.FC = () => {
  return (
    <>
      <Tabs defaultValue="winners" className="mb-16">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="winners">Победители</TabsTrigger>
          <TabsTrigger value="schedule">Расписание занятий</TabsTrigger>
        </TabsList>
        
        <TabsContent value="winners" className="animate-fade-in-up">
          <WinnersList />
        </TabsContent>
        
        <TabsContent value="schedule" className="animate-fade-in-up">
          <CourseSchedule />
        </TabsContent>
      </Tabs>
      
      <ResultsAnnouncement />
    </>
  );
};

export default ResultsContent;
