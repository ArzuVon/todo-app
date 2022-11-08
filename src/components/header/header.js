import React from "react";
import "../../assets/styles/nav.css";
import "antd/dist/antd.css";

import { Container, ButtonContainer, LogoContainer } from "./NavElements";
import { TbNotes } from "react-icons/tb";
import { Switch } from "antd";
import {
  useTheme,
  useThemeUpdate,
} from "../../Context/settings/Theme/ThemeContext";
// them for toggles dark and light mode

function Header() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundImage: darkTheme
      ? "linear-gradient(45deg, #000000 0%, #b3b3b3"
      : "linear-gradient(45deg, #0093E9 0%, #80D0C7 100%)",
    color: darkTheme ? "#fff" : "#333",
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
        <span>ToDo App</span>
        <TbNotes />
      </LogoContainer>
    </Container>
  );
}

export default Header;
