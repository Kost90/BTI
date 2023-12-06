import { Container } from "@mui/material";
import Contacts from "@/ui/contacts/Contacts";
import ThemeContainer from "@/containers/themecontainer/ThemeContainer";

const ContactsPage = async () => {
  return (
    <ThemeContainer>
      <Container
        sx={{
          paddingTop: { xs: "40px", md: "80px" },
          paddingBottom: { xs: "40px", md: "80px" },
        }}
      >
        <Contacts />
      </Container>
    </ThemeContainer>
  );
};

export default ContactsPage;
