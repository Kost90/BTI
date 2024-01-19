import Calendar from "@/components/calendar/Calendar";
import BookForm from "@/components/forms/bookingeneer/BookForm";
import TextContent from "@/ui/textcontent/bookingeneerpage/TextContent";
import DataBaseApi from "@/api/DataBaseApi";
import styles from "./page.module.css";
import { Metadata } from "next";

export interface dataParams {
  date: string;
  times: number[];
}

export const metadata: Metadata = {
  title: "Технічний паспорт | ГЕСТІЯ-БТІ",
  description: "Виготовлення технічного паспорту на нерухомість",
  metadataBase: new URL('https://hestiyabti.com/services/bookingeneer'),
};

const TechnicalpasportService = async () => {
  const data = await DataBaseApi.getDates();

  return (
    <div className={styles.page_container}>
      <TextContent />
      <Calendar data={data} />
      <BookForm />
    </div>
  );
};

export default TechnicalpasportService;
