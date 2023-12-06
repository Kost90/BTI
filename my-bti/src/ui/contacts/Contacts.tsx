import { Box, Typography } from "@mui/material";
import SideSection from "./Sidesection";
import ContactForm from "../../components/forms/contactForm/ContactForm";
import { title } from "./stylesconstans";

const containerBox = {
  display: "flex",
  flexDirection: { xs: "column-reverse", md: "row" },
  alignItems: "center",
  justifyContent: { xs: "center", md: "space-between" },
  gap: { xs: "20px", md: "0" },
};

function Contacts() {
  return (
    <Box>
      <Typography variant="h4" sx={title}>
        ЗАЛИШИТИ ПОВІДОМЛЕННЯ
      </Typography>
      <Box sx={containerBox}>
        <SideSection />
        <ContactForm />
      </Box>
    </Box>
  );
}

export default Contacts;
