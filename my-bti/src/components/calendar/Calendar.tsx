"use client";
import { useState, useEffect, useCallback } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatesPicker from "./DatesPicker";
import TimePicker from "./TimePicker";
import { addBook } from "@/lib/features/booking/BookingSlicer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addDate,
  addDates,
  addTime,
} from "@/lib/features/bookeddates/BookedDatesSlicer";
import styles from "./Calendar.module.css";

export default function Calendar() {
  const [currentDate, setcurrentDate] = useState<string>("");
  const dates = useAppSelector((state) => state.dates.dates);
  const [time, setTime] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentDate) {
      const index = dates.findIndex((item) => item.date === currentDate);

      if (index !== -1) {
        dispatch(addTime({ index, time }));
      } else {
        const object = {
          date: currentDate,
          times: [...time],
        };
        console.log(object);
        dispatch(addDate(object));
        console.log(`What back ${dates}`);
      }
    }
  }, [time]);

  useEffect(() => {
    const book = {
      date: currentDate,
      time: time[0],
    };
    dispatch(addBook(book));
  }, [time]);

  const handelAddDate = useCallback((data: Date) => {
    const newDate = data.toISOString().split("T")[0];
    setcurrentDate(newDate);
  }, []);

  const handelAddTime = useCallback((data: Date) => {
    const newHour = data.getHours();
    setTime((prev) => [newHour]);
  }, []);

  return (
    <div className={styles.container_pickers}>
      <DatesPicker onChange={handelAddDate} currentDate={currentDate} />
      {currentDate && (
        <TimePicker
          time={time}
          curentDate={currentDate}
          onChange={handelAddTime}
        />
      )}
    </div>
  );
}
