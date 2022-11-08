import React from "react";
import { Container } from "./FooterElements";
import { useTheme } from "../../context/settings/Theme/ThemeContext";

function Footer() {
  const darkTheme = useTheme();

  const themeStyles = {
    backgroundImage: darkTheme
      ? "linear-gradient(45deg, #000000 0%, #425B8C"
      : "linear-gradient(45deg, #73466B 0%, #ffffff 100%)", //light
    color: darkTheme ? "#fff" : "#333",
  };

  return (
    <Container style={themeStyles}>
      {/* <span>&copy; ToDo App By Von 2022</span> */}
    </Container>
  );
}

export default Footer;
