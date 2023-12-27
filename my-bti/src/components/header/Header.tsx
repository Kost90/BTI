"use client";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import Logo from "../../../public/assets/svg/logo.svg";
import DarkLogo from '../../../public/assets/svg/theme/dark.svg';
import LightLogo from '../../../public/assets/svg/theme/light.svg';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import MenuMobile from "@/components/menumobile/MenuMobile";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addTheme } from "@/lib/features/theme/ThemeSlicer";
import styles from "./header.module.css";

const log_container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px 0",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme:string = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();


  const handelClick = useCallback(() =>{
    if(theme === 'light'){
      dispatch(addTheme('dark'))
    }else{
      dispatch(addTheme('light'))
      console.log('click light')
    }
  },[theme])

  const handelChange = useCallback(() => {
      setIsOpen((prev) => !prev);
  }, [isOpen]);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "inherit", zIndex: 20 }}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={log_container}>
              <Image src={Logo} alt="logo" className={styles.logo} />
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#22C55E", fontWeight: "bold" }}
              >
                ГЕСТІЯ-БТІ
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex", color: "#556987" } }}>
              <Button
                component={Link}
                href="/"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Головна
              </Button>
              <Button
                component={Link}
                href="/aboutus"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Про нас
              </Button>
              <Button
                component={Link}
                href="/services"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Послуги
              </Button>
              <Button
                component={Link}
                href="/contacts"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Контакти
              </Button>
            </Box>
            {isOpen ? (
              <IconButton
                onClick={handelChange}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={handelChange}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <button type="button" onClick={handelClick}>
              <Image src={theme === 'light'?DarkLogo:LightLogo} alt="logo" className={styles.theme_logo}/>
            </button>
          </Toolbar>
        </Container>
      </AppBar>
      <MenuMobile isOpen={isOpen} onClick={handelChange} />
    </>
  );
};

export default Header;
