import Calendar from "@/components/calendar/Calendar";
import BookForm from "@/components/forms/bookingeneer/BookForm";
import TextContent from "@/ui/textcontent/bookingeneerpage/TextContent";
import DataBaseApi from "@/api/DataBaseApi";
import styles from "./page.module.css";

export interface dataParams {
  date: string;
  times: number[];
}

const TechnicalpasportService = async () => {
const data = await DataBaseApi.getDates();

  return (
    <div className={styles.page_container}>
      <TextContent />
      <Calendar data={data}/>
      <BookForm />
    </div>
  );
};

export default TechnicalpasportService;
