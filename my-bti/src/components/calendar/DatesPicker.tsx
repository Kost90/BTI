"use client";
import { memo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isWeekdayAndPassday } from "./helpers";
import styles from './Calendar.module.css'

interface DatesPickerProps {
  currentDate:string;
  onChange: (data: Date) => void;
}

const DatesPicker = memo(({ onChange,currentDate }: DatesPickerProps) => {
  return (
    <div className={styles.container_date}>
    <h4>Оберіть дату виїзду:</h4>
    <DatePicker
      filterDate={isWeekdayAndPassday}
      onChange={onChange}
      dateFormat={"dd.MM.yyyy"}
      timeIntervals={120}
      placeholderText={currentDate === ''?'Оберіть дату':currentDate}
      className="border rounded-md border-slate-600 p-2 focus:outline-none focus:border-green-400 resize-none"
    />
    </div>
  );
});

DatesPicker.displayName = 'DatesPicker';

export default DatesPicker;

