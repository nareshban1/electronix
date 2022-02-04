import React from "react";
import { Container } from "../../assets/styles/commonStyles.css";
import { CartLogo, Logo, NavbarContainer, NavbarFlex } from "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { showCart } from "../../store/modules/ToggleCart/toggleActions";
const Navbar = () => {
  const viewCart = useSelector((state: RootState) => state.toggleCart.viewCart);
  const dispatch = useDispatch();

  const displayCart = () => {
    if (viewCart === false) {
      dispatch(showCart());
    }
  };

  return (
    <NavbarContainer>
      <Container>
        <NavbarFlex>
          <Logo>Electronix</Logo>
          <CartLogo onClick={displayCart} />
        </NavbarFlex>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
