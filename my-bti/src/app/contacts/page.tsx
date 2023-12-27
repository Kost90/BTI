import { Container } from "@mui/material";
import Contacts from "@/ui/contacts/Contacts";


const ContactsPage = async () => {
  return (
      <Container
        sx={{
          paddingTop: { xs: "40px", md: "80px" },
          paddingBottom: { xs: "40px", md: "80px" },
        }}
      >
        <Contacts />
      </Container>
  );
};

export default ContactsPage;
