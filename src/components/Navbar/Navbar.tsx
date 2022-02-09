import React from "react";
import { Container } from "../../assets/styles/commonStyles.css";
import { CartLogo, Logo, NavbarContainer, NavbarFlex } from "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { showCart } from "../../store/modules/ToggleCart/toggleActions";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const viewCart = useSelector((state: RootState) => state.toggleCart.viewCart);
  const dispatch = useDispatch();

  const displayCart = () => {
    if (viewCart === false) {
      dispatch(showCart());
    }
  };
  const location = useLocation();

  return (
    <NavbarContainer>
      <Container>
        <NavbarFlex>
          <Logo>Electronix</Logo>
          {location.pathname !== "/checkout" && (
            <CartLogo onClick={displayCart} />
          )}
        </NavbarFlex>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
