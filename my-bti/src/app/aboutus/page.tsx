import { Container } from '@mui/material'
import styles from './aboutUsPage.module.css'
import AboutUs from '@/ui/aboutus/AboutUs'


const AboutUsPage =async () => {

  return (
        <section className={styles.aboutus_section}>
            <Container  sx={{
              height:'100vh',
              paddingTop: { xs: "40px", md: "80px" },
              paddingBottom: { xs: "40px", md: "80px" },
            }}>
              <AboutUs/>
            </Container>
        </section>
        
  )
}

export default AboutUsPage