
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const UploadSection = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">Отправьте ваши фотографии</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Загрузите фотографии, соответствующие нашим требованиям, и мы свяжемся с вами в ближайшее время.
          </p>
        </div>

        <Card className="border border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle>Загрузить фотографии</CardTitle>
            <CardDescription>
              Перетащите файлы или выберите их с вашего устройства
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center ${
                dragging ? "border-primary bg-primary/5" : "border-border"
              } transition-colors cursor-pointer`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <Icon 
                name="UploadCloud" 
                className="h-12 w-12 text-muted-foreground/60 mx-auto mb-4" 
              />
              <p className="text-sm text-muted-foreground mb-2">
                Перетащите JPEG, PNG файлы или нажмите для выбора
              </p>
              <p className="text-xs text-muted-foreground">
                Максимальный размер файла: 10 МБ
              </p>
              <Input
                id="file-upload"
                type="file"
                accept="image/jpeg,image/png"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {files.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-3">Загруженные файлы</h4>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/40 rounded-md">
                      <div className="flex items-center space-x-3">
                        <Icon name="Image" className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium truncate max-w-[200px] md:max-w-xs">
                            {file.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {(file.size / (1024 * 1024)).toFixed(2)} МБ
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0" 
                        onClick={() => removeFile(index)}
                      >
                        <Icon name="X" className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>

          <Separator />

          <CardFooter className="flex flex-col space-y-4 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="space-y-2">
                <Label htmlFor="name">Имя и фамилия</Label>
                <Input id="name" placeholder="Ваше полное имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Электронная почта</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Возраст</Label>
                <Input id="age" type="number" placeholder="Ваш возраст" />
              </div>
            </div>
            
            <Button className="w-full md:w-auto md:self-end" disabled={files.length === 0}>
              Отправить заявку
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default UploadSection;
