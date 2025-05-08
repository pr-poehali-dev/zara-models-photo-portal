
// Дата и время объявления результатов
export const RESULTS_ANNOUNCEMENT_DATE = new Date('2025-08-23T15:00:00+03:00');

// Функция для проверки, прошла ли дата объявления
export const isAfterAnnouncementDate = () => {
  return new Date() > RESULTS_ANNOUNCEMENT_DATE;
};
