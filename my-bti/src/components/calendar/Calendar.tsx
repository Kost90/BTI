"use client";
import { useState, useEffect, useCallback } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatesPicker from "./DatesPicker";
import TimePicker from "./TimePicker";
import { addBook } from "@/lib/features/booking/BookingSlicer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addDate,
  addData,
  addTime,
} from "@/lib/features/bookeddates/BookedDatesSlicer";
import styles from "./Calendar.module.css";
import { dataParams } from "@/app/services/bookingeneer/page";

interface CalendarProps {
  data: dataParams[];
}

export default function Calendar({ data }: CalendarProps) {
  const [currentDate, setcurrentDate] = useState<string>("");
  const dates = useAppSelector((state) => state.dates.dates);
  const [time, setTime] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addData(data));
  }, []);

  useEffect(() => {
    if (currentDate) {
      const index = dates.findIndex((item) => item.date === currentDate);
      const object = {
        date: currentDate,
        times: [...time],
      };
      dispatch(addDate(object));
      if (index !== -1) {
        dispatch(addTime({ index, time }));
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
