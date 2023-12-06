
  // Проверки дней на выходные и прошедшие дни
  export const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  export const isPassdays = (date: Date) => new Date() < date;

  export const isWeekdayAndPassday = (date: Date) => {
    return isWeekday(date) && isPassdays(date);
  };
  // ==========================================