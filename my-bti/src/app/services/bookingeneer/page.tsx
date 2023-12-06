import Calendar from "@/components/calendar/Calendar";
import BookForm from "@/components/forms/bookingeneer/BookForm";
import TextContent from "@/ui/textcontent/bookingeneerpage/TextContent";
import styles from "./page.module.css";

const TechnicalpasportService = async () => {
  return (
    <div className={styles.page_container}>
      <TextContent />
      <Calendar />
      <BookForm />
    </div>
  );
};

export default TechnicalpasportService;
