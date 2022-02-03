import React from "react";
import { Container } from "../../assets/styles/commonStyles.css";
import { CartLogo, Logo, NavbarContainer, NavbarFlex } from "./Navbar.css";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Container>
        <NavbarFlex>
          <Logo>Electronix</Logo>
          <CartLogo />
        </NavbarFlex>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
