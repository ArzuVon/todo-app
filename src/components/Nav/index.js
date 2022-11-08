import React from "react";
import "../../assets/styles/nav.css";
import "antd/dist/antd.css";

import { Container, ButtonContainer, LogoContainer } from "./NavElements";
import { TbNotes } from "react-icons/tb";
import { Switch } from "antd";
import {
  useTheme,
  useThemeUpdate,
} from "../../context/settings/Theme/ThemeContext";
// them for toggles dark and light mode

function Header() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundImage: darkTheme
    ? "linear-gradient(45deg, #000000 0%, #425B8C"
    : "linear-gradient(45deg, #73466B 0%, #ffffff 100%)", //light
    color: darkTheme ? "#fff" : "#333", //words
  };

  const toggleDark = {
    backgroundColor: "#0B1426",
    color: "black",
  };

  const toggleLight = {
    backgroundColor: "gray",
    color: "black",
  };

  return (
    <Container style={themeStyles}>
      <ButtonContainer>
        {darkTheme ? (
          <Switch
            className="toggle"
            style={toggleDark}
            onClick={toggleTheme}
            checkedChildren="Light"
            unCheckedChildren="Dark"
          />
        ) : (
          <Switch
            className="toggle"
            style={toggleLight}
            onClick={toggleTheme}
            checkedChildren="Light"
            unCheckedChildren="Dark"
          />
        )}
      </ButtonContainer>

      <LogoContainer>
        <span>Your ToDo </span>
      </LogoContainer>
    </Container>
  );
}

export default Header;
